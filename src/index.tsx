import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { MainRouter } from './router';
import './index.scss';
import GlobalStyles from './styles/theme/GlobalStyles';
import { ThemeConfig } from './styles/theme/ThemeConfig/ThemeConfig';
import 'simplebar/src/simplebar.css';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <ThemeConfig>
          <GlobalStyles />
          <MainRouter />
        </ThemeConfig>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
