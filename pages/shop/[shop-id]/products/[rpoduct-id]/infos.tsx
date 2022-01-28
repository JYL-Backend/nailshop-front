import React from 'react';
import DetailLayout from '../../../../../layout/DetailLayout';
import {
  AccessTime,
  CampaignOutlined,
  FavoriteBorder,
  HeartBrokenOutlined,
  ShareOutlined,
} from '@mui/icons-material';
import Price from '../../../../../components/price/Price';
import ProfileShop from '../../../../../components/profile/ProfileShop';
import { Button, Divider } from '@mui/material';
import ReviewContainer from '../../../../../containers/review/ReviewContainer';
import PhotoReviewRowScroll from '../../../../../containers/review/PhotoReviewRowScroll';
import { JAMONG_COLOR, YELLOW_COLOR } from '../../../../../common/colors/ButtonColors';

const MenuInfoPage = () => {
  return (
    <div className={'flex flex-col w-full  gap-y-5 py-5'}>
      <img
        src={
          'https://img1.daumcdn.net/thumb/C750x750/?fname=https://mud-kage.kakao.com/dn/bh6MVi/btqtMBM0Xfg/JbWfji132tOa8PVIrQ8w6K/img_1080.jpg&scode=purple'
        }
      />
      <Divider />
      {/* title area*/}
      <div className={'w-full px-5 bg-white gap-y-3 flex flex-col'}>
        <div className={'flex gap-x-5 items-center'}>
          <div className={'flex gap-x-1 items-center'}>
            <FavoriteBorder className={'text-[30px]'} />
            <span className={'font-bold text-lg'}>48</span>
          </div>
          <ShareOutlined className={'text-[30px]'} />
        </div>
        <div className={'flex flex-col gap-y-2'}>
          <span className={'font-bold text-2xl'}>깔끔 젤 기본 손톱</span>
          <Price price={26400} discountPrice={33000} discountRate={20} textSize={'xl'} />
          <ProfileShop
            shopName={'크리스탈네일'}
            country={'양점점'}
            imgSrc={
              'https://mud-kage.kakao.com/dn/0nc91/btqtN84mCpX/Wh933B9hkpncuQxyUcJGS1/img_375x375.jpg'
            }
          />
        </div>
      </div>
      <Divider />
      {/*  info area */}
      <div className={'px-5 gap-y-5 flex flex-col text-sm'}>
        <div className={'flex items-center gap-x-2'}>
          <AccessTime />
          <span className={'font-bold'}>60분 소요</span>
        </div>
        <div>
          <div className={'flex items-center gap-x-2'}>
            <CampaignOutlined />
            <span className={'font-bold'}>부가정보</span>
          </div>
          <div className={'flex gap-x-5 font-light'}>
            <div className={'flex flex-col gap-y-1'}>
              <span>시술구성</span>
              <span>젤제거</span>
            </div>
            <div className={'flex flex-col gap-y-1'}>
              <span>네일</span>
              <span>별도</span>
            </div>
          </div>
        </div>
        <p className={'font-light'}>
          드릴케어+젤 투톤 풀콧+손 마사지(젤 제거 별도) 젤을 이용한 기본 풀콧 칼라링입니다. 두가지
          색상을 선택하실수 있습니다.
        </p>
      </div>
      <Divider />
      {/* review area */}
      <div className={'w-full px-5 gap-y-5 flex flex-col'}>
        <span className={'text-lg font-bold'}>포토 리뷰 11</span>
        <PhotoReviewRowScroll />
        <Divider />
        <span className={'text-lg font-bold'}>예약고객 리뷰 22</span>
        <ReviewContainer />
      </div>

      {/* 예약하기 버튼*/}
      <div className={'w-full bg-white sticky bottom-0 py-5 z-40'}>
        <Button
          variant={'contained'}
          style={{ backgroundColor: JAMONG_COLOR, color: 'white' }}
          className={'font-bold text-md py-3  w-full'}
          color={'jamong'}
        >
          예약하기
        </Button>
      </div>
    </div>
  );
};

MenuInfoPage.Layout = DetailLayout;

export default MenuInfoPage;
