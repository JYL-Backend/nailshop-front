import { atom } from 'recoil';

// 엑세스 토큰
export const accessTokenAtom = atom({
  key: 'accessTokenAtom',
  default: {
    token: null,
    expire: null,
  },
});

// 리프레시 토큰
export const refreshTokenAtom = atom({
  key: 'refreshTokenAtom',
  default: {
    token: null,
    expire: null,
  },
});

// 사용자명
export const userInfoAtom = atom({
  key: 'userInfoAtom',
  default: {
    email: null,
    name: null,
  },
});
