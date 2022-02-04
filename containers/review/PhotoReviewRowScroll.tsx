import React from 'react';
import { TmpShopReviewThumbnails } from '../../tmp/TmpShopReviewThumbnails';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const PhotoReviewRowScroll = () => {
  return (
    <div className={'w-full'}>
      <Swiper spaceBetween={5} slidesPerView={6.3} className={'w-full hidden xl:block z-0'}>
        {TmpShopReviewThumbnails.map((thumbnail) => (
          <SwiperSlide>
            <img src={thumbnail.imgSrc} className={'rounded-sm z-0'} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper spaceBetween={5} slidesPerView={4.2} className={'w-full z-0 xl:hidden'}>
        {TmpShopReviewThumbnails.map((thumbnail) => (
          <SwiperSlide>
            <img src={thumbnail.imgSrc} className={'rounded-sm  z-0'} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoReviewRowScroll;
