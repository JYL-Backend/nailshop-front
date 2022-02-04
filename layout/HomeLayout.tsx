import React from 'react';
import Head from 'next/head';
import { Search } from '@mui/icons-material';
import { Tab, Tabs } from '@mui/material';
import HeaderLayout1 from '../containers/layout1/HeaderLayout1';
import NavMenuBar from '../containers/layout1/NavMenuBar';

const HomeLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:w-[740px] mx-auto ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel={'stylesheet'} href={'http://fonts.googleapis.com/earlyaccess/notosanskr.css'} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=402528eeece9c02354f57dc2744dcb2f"
        ></script>
      </Head>

      <main className="flex flex-col  w-full  flex-1  text-center px-5">
        {/* 헤더 */}
        <HeaderLayout1 />

        {/* Nav */}
        <NavMenuBar />

        <div className={'w-full '}>{children}</div>
      </main>
    </div>
  );
};

export default HomeLayout;
