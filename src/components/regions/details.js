import React from 'react';
import {
  Row,
  Col,
  Divider,
} from 'antd';
import _ from 'lodash';
import { TwitterTimelineEmbed, } from 'react-twitter-embed';

import ListView from '../common/ListView';

class Users extends React.Component {

  componentDidMount = () => {
    };

  render() {
    const {
    screenName
    } = this.props;
    return (
      <Row
        type="flex"
        justify="center"
        className="page list-view vpc-list-view"
      >
        <Col xs={24} xl={18}>
          <Row type="flex" justify="space-between" className="page-header">
            <h2 className="heading">{res[2]}</h2>
          </Row>
          <Divider />
        </Col>
        <Col xs={24} xl={18}>
            <div className="centerContent">
                <div className="selfCenter standardWidth">
                    <TwitterTimelineEmbed
                      sourceType="profile"
                      screenName={screenName}
                      options={{height: 400}}
                      onComplete={action}
                    />
                </div>
            </div>
        </Col>
      </Row>
    );
  }
}


export default ListView(Users);
