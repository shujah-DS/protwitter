import axios from 'axios';

import { requestInterceptor, responseInterceptor } from './interceptors';

const request = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 60000
});

// This sets the mock adapter on the default instance

request.interceptors.request.use(requestInterceptor);
request.interceptors.response.use(null, responseInterceptor);

export default {
  getUserStatus: async token => {
    try {
      // const response = await request.get(`/zones?region=${region}`);
      const inputParam = { token };
      const response = await request.post('/auth/userStatus', inputParam);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  }
};
