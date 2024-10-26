import 'slick-carousel/slick/slick.css';

import Slider, { Settings } from '@ant-design/react-slick';
import RestrictBlock from '@components/ui/RestrictBlock';
import { announcementList } from '@data/announcementsList';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { IAnnouncementItem } from '@/types/announcement';

import cn from './style.module.sass';

const settings: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
};

const Announcements = () => (
    <RestrictBlock fullRight paddingTop paddingBottom>
        {/* eslint-disable-next-line no-magic-numbers */}
        <Parallax y={[0, 0]} tagOuter="figure">
            <div className={cn.announcements}>
                <div className={cn.info}>
                    <h2>Митапы</h2>
                </div>
                <div className={cn.content}>
                    <Slider {...settings}>
                        {announcementList.map((item: IAnnouncementItem, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <div className={cn.item} key={index}>
                                <div className={cn.innerTop}>
                                    <img
                                        className={cn.image}
                                        src={item.image}
                                        alt={item.title}
                                        // layout="responsive"
                                        width={464}
                                        height={260}
                                    />
                                    <div
                                        className={cn.title}
                                        dangerouslySetInnerHTML={{ __html: item.title }}
                                    />
                                    <div
                                        className={cn.desc}
                                        dangerouslySetInnerHTML={{ __html: item.desc }}
                                    />
                                </div>
                                <div className={cn.innerBottom}>
                                    <div
                                        className={cn.place}
                                        dangerouslySetInnerHTML={{ __html: item.place }}
                                    />
                                    <div className={cn.date}>{item.date}</div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </Parallax>
    </RestrictBlock>
);

export default Announcements;
