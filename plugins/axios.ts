import _axios, { AxiosResponse } from 'axios';

const axios = _axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com',
});

axios.interceptors.response.use(
  (value: AxiosResponse) => {
    return value.data;
  },
);

export default axios;
