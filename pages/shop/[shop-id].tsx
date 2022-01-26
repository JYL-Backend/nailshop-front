import React from 'react';
import DetailLayout from '../../layout/DetailLayout';
import { Rating } from '@mui/material';
import {
  EventAvailable,
  FavoriteBorder,
  IosShareOutlined,
  LocalPhoneOutlined,
  LocationOnOutlined,
  ReportGmailerrorred,
} from '@mui/icons-material';
import { TmpShopPickMenus } from '../../tmp/TmpShopMenus';

const ShopDetailPage = () => {
  return (
    <div className={'flex flex-col w-full'}>
      <div className={'w-full  sticky top-0'}>
        <img
          className={'w-full '}
          src={
            'http://ausdesign.co.kr/wp-content/uploads/2015/07/%ED%97%A4%EC%96%B4%EC%83%B5A_05.jpg'
          }
        />
      </div>
      <div className={'w-full h-[3000px] bg-white rounded-3xl mt-[-70px] z-40 py-5 flex flex-col'}>
        <div
          className={
            'sticky top-9 w-full border-b-2 py-3 flex gap-x-5  text-gray-500  px-5 bg-white'
          }
        >
          <div className={'text-black font-bold'}>홈</div>
          <div>메뉴</div>
          <div>스타일</div>
          <div>리뷰</div>
        </div>
        <div className={' px-5 w-full flex flex-col gap-y-5 py-3'}>
          {/* 가게명, 점수*/}
          <div className={'flex flex-col gap-y-1'}>
            <span className={'text-xl font-bold'}>핑크네일 동서대점</span>
            <div className={'flex gap-x-1 items-center'}>
              <Rating value={5} readOnly className={'text-sm '} sx={{ zIndex: -1 }} />
              <span className={'text-sm'}>5.0</span>
            </div>
          </div>

          {/* 영업시간 */}
          <div className={'text-sm text-gray-700'}>
            <div className={'felx items-center'}>
              <EventAvailable />
              <span>영업시간</span>
            </div>
            <div>
              <span>11:00 ~ 20:00 (매주 일요일 휴무)</span>
            </div>
          </div>
          {/*  매장 정보*/}
          <div className={'text-sm text-gray-700'}>
            <div className={'felx items-center'}>
              <ReportGmailerrorred />
              <span>매장정보</span>
            </div>
            <div>
              <span className={'whitespace-pre-wrap'}>
                젤네일, 젤아트, 속눈썹펌, 속눈썹, 내향성발톱교정
              </span>
            </div>
          </div>

          {/* 찜, 위치, 전화, 공유 */}
          <div className={'flex w-full justify-around items-center py-3'}>
            <div className={'flex flex-col items-center gap-y-1'}>
              <FavoriteBorder className={'text-[30px]'} />
              <span className={'text-sm'}>3</span>
            </div>
            <div className={'flex flex-col items-center gap-y-1'}>
              <LocationOnOutlined className={'text-[30px]'} />
              <span className={'text-sm'}>위치</span>
            </div>
            <div className={'flex flex-col items-center gap-y-1'}>
              <LocalPhoneOutlined className={'text-[30px]'} />
              <span className={'text-sm'}>전화</span>
            </div>
            <div className={'flex flex-col items-center gap-y-1'}>
              <IosShareOutlined className={'text-[30px]'} />
              <span className={'text-sm'}>공유</span>
            </div>
          </div>

          {/*  픽메뉴 */}
        </div>
      </div>
    </div>
  );
};

ShopDetailPage.Layout = DetailLayout;

export default ShopDetailPage;
