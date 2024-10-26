import 'slick-carousel/slick/slick.css';

import RestrictBlock from '@components/ui/RestrictBlock';
import clsx from 'clsx';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import cn from './style.module.sass';

const Join = () => (
    <RestrictBlock paddingBottom>
        {/* eslint-disable-next-line no-magic-numbers */}
        <Parallax y={[0, 0]} tagOuter="figure">
            <div className={cn.join}>
                <div className={cn.imageWrapper}>
                    {/* <Image */}
                    {/*     className={cn.image} */}
                    {/*     src="/img/join.png" */}
                    {/*     alt="PHP RND" */}
                    {/*     width={733} */}
                    {/*     height={597} */}
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
                            style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}
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
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzMzIiBoZWlnaHQ9IjU5NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                            />
                        </div>
                        <img
                            alt="PHP RND"
                            src="/img/join.png"
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
                <div className={clsx(cn.title, cn.content)}>
                    <h2>
                        Присоединяйтесь
                        <br />
                        к&nbsp;нам в&nbsp;telegram
                    </h2>
                </div>
                <div className={clsx(cn.desc, cn.content)}>
                    Мульча наблюдаема. Глей регионально возникает вязкий континентально-европейский
                    тип политической культуры.
                    <br />
                    <br />
                    <span>Нас уже ~500 человек</span>
                </div>
            </div>
        </Parallax>
    </RestrictBlock>
);

export default Join;
