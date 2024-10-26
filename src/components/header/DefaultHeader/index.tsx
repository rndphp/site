import React from 'react';

// import useCheckDevice from '@hooks/useCheckDevice';
import RestrictBlock from '@components/ui/RestrictBlock';
import HeaderLogo from '@components/header/HeaderLogo';
import HeaderMenu from '@components/header/HeaderMenu';
import cn from './style.module.sass';

const DefaultHeader = () => (
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
export default DefaultHeader;
