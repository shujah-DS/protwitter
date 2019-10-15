import React from 'react';
import { Layout, Row, Col } from 'antd';


const { Header, Content, Footer } = Layout;

const BasicLayout = props => {
  if (props.hide) return null;
  return (
    <Layout className="layout">
      <Header>
        <Row>
          <Col md={8}>
            <span className="logo"><a href="/">Twitter Meme</a></span>
          </Col>
        </Row>
      </Header>
      <Content>{props.children}</Content>
      <Footer style={{ textAlign: 'center' }}>Copyright @ Twitter Meme</Footer>
    </Layout>
  );
};



export default BasicLayout