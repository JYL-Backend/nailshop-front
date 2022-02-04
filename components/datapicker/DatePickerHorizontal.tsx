import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { WEEK_ARRAY } from '../../common/strings/Week';
import 'swiper/css';

interface Props {
  startDate?: Date;
  duration?: number;
  onClick?: () => {};
}

const DatePickerHorizontal = ({ startDate = new Date(), duration = 30 }: Props) => {
  const [selectedDate, setSelectedDate] = useState(startDate?.toLocaleDateString());
  const week = WEEK_ARRAY;
  let dayArray = [];
  for (let i = 0; i < duration; i++) {
    let d = new Date(startDate);
    d.setDate(d?.getDate() + i);
    dayArray.push(d);
  }

  const handleDateClick = (d: string) => {
    setSelectedDate(d);
  };

  return (
    <>
      <div className={'w-full hidden xl:block'}>
        <Swiper slidesPerView={10} className={'w-full  xl:block z-0'}>
          {dayArray.map((d) => {
            return (
              <SwiperSlide>
                <div
                  className={'flex flex-col items-center gap-y-3 cursor-pointer'}
                  onClick={() => {
                    handleDateClick(d.toLocaleDateString());
                  }}
                >
                  <div className={'text-gray-500'}>{week[d.getDay()]}</div>
                  <div
                    className={`font-bold w-[40px] h-[40px] rounded-full flex items-center justify-center ${
                      selectedDate == d.toLocaleDateString() ? 'bg-black text-white' : ''
                    }`}
                  >
                    {d.getDate()}
                  </div>
                  <div className={'text-sm text-gray-400'}>
                    {d.toLocaleDateString() == new Date().toLocaleDateString() ? '오늘' : ''}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className={'w-full xl:hidden'}>
        <Swiper slidesPerView={6} className={'w-full  xl:block z-0'}>
          {dayArray.map((d) => {
            return (
              <SwiperSlide>
                <div
                  className={'flex flex-col items-center gap-y-3 cursor-pointer'}
                  onClick={() => {
                    handleDateClick(d.toLocaleDateString());
                  }}
                >
                  <div className={'text-gray-500'}>{week[d.getDay()]}</div>
                  <div
                    className={`font-bold w-[40px] h-[40px] rounded-full flex items-center justify-center ${
                      selectedDate == d.toLocaleDateString() ? 'bg-black text-white' : ''
                    }`}
                  >
                    {d.getDate()}
                  </div>
                  <div className={'text-sm text-gray-400'}>
                    {d.toLocaleDateString() == new Date().toLocaleDateString() ? '오늘' : ''}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default DatePickerHorizontal;
