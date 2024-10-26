import 'slick-carousel/slick/slick.css';

import { ButtonAll } from '@components/ui/button/ButtonAll';
import RestrictBlock from '@components/ui/RestrictBlock';
import Image from 'next/image';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import cn from './style.module.sass';

const Report = () => {
    return (
        <RestrictBlock fullLeft>
            {/* eslint-disable-next-line no-magic-numbers */}
            <Parallax y={[0, 0]} tagOuter="figure">
                <div className={cn.report}>
                    <div className={cn.imageWrapper}>
                        {/* <Image */}
                        {/*     className={cn.image} */}
                        {/*     src="/img/report.svg" */}
                        {/*     alt="PHP RND" */}
                        {/*     width={957} */}
                        {/*     height={939} */}
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
                                    style={{
                                        maxWidth: '100%',
                                        display: 'block',
                                        margin: 0,
                                        border: 'none',
                                        padding: 0,
                                    }}
                                    alt=""
                                    aria-hidden="true"
                                    role="presentation"
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTU3IiBoZWlnaHQ9IjkzOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                                />
                            </div>
                            <img
                                alt="PHP RND"
                                src="/img/report.svg"
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
                    </div>
                    <div className={cn.content}>
                        <h2>
                            Хочу
                            <br />
                            <span> доклад</span>
                        </h2>
                        <div className={cn.desc}>
                            Если у&nbsp;вас есть идеи или готовый доклад, или нет темы,
                            но&nbsp;вы&nbsp;очень хотите выступить на&nbsp;наших мероприятиях,
                            оставьте заявку и&nbsp;мы&nbsp;обязательно придумаем что-нибудь
                            <span> вместе</span>
                        </div>

                        <ButtonAll
                            type="link"
                            target="_blank"
                            label="Подать заявку на доклад"
                            href="https://docs.google.com/forms/d/1db0PUerbwK5YLjGO0n-LGT4XVsPSE5tuMRytwzVw594/viewform"
                        />
                    </div>
                </div>
            </Parallax>
        </RestrictBlock>
    );
};

export default Report;
