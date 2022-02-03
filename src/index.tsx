import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { MainRouter } from './router';
import './index.scss';
import GlobalStyles from './styles/theme/GlobalStyles';
import { ThemeConfig } from './styles/theme/ThemeConfig/ThemeConfig';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeConfig>
        <GlobalStyles />
        <MainRouter />
      </ThemeConfig>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
