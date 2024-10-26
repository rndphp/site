import MainpageLayout from '@components/layout/MainpageLayout';
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import LayoutHead from '@/components/layout/LayoutHead';
import MainPage from '@/pages/main';

const IndexPage = () => (
    <MainpageLayout>
        <LayoutHead title="Главная страница" desc="Описание главной страницы" />
        <ParallaxProvider>
            <MainPage />
        </ParallaxProvider>
    </MainpageLayout>
);

export default IndexPage;
