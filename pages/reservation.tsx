import React from 'react';
import { useRecoilValue } from 'recoil';
import { accessTokenAtom } from '../atom/tokenAtom';
import LoginPage from '../containers/login/Login';
import HomeLayout from '../layout/HomeLayout';

const ReservationPage = () => {
  const accessToken = useRecoilValue(accessTokenAtom);
  return accessToken.token == null ? <LoginPage /> : <div>dsa</div>;
};

export default ReservationPage;
