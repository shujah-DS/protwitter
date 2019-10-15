import axios from 'axios';
import _ from 'lodash';
import MockAdapter from 'axios-mock-adapter';

import { requestInterceptor, responseInterceptor } from './interceptors';
import { EC2TYPES } from '../constants/ec2TypesList';

const request = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 60000
});

// This sets the mock adapter on the default instance
const mock = new MockAdapter(request, { delayResponse: 300 });
const { internet, date } = faker; // eslint-disable-line
mock.onGet('/ec2Types').reply(200, {
  ec2Types: EC2TYPES.map((item, i) => ({
    ...item,
    id: i + 1,
    is_enabled: _.sample([true, false]),
    created_at: date.past()
  }))
});
mock.onPost(/\/ec2Type(\/\d+)?/).reply(200, {
  message: 'EC2 Type added successfully'
});
mock.onDelete(/\/ec2Types\/\d+/).reply(200, {
  message: 'EC2 Type deleted successfully'
});

request.interceptors.request.use(requestInterceptor);
request.interceptors.response.use(null, responseInterceptor);

export default {
  getEc2Types: async params => {
    try {
      const response = await request.get('/ec2Types', params);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  },
  addEc2Types: async data => {
    try {
      const response = await request.post('/ec2Types', data);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  },
  updateEc2Types: async (id, data) => {
    try {
      const response = await request.post(`/ec2Types/${id}`, data);
      console.log('asdasdasd');
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  },
  deleteEc2Types: async id => {
    try {
      const response = await request.delete(`/ec2Types/${id}`);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  }
};
