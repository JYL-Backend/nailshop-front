import React from 'react';
import { ChatBubble, Star } from '@mui/icons-material';

interface Props {
  name: string;
  rating: string;
  commentCount: number;
  simpleAddress: string;
  price: string;
  thumbnailUrl: string;
}

const ShopRow = ({ shop }: Props) => {
  return (
    <div className={'flex  px-5 xl:px-10 gap-x-5'}>
      <div
        className={
          'w-[100px] h-[100px] flex flex-col xl:w-[200px] xl:h-[200px] rounded-xl overflow-hidden'
        }
      >
        <img src={shop.thumbnailUrl} className={'w-full flex-1'} />
      </div>
      <div className={'flex-1 flex flex-col items-start justify-between'}>
        <span className={'font-bold text-base xl:text-xl'}>{shop.name}</span>
        <div className={'flex items-center'}>
          <Star className={'text-sm text-yellow-500 xl:text-lg'} />
          <span className={'text-sm xl:text-lg'}>{shop.rating}</span>
          <ChatBubble className={'ml-2 text-sm text-gray-500 xl:text-lg'} />
          <span className={'text-sm xl:text-lg'}>{shop.commentCount}</span>
        </div>
        <span className={'text-xs text-left text-gray-800 xl:text-sm'}>{shop.simpleAddress}</span>
        <span className={'text-sm text-orange-500  xl:text-lg'}>{shop.price}</span>
      </div>
    </div>
  );
};

export default ShopRow;
