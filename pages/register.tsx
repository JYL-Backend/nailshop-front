import React from 'react';
import DetailLayout from '../layout/DetailLayout';
import { Paper } from '@mui/material';
import RegisterBox from '../containers/register/Register';

const RegisterPage = () => {
  return <RegisterBox />;
};

RegisterPage.Layout = DetailLayout;

export default RegisterPage;
