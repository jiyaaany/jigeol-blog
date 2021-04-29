import _axios, { AxiosResponse } from 'axios';

const axios = _axios.create({
  baseURL: 'http://localhost:5000',

});

axios.interceptors.response.use(
  (value: AxiosResponse) => {
    return value.data;
  },
);

export default axios;
