export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  posts: Post[] | null;
  loading: boolean;
  error: null | string;
}

export const PostsActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS' as const,
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS' as const,
  FETCH_POSTS_ERROR: 'FETCH_POSTS_ERROR' as const,
};
