import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import './index.scss';
import { App } from './App';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import { Provider } from 'react-redux';
import { history, store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
