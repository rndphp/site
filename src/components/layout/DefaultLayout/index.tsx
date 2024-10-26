import React from 'react';

import LayoutHead from '@components/layout/LayoutHead';
import DefaultHeader from '@components/header/DefaultHeader';

const DefaultLayout = () => (
    <>
        <LayoutHead title="static" />
        <DefaultHeader />
    </>
);
export default DefaultLayout;
