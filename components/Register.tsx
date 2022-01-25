import React from 'react';
import {Button, Divider, Paper, TextField} from "@mui/material";
import {YELLOW_COLOR} from "../colors/ButtonColors";

const RegisterBox = () => {
    return (
        <div className={'flex-1 w-full px-5 flex items-center justify-center'}>
            <Paper className={'flex flex-col w-full xl:w-[900px] p-10 gap-y-6'} elevation={5}>
                <span className={'text-2xl font-bold'}>회원가입</span>
                <Divider/>
                <TextField variant={'outlined'} label={'이메일'}/>
                <TextField variant={'outlined'} label={'패스워드'} type={'password'}/>
                <TextField variant={'outlined'} label={'패스워드 확인'} type={'password'}/>
                <Divider/>
                <TextField variant={'outlined'} label={'이름'} />
                <TextField variant={'outlined'} label={'전화번호'} />
                <Divider/>
                <Button variant={'contained'} style={{backgroundColor: YELLOW_COLOR}} className={'font-bold text-md py-3'} color='yellow'>회원가입</Button>
            </Paper>
        </div>
    );
};

export default RegisterBox;
