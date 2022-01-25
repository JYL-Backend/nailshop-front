import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  FormControlLabel,
  Paper,
  TextField,
} from '@mui/material';
import { GRAY_COLOR, YELLOW_COLOR } from '../common/colors/ButtonColors';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { LoginValidationSchema } from '../valdiation/formValidationSchema';
import axios from 'axios';
import { SERVER_URL } from '../common/strings/ServerInfo';
import { useNoti } from '../hooks/useNoti';
import { useRecoilState } from 'recoil';
import { accessTokenAtom, refreshTokenAtom } from '../atom/tokenAtom';

const LoginPage = () => {
  const router = useRouter();
  const [isLogining, setIsLogining] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenAtom);
  const [snackbarSuccess, snackbarError] = useNoti();
  const handleOnClickRegister = () => {
    router.push('/register');
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: LoginValidationSchema,
    onSubmit: (values) => {
      setIsLogining(true);
      axios
        .post(SERVER_URL + '/login', values)
        .then((response) => {
          console.log(response.data);
          snackbarSuccess('로그인 완료');
          setIsLogining(false);
          setAccessToken({
            token: response.data.accessToken,
            expire: response.data.accessTokenExpiresIn,
          });
          setRefreshToken({
            token: response.data.refreshToken,
            expire: response.data.refreshTokenExpiresIn,
          });
        })
        .catch((error) => {
          console.log(error.response);
          const errorMsg = error?.response?.data?.message || '알수없는 에러가 발생했습니다';
          snackbarError(errorMsg);
          setIsLogining(false);
        });
    },
  });

  return (
    <form
      className={'w-full flex-1 flex items-center justify-center'}
      onSubmit={formik.handleSubmit}
    >
      <Paper className={'flex flex-col gap-y-5 p-10 w-full xl:w-[1000px]'} elevation={5}>
        <span className={'font-bold text-3xl'}>Nail Shop</span>
        <TextField
          label={'이메일'}
          variant={'standard'}
          value={formik.values.email}
          name={'email'}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.errors.email}
        />
        <TextField
          label={'비밀번호'}
          variant={'standard'}
          type={'password'}
          name={'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.errors.password}
        />
        <FormControlLabel control={<Checkbox />} label={'로그인 상태 유지'} />
        <Button
          type={'submit'}
          variant={'contained'}
          style={{ backgroundColor: YELLOW_COLOR }}
          className={'font-bold text-md py-3'}
          color="yellow"
        >
          {isLogining ? <CircularProgress size={20} /> : '로그인'}
        </Button>
        <Divider />
        <div className={'flex'}>
          <div className={'text-xs font-bold cursor-pointer'} onClick={handleOnClickRegister}>
            회원가입
          </div>
        </div>
      </Paper>
    </form>
  );
};

export default LoginPage;
