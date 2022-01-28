import React, { useEffect } from 'react';
import NavMenu from './NavMenu';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { accessTokenAtom } from '../../atom/tokenAtom';

const NavMenuBar = () => {
  const router = useRouter();

  return (
    <div className={'flex w-full sticky top-0 bg-white z-50'}>
      <NavMenu name={'내주변'} href={'/around'} isActive={router.pathname == '/around'} />
      <NavMenu name={'스타일북'} href={'/stylebook'} isActive={router.pathname == '/stylebook'} />
      <NavMenu name={'예약'} href={'/reservation'} isActive={router.pathname == '/reservation'} />
      <NavMenu name={'마이'} href={'/my'} isActive={router.pathname == '/my'} />
    </div>
  );
};

export default NavMenuBar;
