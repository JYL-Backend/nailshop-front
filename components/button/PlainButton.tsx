import React from 'react';

interface Props {
  text: string;
  onClick?: () => {};
}

const PlainButton = ({ text, onClick }: Props) => {
  return <div className={'text-gray-500 text-sm cursor-pointer'}>{text}</div>;
};

export default PlainButton;
