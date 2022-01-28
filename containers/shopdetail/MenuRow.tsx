import React from 'react';
import { Divider } from '@mui/material';
import { useRouter } from 'next/router';
import Price from '../../components/price/Price';

interface Props {
  imgSrc?: string;
  name: string;
  price: string;
  discountPrice?: string;
  discountRate?: string;
  link: string;
}

const MenuRow = ({ imgSrc, name, price, discountPrice, discountRate, link }: Props) => {
  const router = useRouter();
  return (
    <div className={'flex cursor-pointer'} onClick={() => router.push(link)}>
      <div className={'w-[100px] h-[100px] flex flex-col rounded-xl overflow-hidden'}>
        <img src={imgSrc} className={'flex-1 w-full'} />
      </div>
      <div className={'ml-4 text-sm gap-y-1 flex flex-col'}>
        <span>{name}</span>
        <Price price={price} discountPrice={discountPrice} discountRate={discountRate} />
      </div>
    </div>
  );
};

export default MenuRow;
