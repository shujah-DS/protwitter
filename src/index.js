import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { message } from 'antd';
// import Amplify from 'aws-amplify';
// import AWS from 'aws-sdk';

import App from './components/App';
import configureStore from './store';
import { actions } from './modules/common/actions';
// import { authConfig as config } from './config';
import './styles/index.less';

export const store = configureStore();
// AWS.config.region = config.AWS_REGION;
// Amplify.configure({
//   Auth: {
//     identityPoolId: config.AWS_COGNITO_IDENTITY_POOL_ID,
//     region: config.AWS_REGION,
//     userPoolId: config.AWS_COGNITO_USER_POOL_ID,
//     userPoolWebClientId: config.AWS_COGNITO_CLIENT_ID,
//     oauth: {
//       domain: config.AWS_COGNITO_CLIENT_DOMAIN_NAME,
//       scope: config.AWS_COGNITO_IDP_OAUTH_CLAIMS,
//       redirectSignIn: config.AWS_COGNITO_IDP_SIGNIN_URL,
//       redirectSignOut: config.AWS_COGNITO_IDP_SIGNOUT_URL,
//       responseType: config.AWS_COGNITO_IDP_GRANT_FLOW
//     }
//   }
// });

class Index extends React.Component {
  componentWillMount() {
    this.handleWindowSizeChange();
    window.addEventListener('resize', this.handleWindowSizeChange);
    message.config({
      top: 200,
      duration: 2
    });
  }

  handleWindowSizeChange = () => {
    store.dispatch(actions.resize(window.innerWidth));
  };

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={store.history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
