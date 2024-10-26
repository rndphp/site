import 'slick-carousel/slick/slick.css';

import { ButtonAll } from '@components/ui/button/ButtonAll';
import Application from '@components/ui/modals/Application';
import ModalWrapper from '@components/ui/modals/ModalWrapper';
import RestrictBlock from '@components/ui/RestrictBlock';
import Image from 'next/image';
import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import cn from './style.module.sass';

const Report = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModalHandler = () => {
        setIsModalOpen(false);
    };

    const openModalHandler = () => {
        setIsModalOpen(true);
    };

    return (
        <RestrictBlock fullLeft>
            {/* eslint-disable-next-line no-magic-numbers */}
            <Parallax y={[0, 0]} tagOuter="figure">
                <div className={cn.report}>
                    <div className={cn.imageWrapper}>
                        <Image
                            className={cn.image}
                            src="/img/report.svg"
                            alt="PHP RND"
                            width={957}
                            height={939}
                        />
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
                        <ModalWrapper
                            isOpen={isModalOpen}
                            handleClose={closeModalHandler}
                            handleOpen={openModalHandler}
                            title="Заявка на доклад"
                            trigger={<ButtonAll type="button" label="Подать заявку на доклад" />}
                        >
                            <Application />
                        </ModalWrapper>
                    </div>
                </div>
            </Parallax>
        </RestrictBlock>
    );
};

export default Report;
