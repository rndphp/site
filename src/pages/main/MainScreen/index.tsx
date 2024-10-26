import { ButtonAll } from '@components/ui/button/ButtonAll';
import Application from '@components/ui/modals/Application';
import ModalWrapper from '@components/ui/modals/ModalWrapper';
import RestrictBlock from '@components/ui/RestrictBlock';
import Image from 'next/image';
import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import cn from './style.module.sass';

const MainScreen = () => {
    return (
        <div className={cn.main}>
            <RestrictBlock>
                <div className={cn.wrapper}>
                    <div className={cn.content}>
                        <h1 className={cn.h1}>Сообщество донских PHP разработчиков</h1>

                        {/* <ButtonAll */}
                        {/*     type="link" */}
                        {/*     target="_blank" */}
                        {/*     label="Подать заявку на доклад" */}
                        {/*     href="https://docs.google.com/forms/d/1db0PUerbwK5YLjGO0n-LGT4XVsPSE5tuMRytwzVw594/viewform" */}
                        {/* /> */}
                    </div>
                    <div className={cn.imageContainer}>
                        {/* eslint-disable-next-line no-magic-numbers */}
                        <Parallax y={[0, 0]} tagOuter="figure">
                            {/* <Image */}
                            {/*     className={cn.image} */}
                            {/*     src="/img/main.svg" */}
                            {/*     alt="PHP RND" */}
                            {/*     width={1256} */}
                            {/*     height={920} */}
                            {/*     // style={{ width: '100%' }} */}
                            {/* /> */}

                            <div
                                style={{
                                    display: 'inline-block',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    boxSizing: 'border-box',
                                    margin: 0,
                                }}
                            >
                                <div
                                    style={{
                                        boxSizing: 'border-box',
                                        display: 'block',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <img
                                        alt=""
                                        aria-hidden="true"
                                        role="presentation"
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1NiIgaGVpZ2h0PSI5MjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                        style={{
                                            maxWidth: '100%',
                                            display: 'block',
                                            margin: 0,
                                            border: 'none',
                                            padding: 0,
                                        }}
                                    />
                                </div>
                                <img
                                    alt="PHP RND"
                                    src="/img/main.svg"
                                    decoding="async"
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
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
                        </Parallax>
                    </div>
                </div>
            </RestrictBlock>
        </div>
    );
};

export default MainScreen;
