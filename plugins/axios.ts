import _axios from 'axios';

const axios = _axios.create({
    baseURL: '//localhost:5000',
    proxy: {
        host: '//localhost',
        port: 5000
    }
});

export default axios;