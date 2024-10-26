import React from 'react';

import { StoreProvider } from '@/hooks/useStore';
import '@/assets/styles/index.sass';

const App = ({ Component, pageProps }) => (
    <StoreProvider {...pageProps}>
        <Component {...pageProps} />
    </StoreProvider>
);

export default App;
