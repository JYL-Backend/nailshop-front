import React from 'react';
import {useRecoilValue} from "recoil";
import {accessTokenAtom} from "../atom/tokenAtom";
import LoginPage from "../components/Login";

const MyPage = () => {
    const accessToken = useRecoilValue(accessTokenAtom);
    return (
        accessToken.token == null ? <LoginPage/> : (<div>dsa</div>)
    );
};

export default MyPage;
