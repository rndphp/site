import Footer from '@components/footer/Footer';
import MainpageHeader from '@components/header/HeaderNavigation';
import React, { FC, ReactNode, ReactNodeArray } from 'react';

import cn from './style.module.sass';

export interface IMainpageLayout {
    children: string | ReactNode | ReactNodeArray;
}

const MainpageLayout: FC<IMainpageLayout> = ({ children }) => (
    <div className={cn.wrapper} id="wrapper">
        <MainpageHeader />
        <div className={cn.middle}>{children}</div>
        <Footer />
    </div>
);
export default MainpageLayout;
