import React from 'react';

interface Props {
  jobTitle: string;
  nickname: string;
  content: string;
  registDt: string;
  profileImg: string;
}

const DesignerAnswerBox = ({ jobTitle, nickname, content, registDt, profileImg }: Props) => {
  return (
    <div className={'w-full flex flex-col gap-y-2 bg-gray-100 p-5 rounded-lg'}>
      <div className={'flex gap-x-2 items-center text-sm font-bold'}>
        <img src={profileImg} className={'w-[35px] h-[35px] rounded-full'} />
        <span>{jobTitle}</span>
        <span>{nickname}</span>
      </div>
      <p className={'text-sm'}>{content}</p>
      <div className={'flex gap-x-3 text-sm text-gray-600'}>
        <span>{registDt}</span>
        <span>신고</span>
      </div>
    </div>
  );
};

export default DesignerAnswerBox;
