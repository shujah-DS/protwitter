import axios from 'axios';
import _ from 'lodash';
import MockAdapter from 'axios-mock-adapter';

import { requestInterceptor, responseInterceptor } from './interceptors';

const request = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 60000
});

// This sets the mock adapter on the default instance
const mock = new MockAdapter(request, { delayResponse: 300 });
const { internet, date, name } = faker; // eslint-disable-line

mock.onGet('/resources').reply(200, {
  resources: _.range(15).map(i => ({
    id: i + 1,
    name: name.findName(),
    alias: _.sample(['Resources', 'Resource 2']),
    region: _.sample(['My Region', 'Region 2']),
    vpc: _.sample(['Virginia', 'Ohio']),
    ami: _.sample(['Windows', 'Linux']),
    ec2Type: _.sample(['Micro', 'Small']),
    is_enabled: _.sample([true, false]),
    created_at: date.past()
  }))
});
mock.onPost(/\/resources(\/\d+)?/).reply(200, {
  message: 'Resource added successfully'
});
mock.onDelete(/\/resources\/\d+/).reply(200, {
  message: 'Resource deleted successfully'
});

request.interceptors.request.use(requestInterceptor);
request.interceptors.response.use(null, responseInterceptor);

export default {
  getResources: async params => {
    try {
      const response = await request.get('/resources', params);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  },
  addResource: async data => {
    try {
      const response = await request.post('/resources', data);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  },
  updateResource: async (id, data) => {
    try {
      const response = await request.post(`/resources/${id}`, data);
      console.log('asdasdasd');
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  },
  deleteResource: async id => {
    try {
      const response = await request.delete(`/resources/${id}`);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  }
};
