import React from 'react';
import { Row } from 'antd';

class Home extends React.Component {
  static defaultProps = {
    className: 'table-enter-leave-demo'
  };

  render() {
    return (
      <Row type="flex" justify="center">
        <h1>Home</h1>
      </Row>
    );
  }
}
export default Home;
