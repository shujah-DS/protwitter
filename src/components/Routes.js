import React from 'react';
import { Switch } from 'react-router-dom';

// import Ec2ListView from './ec2/ListView';
import Route from './common/ProtectedRoute';
import NotFound from './common/NotFound';
// import UsersListView from './users/ListView';
// import RegionsListView from './regions/ListView';
// import VpcsListView from './vpcs/ListView';
// import AmisListView from './amis/ListView';
// import Ec2TypesListView from './ec2Types/ListView';
// import ResourcesListView from './resources/ListView';
// import UserResourcesListView from './userResources/ListView';

export default props => {
  const { hide } = props;
  if (hide) return null;

  return (
    <Switch>
      {/*<Route exact path="/" component={Ec2ListView} />
      <Route exact path="/resources" component={ResourcesListView} />
      <Route exact path="/users" component={UsersListView} />
      <Route exact path="/regions" component={RegionsListView} />
      <Route exact path="/vpcs" component={VpcsListView} />
      <Route exact path="/amis" component={AmisListView} />
      <Route exact path="/types" component={Ec2TypesListView} />
      <Route exact path="/user-resources" component={UserResourcesListView} />
  */}
      {/* <Route exact path="/manager" component={ManagerDashboard} /> */}
      <Route component={NotFound} />
    </Switch>
  );
};
