import React from 'react';
import Link from 'next/link';

import cn from './style.module.sass';

const FooterLogo = () => (
    <Link href="/">
        <a className={cn.link}>
            {/* <Image */}
            {/*   src="/img/logoInverse.svg" */}
            {/*   alt="Логотип PHP RND" */}
            {/*   layout="fixed" */}
            {/*   width={138} */}
            {/*   height={50} */}
            {/* /> */}

            <div
                style={{
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    position: 'relative',
                    width: 138,
                    height: 50,
                }}
            >
                <img
                    alt="Логотип PHP RND"
                    src="/img/logoInverse.svg"
                    decoding="async"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: 'border-box',
                        padding: 0,
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: 0,
                        height: 0,
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                    }}
                />
            </div>
        </a>
    </Link>
);

export default FooterLogo;
