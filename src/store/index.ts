import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';

export const store = createStore(
  rootReducer,
  composeWithDevTools({
    trace: true,
    traceLimit: 25,
  })(applyMiddleware(thunk)),
);

export const history = createBrowserHistory();