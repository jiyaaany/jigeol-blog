import _axios, { AxiosInstance } from 'axios';

export const axios: AxiosInstance = _axios.create({
  baseURL: '//localhost:5000',
  proxy: {
    host: '//localhost',
    port: 5000
  }
});

export default axios;
