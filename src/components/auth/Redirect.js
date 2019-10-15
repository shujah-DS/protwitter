import React, { Component } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { Card } from 'antd';
import _ from 'lodash';
import { connectComponent } from '../../modules/utils';
import { actions } from '../../modules/auth/actions';

class Redirect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accessToken: '',
      idToken: '',
      refreshToken: '',
      signedIn: false,
      errorMessage: ''
    };
    this.interval = null;

    this.validateUserSession.bind(this);

    Hub.listen('auth', this, 'MyListener');
  }

  componentDidMount() {
    // we have previously logged in and we are being redirected again.
    // onHubCapsule() won't fire in this case. So lets invoke validateSession()

    // Firefox/Safari bug -- wait for 2+ seconds before calling validate
    this.interval = setInterval(() => {
      clearInterval(this.interval);
      if (
        _.isUndefined(this.props.authenticated)
        || this.props.authenticated === false
      ) {
        this.validateUserSession();
      }
    }, 2000);
  }

  componentWillUnmount() {
    if (!_.isUndefined(this.interval) && !_.isNull(this.interval)) {
      clearInterval(this.interval);
    }
  }

  onHubCapsule(capsule) {
    console.log('onHubCapsule(): ', capsule);
    const { channel, payload } = capsule;

    if (channel === 'auth') {
      switch (payload.event) {
        case 'signIn':
          console.log('Redirect.onHubCapsule() user signed in');
          this.validateUserSession();
          break;
        case 'signUp':
          console.log('Redirect.onHubCapsule() user signed up');
          break;
        case 'signOut':
          console.log('Redirect.onHubCapsule() user signed out');
          break;
        case 'signIn_failure':
          console.log('Redirect.onHubCapsule() user sign in failed');
          break;
        default:
          console.log('default');
      }
    }
  }

  validateUserSession() {
    const { history } = this.props;

    Auth.currentAuthenticatedUser()
      .then(currentAuthUser => {
        console.log(
          'Redirect.validateUserSession():Auth.currentAuthenticatedUser() currentAuthUser:',
          currentAuthUser
        );
        // grab the user session
        Auth.userSession(currentAuthUser)
          .then(session => {
            console.log(
              'Redirect.validateUserSession():Auth.userSession() session:',
              session
            );
            // finally invoke isValid() method on session to check if auth tokens are valid
            // if tokens have expired, lets call "logout"
            // otherwise, dispatch AUTH_USER success action and by-pass login screen
            if (session.isValid()) {
              // fire user is authenticated
              console.log(
                'user session is valid!',
                session.accessToken.payload.username
              );
              localStorage.userName = session.accessToken.payload.username;
              localStorage.isLoggedIn = true;

              this.setState({
                signedIn: true,
                errorMessage: '',
                accessToken: session.accessToken.jwtToken,
                idToken: session.idToken.jwtToken,
                refreshToken: session.refreshToken.token
              });

              localStorage.jwtToken = session.idToken.jwtToken;
              window.location.href = '/';
              history.push('/', { signedIn: true, authenticated: true });
            } else {
              // fire user is unauthenticated
              const errorMessage = 'user session invalid. auth required';

              this.setState({
                signedIn: false,
                errorMessage,
                accessToken: '',
                idToken: '',
                refreshToken: ''
              });

              console.log(errorMessage);
              history.push('/signin', {
                signInFailure: true,
                errorMessage,
                authenticated: false
              });
            }
          })
          .catch(err => {
            const errorMessage = JSON.stringify(err);

            this.setState({
              signedIn: false,
              errorMessage,
              accessToken: '',
              idToken: '',
              refreshToken: ''
            });

            console.error(
              'Redirect.validateUserSession():Auth.userSession() err:',
              err
            );
            history.push('/signin', {
              signInFailure: true,
              errorMessage,
              authenticated: false
            });
          });
      })
      .catch(err => {
        const errorMessage = JSON.stringify(err);

        this.setState({
          signedIn: false,
          errorMessage,
          accessToken: '',
          idToken: '',
          refreshToken: ''
        });

        console.error(
          'Redirect.validateUserSession():Auth.currentAuthenticatedUser() err:',
          err
        );
        history.push('/signin', {
          signInFailure: true,
          errorMessage,
          authenticated: false
        });
      });
  }

  /* eslint-disable react/jsx-handler-names */
  render() {
    const { signedIn, errorMessage } = this.state;

    console.log('Redirect.render() state: ', this.state);
    console.log('Redirect.render() props: ', this.props);

    return (
      <Card>
        {signedIn && !errorMessage && <span>Login successful...</span>}

        {!signedIn && !errorMessage && <span>Please wait...</span>}

        {errorMessage && (
          <span>
            Login error:
            {errorMessage}
          </span>
        )}
      </Card>
    );
  }
  /* eslint-enable react/jsx-handler-names */
}

export default connectComponent(
  null,
  {
    login: actions.login.success
  },
  Redirect
);
