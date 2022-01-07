import axios from 'axios';
import { URL_PREFIX } from './apiConstants';
import { store } from '../store';
import { SetError } from '../store/action/creator/error';

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
      store.dispatch(SetError(error.message));
    else {
      return Promise.reject(error);
    }
  },
);

export const apiClient = () => {
  return axiosInstance;
};
