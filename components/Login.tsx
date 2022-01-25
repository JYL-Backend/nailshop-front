import React from 'react';
import {Button, Checkbox, Divider, FormControlLabel, Paper, TextField} from "@mui/material";
import {GRAY_COLOR, YELLOW_COLOR} from "../common/colors/ButtonColors";
import {useRouter} from "next/router";

const LoginPage = () => {
    const router = useRouter();
    const handleOnClickRegister = () => {
        router.push('/register');
    }
    return (
        <div className={'w-full flex-1 flex items-center justify-center'}>
            <Paper className={'flex flex-col gap-y-5 p-10 w-full xl:w-[1000px]'} elevation={5}>
                <span className={'font-bold text-3xl'}>Nail Shop</span>
                <TextField label={'이메일'}  variant={'standard'} />
                <TextField label={'비밀번호'} variant={'standard'} type={'password'}/>
                <FormControlLabel control={<Checkbox/>} label={"로그인 상태 유지"}/>
                <Button variant={'contained'} style={{backgroundColor: YELLOW_COLOR}} className={'font-bold text-md py-3'} color='yellow'>로그인</Button>
                <Divider/>
                <div className={'flex'}>
                    <div className={'text-xs font-bold cursor-pointer'} onClick={handleOnClickRegister} >회원가입</div>
                </div>
            </Paper>
        </div>
    );
};

export default LoginPage;
