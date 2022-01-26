import React from 'react';
import { LocationOn } from '@mui/icons-material';
import PlainButton from '../../common/button/PlainButton';
import KakaoMap from '../../common/map/KakaoMap';
import { useRecoilState } from 'recoil';
import { aroundShopListAtom } from '../../../atom/aroundShopListAtom';
import ShopRow from './ShopRow';
import { Divider } from '@mui/material';

const AroundMain = () => {
  const [aroundShopList, setAroundShopList] = useRecoilState(aroundShopListAtom);
  return (
    <div className={'  w-full'}>
      <div className={'flex justify-between py-3'}>
        <div className={'items-center flex '}>
          <span className={'font-bold text-lg'}>연제구 연산동</span>
          <LocationOn />
        </div>
        <PlainButton text={'지역변경'} />
      </div>

      <div className={'flex flex-col w-full h-[200px] xl:h-[300px]'}>
        <KakaoMap />
      </div>

      <div className={'w-full flex flex-col py-10 gap-y-5'}>
        {aroundShopList.map((shop) => (
          <>
            <ShopRow shop={shop} />
            <Divider />
          </>
        ))}
      </div>
    </div>
  );
};

export default AroundMain;
