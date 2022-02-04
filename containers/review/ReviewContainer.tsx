import React from 'react';
import UserReviewbox from '../shopdetail/UserReviewBox';
import DesignerAnswerBox from '../shopdetail/DesignerAnswerBox';
import { Divider } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { userReviewsAtom } from '../../atom/UserReviewsAtom';

const ReviewContainer = () => {
  const userReviews = useRecoilValue(userReviewsAtom);
  return (
    <>
      {userReviews.map((review) => (
        <>
          <UserReviewbox
            nickname={review.nickname}
            name={review.name}
            registDt={review.registDt}
            reservationCount={review.reservationCount}
            rating={review.rating}
            content={review.content}
            imgSrc={review.imgSrc}
          />
          <DesignerAnswerBox
            jobTitle={'수석디자이너'}
            nickname={'준영'}
            content={
              '소중한 리뷰 감사합니다. 고객님!!^^\n' +
              '\n' +
              '한듯 안한듯 이쁜 시럽젤 \n' +
              '손이 더욱더 깨끗해보여요~\n' +
              '\n' +
              '코로나 때문에 우울하지만 이뻐진 손톱 보고 힐링 하시길 바랍니다~\n' +
              '\n' +
              '다음에도 또 뵙겠습니다!!\n' +
              '감사합니다더욱더 노력하는 크리스탈 되겠습니다.~~~~♥♥♥♥'
            }
            registDt={'15시간전'}
            profileImg={
              'https://mud-kage.kakao.com/dn/bWZPs1/btrlr5Uy6Vv/QIjcKWXuOpDPwiS8yI3knk/img_375x375.jpg'
            }
          />
          <Divider />
        </>
      ))}
    </>
  );
};

export default ReviewContainer;
