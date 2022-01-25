import React from 'react';
import * as yup from 'yup';

// 회원가입 폼
export const RegisterValidationSchema = yup
  .object()
  .shape({
    email: yup.string().email('이메일 형식이 아닙니다').required('이메일을 필수 값입니다'),
    password: yup
      .string()
      .required('패스워드는 필수값입니다')
      .min(8, '패스워드는 8~20자로 입력해주세요')
      .max(20, '패스워드는 8~20자로 입력해주세요'),
    passwordConfirm: yup
      .string()
      .required('패스워드는 필수값입니다')
      .min(8, '패스워드는 8~20자로 입력해주세요')
      .max(20, '패스워드는 8~20자로 입력해주세요')
      .oneOf([yup.ref('password'), null], '패스워드가 일치하지 않습니다'),
    name: yup
      .string()
      .required('이름은 필수값입니다')
      .min(1, '이름은 1~20자로 입력해주세요')
      .max(20, '이름은 1~20자로 입력해주세요'),
    phoneNumber: yup
      .string()
      .required('휴대폰번호는 필수값입니다')
      .min(1, '휴대폰번호는 1~20자로 입력해주세요')
      .max(20, '휴대폰번호는 1~20자로 입력해주세요'),
  })
  .required();
