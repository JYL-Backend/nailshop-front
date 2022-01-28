import React from 'react';
import { HomeOutlined, KeyboardArrowLeft } from '@mui/icons-material';
import { useRouter } from 'next/router';
import Head from 'next/head';
import HeaderLayout1 from '../containers/layout1/HeaderLayout1';
import NavMenuBar from '../containers/layout1/NavMenuBar';

const DetailLayout = ({ children }) => {
  const router = useRouter();
  const handleClickBack = () => {
    router.back();
  };
  const handleClickHome = () => {
    router.push('/');
  };
  return (
    <div className="flex flex-col items-center justify-center w-full md:w-[740px] mx-auto ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel={'stylesheet'} href={'http://fonts.googleapis.com/earlyaccess/notosanskr.css'} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=402528eeece9c02354f57dc2744dcb2f"
        ></script>
      </Head>

      <main className="flex flex-col  w-full  flex-1  ">
        <div className="flex flex-col items-center justify-center w-full md:w-[650px] mx-auto ">
          <div className={'w-full flex gap-x-3 px-5 items-center sticky top-0 z-50 bg-white'}>
            <KeyboardArrowLeft
              sx={{ fontSize: 40 }}
              className={'cursor-pointer'}
              onClick={handleClickBack}
            />
            <HomeOutlined
              sx={{ fontSize: 33 }}
              className={'cursor-pointer'}
              onClick={handleClickHome}
            />
          </div>
          <div className={' flex-1 flex flex-col w-full'}>{children}</div>
        </div>
      </main>
    </div>
  );
};

export default DetailLayout;
