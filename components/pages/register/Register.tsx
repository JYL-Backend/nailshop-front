import React, { useState } from 'react';
import { Button, CircularProgress, Divider, Paper, TextField } from '@mui/material';
import { YELLOW_COLOR } from '../../../common/colors/ButtonColors';
import axios from 'axios';
import { SERVER_URL } from '../../../common/strings/ServerInfo';
import { RegisterValidationSchema } from '../../../valdiation/formValidationSchema';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import { useNoti } from '../../../hooks/useNoti';

const RegisterBox = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarSuccess, snackbarError] = useNoti();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      name: '',
      phoneNumber: '',
    },
    validationSchema: RegisterValidationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      axios
        .post(SERVER_URL + '/register', values)
        .then((response) => {
          snackbarSuccess('회원가입이 완료되었습니다');
          router.push('/my');
        })
        .catch((error) => {
          console.log(error.response);
          const errorMsg = error?.response?.data?.message || '알수없는 에러가 발생했습니다';
          snackbarError(errorMsg);
          setIsSubmitting(false);
        });
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className={'flex-1 w-full px-5 flex items-center justify-center'}
    >
      <Paper className={'flex flex-col w-full p-10 gap-y-6'} elevation={5}>
        <span className={'text-2xl font-bold'}>회원가입</span>
        <Divider />
        <TextField
          variant={'outlined'}
          label={'이메일'}
          value={formik.values.email}
          name={'email'}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          variant={'outlined'}
          label={'패스워드'}
          type={'password'}
          value={formik.values.password}
          name={'password'}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          variant={'outlined'}
          label={'패스워드 확인'}
          type={'password'}
          value={formik.values.passwordConfirm}
          name={'passwordConfirm'}
          onChange={formik.handleChange}
          error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
          helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
        />
        <Divider />
        <TextField
          variant={'outlined'}
          label={'이름'}
          value={formik.values.name}
          name={'name'}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          type={'number'}
          variant={'outlined'}
          label={'전화번호'}
          value={formik.values.phoneNumber}
          name={'phoneNumber'}
          onChange={formik.handleChange}
          error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <Divider />
        <Button
          disabled={isSubmitting}
          type={'submit'}
          variant={'contained'}
          style={{ backgroundColor: YELLOW_COLOR }}
          className={'font-bold text-md py-3'}
          color="yellow"
        >
          {isSubmitting ? <CircularProgress size={25} /> : <span>회원가입</span>}
        </Button>
      </Paper>
    </form>
  );
};

export default RegisterBox;
