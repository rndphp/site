import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import cn from './style.module.sass';

const FooterLogo = () => (
    <Link href="/">
        <a className={cn.link}>
            <Image
                src="/img/logoInverse.svg"
                alt="Логотип PHP RND"
                layout="fixed"
                width={138}
                height={50}
            />
        </a>
    </Link>
);

export default FooterLogo;
