import { atom } from 'recoil';
import { UserReviewInterface } from '../interface/UserReviewInterface';

export const userReviewsAtom = atom<UserReviewInterface[]>({
  key: 'userReviewsAtom',
  default: [
    {
      nickname: '리얼버라이어티',
      name: '김공공',
      registDt: '1일전',
      reservationCount: 4,
      rating: 4.5,
      imgSrc:
        'https://mud-kage.kakao.com/dn/cOY4cY/btrrqmW0iSb/m2kiL7EazLj0qrrX16fDfk/img_375x375.jpg',
      content:
        '언니들도되게되게친절하고꼼꼼해요!\n' +
        '이뻐진손을보니까오늘하루종일기분좋을예정일듯!\n' +
        '기분좋은하루를만들어주셔서감사해요♡\n' +
        '너무기분이좋아요!',
    },

    {
      nickname: '굳굳',
      name: '김공공',
      registDt: '3일전',
      reservationCount: 4,
      rating: 4.2,
      imgSrc:
        'https://mud-kage.kakao.com/dn/DQDBV/btro9Hbmp2P/1izqvjr5vEpleAIGmhmaq1/img_375x375.jpg',
      content: '시간보다 좀 늦었는데도 친절하게 해주셨어요!! 번창하세요 😍',
    },

    {
      nickname: '굳굳',
      name: '김공공',
      registDt: '3일전',
      reservationCount: 4,
      rating: 4.2,
      imgSrc:
        'https://mud-kage.kakao.com/dn/bNRQXg/btrn7qH4FFk/WKf0ho5GZOkfwaBOYIr1Lk/img_375x375.jpg',
      content:
        '젤네일은 처음이었는데, 네일 올리기전에 색상테스트도 진행해주셔서 더욱 만족스럽게 시술 받을 수 있었습니다 :-)\n' +
        '꼼꼼하게 마무리해주셔서 감사합니당\n' +
        '다음번에도 찾아뵐게용🥰',
    },

    {
      nickname: '굳굳',
      name: '김공공',
      registDt: '3일전',
      reservationCount: 4,
      rating: 4.2,
      imgSrc:
        'https://mud-kage.kakao.com/dn/zMOdC/btrnqyVVREC/HTzufSojTRDAMvvLGLKDQK/img_375x375.jpg',
      content: '관리 잘 받았습니다. 감사합니다.',
    },

    {
      nickname: '굳굳',
      name: '김공공',
      registDt: '3일전',
      reservationCount: 4,
      rating: 4.2,
      imgSrc: '',
      content:
        '자석젤 처음으로 해봤는데 너무 만족해요~ 케어도 꼼꼼하게 해주시고 무늬 모양 잡을 때도 완전 섬세하게 해주셔서 나올 때 감탄했네요☺️ 세번째 방문인데 항상 만족스러웠어서 앞으로도 자주 갈 것 같습니다~ㅎㅎ',
    },

    {
      nickname: '굳굳',
      name: '김공공',
      registDt: '3일전',
      reservationCount: 4,
      rating: 4.2,
      imgSrc: '',
      content: '',
    },

    {
      nickname: '굳굳',
      name: '김공공',
      registDt: '3일전',
      reservationCount: 4,
      rating: 4.2,
      imgSrc: '',
      content:
        '이뿌게 찍고싶었는뎅 빨리 리뷰를 쓰고싶어서 나오자마자 찍어서 올려용♥️ \n' +
        '제가 딱 원하던 스타일이라 너무 이뿌고 만족하고 갑니다\n' +
        '해주시는 언니분도 친절하시고 하나하나 테스트해주시고 신경써주셔서 감사해용 단골될것같네용🥰\n' +
        '다음엔 속눈썹펌하러 갈게용><',
    },

    {
      nickname: '굳굳',
      name: '김공공',
      registDt: '3일전',
      reservationCount: 4,
      rating: 4.2,
      imgSrc: '',
      content: '',
    },

    {
      nickname: '굳굳',
      name: '김공공',
      registDt: '3일전',
      reservationCount: 4,
      rating: 4.2,
      imgSrc: '',
      content: '',
    },

    {
      nickname: '굳굳',
      name: '김공공',
      registDt: '3일전',
      reservationCount: 4,
      rating: 4.2,
      imgSrc: '',
      content: '',
    },

    {
      nickname: '굳굳',
      name: '김공공',
      registDt: '3일전',
      reservationCount: 4,
      rating: 4.2,
      imgSrc: '',
      content: '',
    },

    {
      nickname: '굳굳',
      name: '김공공',
      registDt: '3일전',
      reservationCount: 4,
      rating: 4.2,
      imgSrc: '',
      content: '',
    },
  ],
});
