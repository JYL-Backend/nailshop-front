import React from 'react';
import DetailLayout from '../../layout/DetailLayout';
import { Divider, Rating } from '@mui/material';
import {
  EventAvailable,
  FavoriteBorder,
  IosShareOutlined,
  LocalPhoneOutlined,
  LocationOnOutlined,
  ReportGmailerrorred,
} from '@mui/icons-material';
import { TmpShopPickMenus } from '../../tmp/TmpShopMenus';
import MenuRow from '../../containers/shopdetail/MenuRow';
import { TmpShopStyles } from '../../tmp/TmpShopStyles';
import { TmpShopReviewThumbnails } from '../../tmp/TmpShopReviewThumbnails';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCube, Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ReviewContainer from '../../containers/review/ReviewContainer';
import PhotoReviewRowScroll from '../../containers/review/PhotoReviewRowScroll';

SwiperCore.use([Navigation, Pagination]);

const ShopDetailPage = () => {
  return (
    <div className={'flex flex-col w-full'}>
      <div className={'w-full  sticky top-0'}>
        <Swiper
          grabCursor={true}
          navigation={true}
          style={{ '--swiper-navigation-color': 'white' } as React.CSSProperties}
        >
          <SwiperSlide>
            <div className={'w-full h-[300px] xl:h-[400px] overflow-hidden'}>
              <img
                src={
                  'http://ausdesign.co.kr/wp-content/uploads/2015/07/%ED%97%A4%EC%96%B4%EC%83%B5A_05.jpg'
                }
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={'w-full h-[300px] xl:h-[400px] overflow-hidden'}>
              <img
                src={
                  'https://search.pstatic.net/common/?src=https%3A%2F%2Fmodo-phinf.pstatic.net%2F20210925_37%2F16324990956141s93T_JPEG%2Fmosa33JTpN.jpeg&type=sc960_832'
                }
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={'w-full h-[300px] xl:h-[400px] overflow-hidden'}>
              <img
                src={
                  'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMDVfMTYg%2FMDAxNjQxMzk0MDIyMzEx.UuMfzFU3-oMg-iKyX_vETfurZBIbGHDqbhQrox9N9U0g.s02f4OwQNHC_VmMWhlHo59xeB-lPAjUtg7PN4aOdMLIg.JPEG.dong13bang%2FIMG_7714.jpg&type=sc960_832'
                }
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className={
          'w-full h-[3000px] bg-white rounded-3xl mt-[-100px] xl:mt-[-70px] z-40 py-5 flex flex-col'
        }
      >
        <div
          className={
            'sticky top-9 w-full border-b-2 py-3 flex gap-x-5  text-gray-500  px-5 bg-white z-40'
          }
        >
          <div className={'text-black font-bold'}>???</div>
          <div>??????</div>
          <div>?????????</div>
          <div>??????</div>
        </div>
        <div className={' px-5 w-full flex flex-col gap-y-5 py-3'}>
          {/* ?????????, ??????*/}
          <div className={'flex flex-col gap-y-1'}>
            <span className={'text-xl font-bold'}>???????????? ????????????</span>
            <div className={'flex gap-x-1 items-center'}>
              <Rating value={5} readOnly className={'text-sm '} sx={{ zIndex: -1 }} />
              <span className={'text-sm'}>5.0</span>
            </div>
          </div>
          {/* ???????????? */}
          <div className={'text-sm text-gray-700'}>
            <div className={'felx items-center'}>
              <EventAvailable />
              <span>????????????</span>
            </div>
            <div>
              <span>11:00 ~ 20:00 (?????? ????????? ??????)</span>
            </div>
          </div>
          {/*  ?????? ??????*/}
          <div className={'text-sm text-gray-700'}>
            <div className={'felx items-center'}>
              <ReportGmailerrorred />
              <span>????????????</span>
            </div>
            <div>
              <span className={'whitespace-pre-wrap'}>
                ?????????, ?????????, ????????????, ?????????, ?????????????????????
              </span>
            </div>
          </div>
          {/* ???, ??????, ??????, ?????? */}
          <div className={'flex w-full justify-around items-center py-3'}>
            <div className={'flex flex-col items-center gap-y-1'}>
              <FavoriteBorder className={'text-[30px]'} />
              <span className={'text-sm'}>3</span>
            </div>
            <div className={'flex flex-col items-center gap-y-1'}>
              <LocationOnOutlined className={'text-[30px]'} />
              <span className={'text-sm'}>??????</span>
            </div>
            <div className={'flex flex-col items-center gap-y-1'}>
              <LocalPhoneOutlined className={'text-[30px]'} />
              <span className={'text-sm'}>??????</span>
            </div>
            <div className={'flex flex-col items-center gap-y-1'}>
              <IosShareOutlined className={'text-[30px]'} />
              <span className={'text-sm'}>??????</span>
            </div>
          </div>
          {/*  ????????? */}
          <span className={'text-lg font-bold'}>?????????</span>
          <Divider />
          {TmpShopPickMenus.map((pickMenu) => (
            <>
              <MenuRow
                imgSrc={pickMenu.imgSrc}
                name={pickMenu.name}
                price={pickMenu.price}
                discountPrice={pickMenu.discountPrice}
                discountRate={pickMenu.discountRate}
                link={pickMenu.link}
              />
              <Divider />
            </>
          ))}
          {/* ????????? */}
          <span className={'text-lg font-bold'}>??? ????????? ????????? 11</span>
          <div className={'flex flex-wrap  gap-y-1 w-full justify-between'}>
            {TmpShopStyles.map((img) => (
              <div className={'w-[33.3%] h-auto  h-auto overflow-hidden'}>
                <img src={img.imgSrc} />
              </div>
            ))}
          </div>
          <Divider />
          {/* ???????????? ?????? */}
          <span className={'text-lg font-bold'}>???????????? ?????? 11</span>
          <PhotoReviewRowScroll />
          <Divider />
          {/* ?????? ??????*/}
          <ReviewContainer />
        </div>
      </div>
    </div>
  );
};

ShopDetailPage.Layout = DetailLayout;

export default ShopDetailPage;
