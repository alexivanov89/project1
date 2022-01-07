import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
