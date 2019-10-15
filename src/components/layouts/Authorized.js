import React from 'react';
import { Layout } from 'antd';
import { Auth } from 'aws-amplify';

import Navbar from '../common/Navbar';

const { Header, Content, Footer } = Layout;

class BasicLayout extends React.Component {
  // logout = () => {
  //   Auth.signOut().then(() => this.props.logout());
  // };

  render() {
    const { props } = this;
    if (props.hide) return null;
    return (
      <Layout className="layout">
        <Header>
          <Navbar logout={props.logout} />
        </Header>
        <Content>{props.children}</Content>
        <Footer style={{ textAlign: 'center' }}>Copyright @ TwitterMeme</Footer>
      </Layout>
    );
  }
}



export default BasicLayout
