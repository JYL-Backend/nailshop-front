import React from 'react';
import {Search} from "@mui/icons-material";

const HeaderLayout1 = () => {
    return (
        <div className={'py-2 flex w-full'}>
            <div className={'flex-1'}/>
            <span>Appbutton <b>NailShop</b></span>
            <div className={'flex-1 flex'}>
                <div className={'flex-1'}/>
                <Search/>
            </div>
        </div>
    );
};

export default HeaderLayout1;
