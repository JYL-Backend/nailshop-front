import React from 'react';
import Head from "next/head";
import {Search} from "@mui/icons-material";
import {Tab, Tabs} from "@mui/material";
import HeaderLayout1 from "../components/layout1/HeaderLayout1";
import NavMenuBar from "../components/layout1/NavMenuBar";

const HomeLayout = ({children}) => {
    return (

        <div className="flex flex-col items-center justify-center w-full h-screen">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </Head>

            <main className="flex flex-col  w-full  flex-1  text-center px-5 xl:px-10">
                {/* 헤더 */}
                <HeaderLayout1/>

                {/* Nav */}
                <NavMenuBar/>

                <div className={'flex-1 w-full flex flex-col'}>
                    {children}
                </div>
            </main>
        </div>
    );
};

export default HomeLayout;
