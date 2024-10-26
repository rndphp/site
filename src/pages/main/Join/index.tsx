import 'slick-carousel/slick/slick.css';

import RestrictBlock from '@components/ui/RestrictBlock';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import cn from './style.module.sass';

const Join = () => (
    <RestrictBlock paddingBottom>
        {/* eslint-disable-next-line no-magic-numbers */}
        <Parallax y={[0, 0]} tagOuter="figure">
            <div className={cn.join}>
                <div className={cn.imageWrapper}>
                    <Image
                        className={cn.image}
                        src="/img/join.png"
                        alt="PHP RND"
                        width={733}
                        height={597}
                    />
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
                    <span>Нас уже 355 человек</span>
                </div>
            </div>
        </Parallax>
    </RestrictBlock>
);

export default Join;
