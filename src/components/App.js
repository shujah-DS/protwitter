import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import BasicLayout from './layouts/Basic';
import Routes from './Routes';
// import AdfsSignIn from './auth/AdfsSiginIn';
import RegionsListView from './regions/ListView';
import SubCategory from './regions/SubCategory'
import Users from './regions/Users';
import TweetsList from './regions/TweetsList.js';

// import RedirectSignIn from './auth/Redirect';
// import { actions } from '../modules/common/actions';
// import { connectComponent } from '../modules/utils';

class App extends React.Component {
  componentDidMount = () => {
    window.addEventListener('resize', this.resize);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.resize);
  };

  resize = () => {
    this.props.resize();
  };

  render() {
    const { props } = this;
    return (
      <div>
        <Routes hide={true} />
        <BasicLayout hide={false}>
          <Switch>
            <Route exact path="/" component={RegionsListView} />
            <Route exact path="/:id" component={SubCategory} />
            <Route exact path="/category/:id" component={Users} />
            <Route exact path="/category/:id/:id" component={TweetsList} />

            <Redirect to="/" />
          </Switch>
        </BasicLayout>
      </div>
    );
  }
}

export default App;
