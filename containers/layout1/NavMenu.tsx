import React from 'react';
import { useRouter } from 'next/router';

interface Props {
  name: string;
  href: string;
  isActive: boolean;
}

const NavMenu = ({ name, href, isActive }: Props) => {
  const router = useRouter();

  const handleOnClick = (link: string) => {
    router.push(link);
  };

  const cn =
    'flex-1 border-b-2 border-gray-200 py-3 cursor-pointer' +
    (isActive ? ' border-b-4  border-black font-bold ' : '');
  return (
    <div className={cn} onClick={() => handleOnClick(href)}>
      {name}
    </div>
  );
};

export default NavMenu;
