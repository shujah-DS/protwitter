export const ENV = 'dev';
export const authConfig = {
  AWS_REGION: 'us-east-1',
  AWS_COGNITO_IDENTITY_POOL_ID:"",
  AWS_COGNITO_USER_POOL_ID: 'us-east-',
  AWS_COGNITO_CLIENT_ID: '',
  AWS_COGNITO_CLIENT_DOMAIN_NAME: '',
  AWS_COGNITO_IDP_NAME: 'aq-ln-adfs',
  AWS_COGNITO_IDP_SIGNIN_URL: 'http://localhost:3000/redirect', // must match cognito setting
  AWS_COGNITO_IDP_SIGNOUT_URL: 'http://localhost:3000/redirect', // must match cognito setting
  AWS_COGNITO_IDP_OAUTH_CLAIMS: ['email', 'openid'],
  AWS_COGNITO_IDP_GRANT_FLOW: 'token' // 'code' or 'token'
};
