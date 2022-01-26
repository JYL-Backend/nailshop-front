import React from 'react';
import { useRecoilValue } from 'recoil';
import { accessTokenAtom } from '../atom/tokenAtom';
import LoginPage from '../components/pages/login/Login';
import MyPageComponent from '../components/pages/mypage/MyPage';

const MyPage = () => {
  const accessToken = useRecoilValue(accessTokenAtom);
  return accessToken.token == null ? <LoginPage /> : <MyPageComponent />;
};

export default MyPage;
