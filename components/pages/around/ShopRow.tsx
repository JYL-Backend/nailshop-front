import React from 'react';
import { ChatBubble, Star } from '@mui/icons-material';
import { useRouter } from 'next/router';

interface Props {
  id: number;
  name: string;
  rating: string;
  commentCount: number;
  simpleAddress: string;
  price: string;
  thumbnailUrl: string;
}

const ShopRow = ({ shop }: Props) => {
  const router = useRouter();
  return (
    <div
      className={'flex  px-5  gap-x-5 cursor-pointer'}
      onClick={() => {
        router.push('/shop/' + shop.id);
      }}
    >
      <div className={'w-[100px] h-[100px] flex flex-col  rounded-xl overflow-hidden'}>
        <img src={shop.thumbnailUrl} className={'w-full flex-1'} />
      </div>
      <div className={'flex-1 flex flex-col items-start justify-between'}>
        <span className={'font-bold text-base '}>{shop.name}</span>
        <div className={'flex items-center'}>
          <Star className={'text-sm text-yellow-500 '} />
          <span className={'text-sm '}>{shop.rating}</span>
          <ChatBubble className={'ml-2 text-sm text-gray-500 '} />
          <span className={'text-sm '}>{shop.commentCount}</span>
        </div>
        <span className={'text-xs text-left text-gray-800 '}>{shop.simpleAddress}</span>
        <span className={'text-sm text-orange-500  '}>{shop.price}</span>
      </div>
    </div>
  );
};

export default ShopRow;
