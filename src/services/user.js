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

mock.onGet('/users').reply(200, {
  users: _.range(15).map(i => ({
    id: i + 1,
    name: internet.userName(),
    alias: name.findName(),
    email: _.toLower(internet.email()),
    role: _.sample(['Analyst', 'Manager']),
    is_enabled: _.sample([true, false]),
    created_at: date.past()
  }))
});
mock.onPost(/\/users(\/\d+)?/).reply(200, {
  message: 'User added successfully'
});
mock.onDelete(/\/users\/\d+/).reply(200, {
  message: 'User deleted successfully'
});

request.interceptors.request.use(requestInterceptor);
request.interceptors.response.use(null, responseInterceptor);

export default {
  getUsers: async params => {
    try {
      const response = await request.get('/users', params);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  },
  addUser: async data => {
    try {
      const response = await request.post('/users', data);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  },
  updateUser: async (id, data) => {
    try {
      const response = await request.post(`/users/${id}`, data);
      console.log('asdasdasd');
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  },
  deleteUser: async id => {
    try {
      const response = await request.delete(`/users/${id}`);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  }
};
