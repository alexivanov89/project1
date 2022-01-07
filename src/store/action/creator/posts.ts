import { Post, PostsActionTypes } from '../../../types/PostsActionTypes';

export const FetchPostsAction = () => ({
  type: PostsActionTypes.FETCH_POSTS,
});

export const FetchPostsSuccessAction = (posts: Post[]) => ({
  type: PostsActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const FetchPostsErrorAction = (errormessage: string) => ({
  type: PostsActionTypes.FETCH_POSTS_ERROR,
  payload: errormessage,
});
