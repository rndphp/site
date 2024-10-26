import React from 'react';

import Announcements from '@/pages/main/Announcements';
import Join from '@/pages/main/Join';
import MainScreen from '@/pages/main/MainScreen';
import Report from '@/pages/main/Report';

const MainPage = () => (
    <>
        <MainScreen />
        {/* <Announcements /> */}
        <Report />
        <Join />
    </>
);

export default MainPage;
