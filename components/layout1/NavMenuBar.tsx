import React, {useEffect} from 'react';
import NavMenu from "./NavMenu";
import {useRouter} from "next/router";

const NavMenuBar = () => {
    const router = useRouter();


    return (
        <div className={'flex w-full'}>
            <NavMenu name={'홈'} href={"/home"} isActive={router.pathname == '/home'}/>
            <NavMenu name={'내주변'} href={"/around"} isActive={router.pathname == '/around'}/>
            <NavMenu name={'스타일북'}  href={"/stylebook"}  isActive={router.pathname == '/stylebook'}/>
            <NavMenu name={'예약'} href={"/reservation"}  isActive={router.pathname == '/reservation'} />
            <NavMenu name={'마이'} href={"/my"}  isActive={router.pathname == '/my'} />
        </div>
    );
};

export default NavMenuBar;
