import React from 'react';
import { HomeOutlined, KeyboardArrowLeft } from '@mui/icons-material';
import { useRouter } from 'next/router';

const DetailLayout = ({ children }) => {
  const router = useRouter();
  const handleClickBack = () => {
    router.back();
  };
  const handleClickHome = () => {
    router.push('/');
  };
  return (
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
      <div className={' flex-1 flex flex-col'}>{children}</div>
    </div>
  );
};

export default DetailLayout;
