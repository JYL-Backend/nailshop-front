import React from 'react';

interface Props {
  price: number;
  discountPrice?: number;
  discountRate?: number;
  textSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | string;
}
const Price = ({ price, discountPrice, discountRate, textSize = 'base' }: Props) => {
  const cn = 'flex gap-x-2 ' + 'text-' + textSize;
  return (
    <div className={cn}>
      <span className={'font-bold'}>{price.toLocaleString()}</span>
      <span className={'text-gray-400 line-through'}>{discountPrice?.toLocaleString()}</span>
      <span className={'text-orange-600 font-bold'}>{discountRate}%</span>
    </div>
  );
};

export default Price;
