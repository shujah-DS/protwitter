import axios from 'axios';
import _ from 'lodash';
// import MockAdapter from 'axios-mock-adapter';

import { requestInterceptor, responseInterceptor } from './interceptors';
// import { REGIONS } from '../constants/data';

const request = axios.create({
  // baseURL: 'https://w76xbn2h18.execute-api.us-east-1.amazonaws.com/v1',
  // baseURL: 'https://twitter.com/hashtag',
  baseURL: 'http://localhost:3002',
  timeout: 60000
});

// This sets the mock adapter on the default instance
// const mock = new MockAdapter(request, { delayResponse: 300 });
// const { internet, date } = faker; // eslint-disable-line

// mock.onGet('/regions').reply(200, {
//   regions: REGIONS.map((item, i) => ({
//     ...item,
//     id: i + 1,
//     is_enabled: _.sample([true, false]),
//     created_at: date.past()
//   }))
// });
// mock.onPost(/\/region(\/\d+)?/).reply(200, {
//   message: 'Region added successfully'
// });
// mock.onDelete(/\/regions\/\d+/).reply(200, {
//   message: 'Region deleted successfully'
// });

request.interceptors.request.use(requestInterceptor);
request.interceptors.response.use(null, responseInterceptor);

export default {
  getRegions: async () => {
    // return new Promise((resolve, reject) => {
    //   request
    //     .get('/regions', '')
    //     .then(res => {
    //       resolve(res);
    //     })
    //     .catch(err => {
    //       reject(err);
    //     });
    // });
    try {
      const response = await request.get('/regions', '');
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  },
  getTweets: async (name) =>{
    try {
      const response = await request.get(`/?name=${name}`, '');
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
//     var URL = "https://twitter.com/hashtag/photography?src=hash";
//   request(URL, function (err, res, body) {
//    if(err){
//       console.log(err);
//    }
//    else{
//       let $ = cheerio.load(body);  //loading content of HTML body
//       $('li.stream-item').each(function(index){
//          var name = $(this).find('.fullname').text();
//          var tweet = $(this).find('p.tweet-text').text();
//          console.log('user : ' + name);   //name of the user
//          console.log('tweet : ' + tweet);   //tweet content
//       });
//    }
// });
  },
  addRegion: async data => {
    // return new Promise((resolve, reject) => {
    //   request
    //     .post('/regions', data)
    //     .then(res => {
    //       resolve(res.data);
    //     })
    //     .catch(err => {
    //       reject(err);
    //     });
    // });
    try {
      const response = await request.post('/regions', data);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  },
  updateRegion: async (id, data) => {
    try {
      const response = await request.post(`/regions/${id}`, data);
      console.log('asdasdasd');
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  },
  deleteRegion: async id => {
    try {
      const response = await request.delete(`/regions/${id}`);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  }
};
