import HeaderLogo from '@components/header/HeaderLogo';
import HeaderMenu from '@components/header/HeaderMenu';
// import useCheckDevice from '@hooks/useCheckDevice';
import RestrictBlock from '@components/ui/RestrictBlock';
import React from 'react';

import cn from './style.module.sass';

const HeaderNavigation = () => (
    // const isDesktop: boolean = useCheckDevice('desktop');

    <header className={cn.header}>
        <RestrictBlock>
            <div className={cn.wrapper}>
                <div className={cn.logo}>
                    <HeaderLogo />
                </div>
                <div className={cn.menu}>
                    <HeaderMenu />
                </div>
            </div>
        </RestrictBlock>
    </header>
);
export default HeaderNavigation;
