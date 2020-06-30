import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';

import Routes from './routes';

import AppProvider from './hooks';

const src: React.FC = () => (
  <>
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>

    <GlobalStyles />
  </>
);

export default src;
