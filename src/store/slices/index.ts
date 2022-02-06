import { combineReducers } from '@reduxjs/toolkit';
import { errorReducer } from './ErrorSlice';
import { authReducer } from './AuthSlice';
import { postsReducer } from './PostsSlice';

export const rootReducer = combineReducers({
  error: errorReducer,
  posts: postsReducer,
  auth: authReducer,
});
