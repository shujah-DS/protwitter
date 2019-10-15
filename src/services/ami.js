import axios from 'axios';
import _ from 'lodash';
import MockAdapter from 'axios-mock-adapter';

import { requestInterceptor, responseInterceptor } from './interceptors';
import { REGIONS } from '../constants/data';

const request = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 60000
});

// This sets the mock adapter on the default instance
const mock = new MockAdapter(request, { delayResponse: 300 });
const { internet, date } = faker; // eslint-disable-line
const regions = REGIONS.map(r => r.name);
mock.onGet('/amis').reply(200, {
  amis: _.range(15).map(i => ({
    id: i + 1,
    region: _.sample(regions),
    name: `ami-${internet.color().replace('#', '')}`,
    alias: _.sample([internet.userName(), undefined]),
    subnet: `${internet.ip()}/24`,
    subnet_alias: internet.userName(),
    is_enabled: _.sample([true, false]),
    created_at: date.past()
  }))
});
mock.onPost(/\/ami(\/\d+)?/).reply(200, {
  message: 'Ami added successfully'
});
mock.onDelete(/\/amis\/\d+/).reply(200, {
  message: 'Ami deleted successfully'
});

request.interceptors.request.use(requestInterceptor);
request.interceptors.response.use(null, responseInterceptor);

export default {
  getAmis: async params => {
    try {
      const response = await request.get('/amis', params);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  },
  addAmi: async data => {
    try {
      const response = await request.post('/amis', data);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  },
  updateAmi: async (id, data) => {
    try {
      const response = await request.post(`/amis/${id}`, data);
      console.log('asdasdasd');
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  },
  deleteAmi: async id => {
    try {
      const response = await request.delete(`/amis/${id}`);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  }
};
