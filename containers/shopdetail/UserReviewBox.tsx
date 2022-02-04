import React from 'react';
import { Divider, Rating } from '@mui/material';
import { UserReviewInterface } from '../../interface/UserReviewInterface';

const UserReviewbox = ({
  nickname,
  name,
  registDt,
  reservationCount,
  rating,
  content,
  imgSrc,
}: UserReviewInterface) => {
  return (
    <div className={'gap-y-1 flex flex-col'}>
      <div>
        <span className={'font-bold'}>{nickname}</span>
        <div className={'flex items-center gap-x-2'}>
          <Rating value={5} readOnly className={'text-sm '} sx={{ zIndex: -1 }} />
          <span className={'text-sm'}>{rating}</span>
        </div>
      </div>

      <p className={'text-sm'}>{content}</p>
      <img src={imgSrc} className={'w-[100px] '} />
      <div className={'text-gray-500 flex gap-x-2 text-sm'}>
        <span>{nickname}</span>
        <span>{registDt}</span>
        <span>{reservationCount}번째 예약</span>
        <span>신고</span>
      </div>
    </div>
  );
};

export default UserReviewbox;
