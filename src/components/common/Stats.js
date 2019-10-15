import React, { Fragment } from 'react';
import { Row, Col, Divider, Spin } from 'antd';
import { connect } from 'react-redux';

import JoinNodes from './JoinNodes';

const Stats = ({
  stats = [],
  heading,
  style,
  loading = false,
  device,
  actions
}) => {
  const getSection = data => (
    <Fragment>
      <div className={`count ${data.countClass}`} style={data.countStyle}>
        {data.count}
      </div>
      <div className={`count-label ${data.labelClass}`} style={data.labelStyle}>
        {data.countLabel}
      </div>
    </Fragment>
  );

  const items = stats.map(data => getSection(data));
  return (
    <Col xs={24} className="stats-summary" style={style}>
      <Row className="stats-heading">
        <Col xs={12}>{heading}</Col>
        <Col xs={12} className="align-right filter">
          {actions}
        </Col>
      </Row>
      <Row className="stats">
        <Spin size="large" spinning={loading} />
        <JoinNodes
          divider={(
            <Divider
              type={device.screen === 'xs' ? 'horizontal' : 'vertical'}
            />
)}
        >
          {items.map((item, index) => (
            <div className="stat-box" key={`action-${index}`}>
              {item}
            </div>
          ))}
        </JoinNodes>
      </Row>
    </Col>
  );
};

const mapStateToProps = state => ({ device: state.common.device });

export default connect(mapStateToProps)(Stats);
