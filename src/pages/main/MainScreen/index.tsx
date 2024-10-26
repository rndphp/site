import { ButtonAll } from '@components/ui/button/ButtonAll';
import Application from '@components/ui/modals/Application';
import ModalWrapper from '@components/ui/modals/ModalWrapper';
import RestrictBlock from '@components/ui/RestrictBlock';
import Image from 'next/image';
import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import cn from './style.module.sass';

const MainScreen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModalHandler = () => {
        setIsModalOpen(false);
    };

    const openModalHandler = () => {
        setIsModalOpen(true);
    };

    return (
        <div className={cn.main}>
            <RestrictBlock>
                <div className={cn.wrapper}>
                    <div className={cn.content}>
                        <h1 className={cn.h1}>Сообщество донских PHP разработчиков</h1>

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
                    <div className={cn.imageContainer}>
                        {/* eslint-disable-next-line no-magic-numbers */}
                        <Parallax y={[0, 0]} tagOuter="figure">
                            <Image
                                className={cn.image}
                                src="/img/main.svg"
                                alt="PHP RND"
                                width={1256}
                                height={920}
                            />
                        </Parallax>
                    </div>
                </div>
            </RestrictBlock>
        </div>
    );
};

export default MainScreen;
