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
import UserReviewbox from '../../containers/shopdetail/UserReviewBox';
import { TmpUserReviews } from '../../tmp/TmpUserReview';
import DesignerAnswerBox from '../../containers/shopdetail/DesignerAnswerBox';

SwiperCore.use([Navigation, Pagination]);

const ShopDetailPage = () => {
  return (
    <div className={'flex flex-col w-full'}>
      <div className={'w-full  sticky top-0'}>
        <Swiper
          grabCursor={true}
          navigation={true}
          style={{ '--swiper-navigation-color': 'white' }}
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
          <span className={'text-lg font-bold'}>픽메뉴</span>
          <Divider />
          {TmpShopPickMenus.map((pickMenu) => (
            <>
              <MenuRow
                imgSrc={pickMenu.imgSrc}
                name={pickMenu.name}
                price={pickMenu.price}
                discountPrice={pickMenu.discountPrice}
                discountRate={pickMenu.discountRate}
              />
              <Divider />
            </>
          ))}
          {/* 스따일 */}
          <span className={'text-lg font-bold'}>이 매장의 스타일 11</span>
          <div className={'flex flex-wrap  gap-y-1 w-full justify-between'}>
            {TmpShopStyles.map((img) => (
              <div className={'w-[33.3%] h-auto  h-auto overflow-hidden'}>
                <img src={img.imgSrc} />
              </div>
            ))}
          </div>
          <Divider />
          {/* 예약고객 리뷰 */}
          <span className={'text-lg font-bold'}>예약고객 리뷰 11</span>
          <Swiper spaceBetween={5} slidesPerView={6.3} className={'w-full hidden xl:block z-0'}>
            {TmpShopReviewThumbnails.map((thumbnail) => (
              <SwiperSlide>
                <img src={thumbnail.imgSrc} className={'rounded-sm z-0'} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper spaceBetween={5} slidesPerView={4.2} className={'w-full z-0'}>
            {TmpShopReviewThumbnails.map((thumbnail) => (
              <SwiperSlide>
                <img src={thumbnail.imgSrc} className={'rounded-sm xl:hidden z-0'} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Divider />
          {/* 리뷰 박스*/}
          {TmpUserReviews.map((review) => (
            <>
              <UserReviewbox
                nickname={review.nickname}
                name={review.name}
                registDt={review.registDt}
                reservationCount={review.reservationCount}
                rating={review.rating}
                content={review.content}
                imgSrc={review.imgSrc}
              />
              <DesignerAnswerBox
                jobTitle={'수석디자이너'}
                nickname={'준영'}
                content={
                  '소중한 리뷰 감사합니다. 고객님!!^^\n' +
                  '\n' +
                  '한듯 안한듯 이쁜 시럽젤 \n' +
                  '손이 더욱더 깨끗해보여요~\n' +
                  '\n' +
                  '코로나 때문에 우울하지만 이뻐진 손톱 보고 힐링 하시길 바랍니다~\n' +
                  '\n' +
                  '다음에도 또 뵙겠습니다!!\n' +
                  '감사합니다더욱더 노력하는 크리스탈 되겠습니다.~~~~♥♥♥♥'
                }
                registDt={'15시간전'}
                profileImg={
                  'https://mud-kage.kakao.com/dn/bWZPs1/btrlr5Uy6Vv/QIjcKWXuOpDPwiS8yI3knk/img_375x375.jpg'
                }
              />
              <Divider />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

ShopDetailPage.Layout = DetailLayout;

export default ShopDetailPage;
