import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import { Provider } from 'react-redux';
import { store } from './store';
import { MainRouter } from './router';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <MainRouter />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
