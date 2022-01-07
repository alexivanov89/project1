import { placeholderService } from '../../services/placeholderService';
import { PostsActionTypes, PostsState } from '../../types/PostsActionTypes';
import {
  FetchPostsAction,
  FetchPostsErrorAction,
  FetchPostsSuccessAction,
} from '../action/creator/posts';
import { ItemReducer } from './itemReducer';

const initialState: PostsState = {
  posts: null,
  loading: false,
  error: null,
};

export const postsReducer: ItemReducer<PostsState> = (state = initialState, action) => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return { ...state, loading: true };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const fetchPostsAsync = () => (dispatch: any) => {
  dispatch(FetchPostsAction());
  placeholderService
    .getPosts()
    .then((response) => dispatch(FetchPostsSuccessAction(response.data)))
    .catch((error) => dispatch(FetchPostsErrorAction(error.message)));
};
