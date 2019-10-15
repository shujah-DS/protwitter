import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import AuthorizedLayout from '../layouts/Authorized';

const CustomRoute = ({
  component: Component,
  isPrivate,
  redirectUrl,
  isLoggedIn,
  permissions,
  path,
  layout: CustomLayout,
  ...rest
}) => {
  if (isPrivate) {
    return (
      <Route
        {...rest}
        render={props =>
          (isLoggedIn ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect to={redirectUrl || '/login'} />
          ))
        }
      />
    );
  }
  if (
    rest.location
    && _.includes(rest.location.pathname, 'login')
    && isLoggedIn
  ) {
    return <Redirect to="/" />;
  }

  const Layout = CustomLayout || AuthorizedLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout {...rest}>
          <Component {...props} {...rest} />
        </Layout>
      )}
    />
  );
};
const ProtectedRoute = connect(state => ({
  isLoggedIn: state.auth.isLoggedIn,
  device: { ...state.common.device }
}))(CustomRoute);

export default ProtectedRoute;
