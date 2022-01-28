import React from 'react';

interface Props {
  imgSrc?: string;
  shopName: string;
  country: string;
}

const ProfileShop = ({ imgSrc, shopName, country }: Props) => {
  return (
    <div className={'flex gap-x-2 items-center text-sm font-normal'}>
      <img src={imgSrc} className={'w-[30px] rounded-full'} />
      <span>{shopName}</span>
      <span>{country}</span>
    </div>
  );
};

export default ProfileShop;
