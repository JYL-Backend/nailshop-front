import React from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenAtom, refreshTokenAtom } from '../atom/tokenAtom';
import axios from 'axios';
import { SERVER_URL } from '../common/strings/ServerInfo';
import { notiStackAtom } from '../atom/snackbarAtom';
import { useNoti } from '../hooks/useNoti';

function useCustomAxios() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenAtom);

  const customAxios = axios.create({
    baseURL: SERVER_URL,
  });

  const [snackbarError] = useNoti();

  customAxios.interceptors.request.use(
    async function (config: any) {
      console.log('call request axios');

      // 토큰 헤더에
      if (accessToken.token != null) {
        console.log('토큰이 존재한다');
        config.headers.Authorization = 'Bearer ' + accessToken.token;
      }

      // 만약 현재시간이 만료 100초전? 새토큰 발급
      if ((accessToken.expire ? accessToken.expire : 0) - 100 * 1000 < new Date().getTime()) {
        await axios
          .post(SERVER_URL + '/token/reissue', {
            accessToken: accessToken.token,
            refreshToken: refreshToken,
          })
          .then((response) => {
            console.log('토큰 재발급');
            console.log(response.data);
            const newAccessToken = response.data.data.accessToken;
            const newAccessTokenExpiresIn = response.data.data.accessTokenExpiresIn;
            setAccessToken({
              token: newAccessToken,
              expire: newAccessTokenExpiresIn,
            });
            config.headers.Authorization = 'Bearer ' + newAccessToken;
          });
        console.log('토큰 만료 ㅋ');
      }

      console.log(config.headers);

      return config;
    },
    function (error) {
      console.log('req');
      return Promise.reject(null);
    },
  );

  customAxios.interceptors.response.use(
    function (response) {
      return response;
    },

    function (error) {
      console.log(error.response);
      const msg = error?.response?.data?.message;
      console.log(msg);
      snackbarError(msg);
      return Promise.reject(null);
    },
  );
  return { customAxios };
}

export default useCustomAxios;
