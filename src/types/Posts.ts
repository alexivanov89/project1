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
