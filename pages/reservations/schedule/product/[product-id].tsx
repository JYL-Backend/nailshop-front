import React from 'react';
import DetailLayout from '../../../../layout/DetailLayout';
import { Button, Divider } from '@mui/material';
import DatePickerHorizontal from '../../../../components/datapicker/DatePickerHorizontal';
import TimePickerTable from '../../../../components/datapicker/TimePickerTable';
import { JAMONG_COLOR, YELLOW_COLOR } from '../../../../common/colors/ButtonColors';

const ReservationPage = () => {
  return (
    <div className={'flex flex-col gap-y-5 px-5 xl:px-0'}>
      <div className={'font-bold text-2xl'}>예약하기</div>

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
      <DatePickerHorizontal />
      <Divider />

      {/* 시간 선택*/}
      <span className={'font-bold text-xl'}>시간 선택</span>
      <TimePickerTable />

      {/* 총 결제금액*/}
      <div className={'w-full sticky  bottom-0 bg-white flex py-3 px-3'}>
        <div className={'flex-1 flex flex-col'}>
          <span className={'text-sm text-gray-600 font-semibold text-xs'}>총 결제 금액</span>
          <span className={'font-bold'}>26,400원</span>
        </div>
        <div className={'flex-1'}>
          <Button
            variant={'contained'}
            color={'jamong'}
            style={{ backgroundColor: JAMONG_COLOR }}
            className={'w-full h-full text-white font-bold'}
          >
            예약하기
          </Button>
        </div>
      </div>
    </div>
  );
};

ReservationPage.Layout = DetailLayout;

export default ReservationPage;
