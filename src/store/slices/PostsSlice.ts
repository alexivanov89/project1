import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { placeholderService } from '../../services/placeholderService';
import { Post, PostsState } from '../../types/Posts';

const initialState: PostsState = {
  posts: null,
  loading: false,
  error: null,
};

const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPosts: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
      state.loading = true;
      state.error = null;
    },
    fetchPostsError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchPostsAsync = () => (dispatch: any) => {
  dispatch(fetchPosts());
  placeholderService
    .getPosts()
    .then((response) => dispatch(fetchPostsSuccess(response.data)))
    .catch((error) => dispatch(fetchPostsError(error.message)));
};

export const { fetchPosts, fetchPostsSuccess, fetchPostsError } = PostsSlice.actions;

export const postsReducer = PostsSlice.reducer;
