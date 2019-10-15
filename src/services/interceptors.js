// import { Auth } from 'aws-amplify';
/**
 * Request Interceptor - It is being used to add Authorization token
 */
export const requestInterceptor = config => config;
// Auth.currentSession().then(res => {
//   // config.headers.common.Authorization = res.idToken;
//   return config;
// });

export const responseInterceptor = error => Promise.reject(error);
