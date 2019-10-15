import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Card, Button, Row, Col, Form, Divider } from 'antd';

import { actions } from '../../modules/auth/actions';
import { LOGIN } from '../../modules/auth/constants';
import { authConfig as config } from '../../config';
import { COMPANY_NAME, LOGIN_BUTTON } from '../../constants';
import { connectComponent } from '../../modules/utils';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.signIn.bind(this);
  }

  signIn = () => {
    const authConfig = Auth.configure();
    const {
      domain,
      redirectSignIn,
      // redirectSignOut,
      responseType
    } = authConfig.oauth;

    const clientId = config.AWS_COGNITO_CLIENT_ID;
    // https://lnteamb.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=234dbqf07ni3cqqk0oob033vhk&redirect_uri=http://localhost:3000
    const url = `https://${domain}/oauth2/authorize?identity_provider=${
      config.AWS_COGNITO_IDP_NAME
    }&redirect_uri=${redirectSignIn}&response_type=${responseType}&client_id=${clientId}`;

    console.log('Signin.signIn() sign url: ', url);
    window.location.assign(url);
  };

  render() {
    // const { signInFailure, errorMessage } = this.props;

    console.log('Signin.render() state: ', this.state);
    console.log('Signin.render() props: ', this.props);
    const { loading } = this.props;
    return (
      <Row type="flex" justify="center" className="sign-in-page">
        <Col xs={24} sm={8} className="adfs-sign-in">
          <Card title={COMPANY_NAME} className="sign-in-form">
            <h1 className="sign-in-heading">LN</h1>
            <Divider />
            <Button
              className="sign-in-btn"
              type="primary"
              size="large"
              loading={loading}
              disabled={loading}
              // onClick={this.signIn}
              onClick={this.props.login}
            >
              {LOGIN_BUTTON}
            </Button>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth[LOGIN].loading
});

export default connectComponent(
  mapStateToProps,
  {
    login: actions.login.request,
    getUserStatus: actions.getUserStatus.request
  },
  Form.create()(Signin)
);
