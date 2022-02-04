import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MainRouter } from './router';
import './index.scss';
import GlobalStyles from './styles/theme/GlobalStyles';
import { ThemeConfig } from './styles/theme/ThemeConfig/ThemeConfig';
import 'simplebar/src/simplebar.css';
import { HelmetProvider } from 'react-helmet-async';
import { store } from './store';
import { ErrorBoundary } from 'react-error-boundary';
import { Typography } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary
        fallback={
          <Typography variant="h3" component="h2" color="black" align="center">
            Ошибка стора
          </Typography>
        }
      >
        <Provider store={store}>
          <ThemeConfig>
            <GlobalStyles />
            <MainRouter />
          </ThemeConfig>
        </Provider>
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
