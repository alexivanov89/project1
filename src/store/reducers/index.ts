import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
