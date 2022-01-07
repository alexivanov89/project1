import { apiClient } from './apiClient';

export const placeholderService = {
  getPosts: () => apiClient().get('/posts'),
};
