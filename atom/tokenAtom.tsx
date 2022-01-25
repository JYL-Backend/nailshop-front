import {atom} from "recoil";

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
    default: null,
});