import React from 'react';
import { useRecoilValue } from 'recoil';
import { accessTokenAtom } from '../atom/tokenAtom';
import LoginPage from '../containers/login/Login';
import MyPageComponent from '../containers/mypage/MyPage';

const MyPage = () => {
  const accessToken = useRecoilValue(accessTokenAtom);
  return accessToken.token == null ? <LoginPage /> : <MyPageComponent />;
};

export default MyPage;
