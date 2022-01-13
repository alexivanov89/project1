import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { errorReducer } from './errorReducer';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  posts: postsReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
