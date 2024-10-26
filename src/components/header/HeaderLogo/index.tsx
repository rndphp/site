import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import cn from './style.module.sass';

const HeaderLogo = () => (
    <Link href="/">
        <a className={cn.link}>
            <img
                className={cn.image}
                src="/img/logo.svg"
                alt="PHP RND"
                layout="fixed"
                width={176}
                height={64}
            />
        </a>
    </Link>
);

export default HeaderLogo;
