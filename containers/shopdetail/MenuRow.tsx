import React from 'react';
import { Divider } from '@mui/material';

interface Props {
  imgSrc?: string;
  name: string;
  price: string;
  discountPrice?: string;
  discountRate?: string;
}

const MenuRow = ({ imgSrc, name, price, discountPrice, discountRate }: Props) => {
  return (
    <div className={'flex'}>
      <div className={'w-[100px] h-[100px] flex flex-col rounded-xl overflow-hidden'}>
        <img src={imgSrc} className={'flex-1 w-full'} />
      </div>
      <div className={'ml-4 text-sm gap-y-1 flex flex-col'}>
        <span>{name}</span>
        <div className={'flex gap-x-2'}>
          <span className={'font-bold'}>{price}</span>
          <span className={'text-gray-400 line-through'}>{discountPrice}</span>
          <span className={'text-orange-600 font-bold'}>{discountRate}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuRow;
