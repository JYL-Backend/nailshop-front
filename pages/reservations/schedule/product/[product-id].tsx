import React from 'react';
import DetailLayout from '../../../../layout/DetailLayout';
import { Divider } from '@mui/material';

const ReservationPage = () => {
  return (
    <div>
      <div className={'font-bold text-2xl'}>예약하기</div>

      <div className={'flex flex-col gap-y-5'}>
        {/* 메뉴 정보*/}
        <div className={'flex flex-col gap-y-2 py-2'}>
          <div className={'flex'}>
            <div className={'text-gray-500 w-[100px]'}>매장/메뉴</div>
            <div>
              <div>크리스탈네일 양점점</div>
              <div>깔끔 젤 기본 손톱</div>
            </div>
          </div>
          <div className={'flex'}>
            <div className={'text-gray-500  w-[100px]'}>메뉴가격</div>
            <div className={'font-bold'}>26,400</div>
          </div>
        </div>
        <Divider />

        {/* 날짜 선택 */}
        <span className={'font-bold text-xl'}>날짜 선택</span>
      </div>
    </div>
  );
};

ReservationPage.Layout = DetailLayout;

export default ReservationPage;
