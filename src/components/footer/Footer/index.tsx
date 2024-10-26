import React from 'react';

import RestrictBlock from '@components/ui/RestrictBlock';
import FooterLogo from '@components/footer/FooterLogo';
import FooterSocial from '@components/footer/FooterSocial';
import cn from './style.module.sass';

const Footer = () => (
    <footer className={cn.footer}>
        <RestrictBlock>
            <div className={cn.wrapper}>
                <div className={cn.logo}>
                    <FooterLogo />
                </div>
                <div className={cn.menu}>
                    <FooterSocial />
                </div>
            </div>
        </RestrictBlock>
    </footer>
);

export default Footer;
