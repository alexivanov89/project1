import axios from 'axios';
import { store } from '../store';
import { setError } from '../store/slices/ErrorSlice';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // URL_PREFIX
  responseType: 'json',
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status >= 200 && error.response.status < 300)
      store.dispatch(setError(error.message));
    else {
      return Promise.reject(error);
    }
  },
);

export const apiClient = () => {
  return axiosInstance;
};
