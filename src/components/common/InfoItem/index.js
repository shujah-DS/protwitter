import React from 'react';
import { Row, Col } from 'antd';
import './index.less';

const InfoItem = ({
  name,
  value,
  className,
  nameClass = 'align-right',
  valueClass = 'align-left',
  nameColumns = 12,
  nameColumnOffset = 0,
  valueColumnOffset = 0,
  valueRightOffset = 0,
  style = {},
  gutter = 50
}) => {
  if (Array.isArray(value)) {
    value = value.map((v, i) => <p key={i}>{v}</p>);
  }
  return (
    <Row type="flex" className={`field-info ${className}`} style={style}>
      <Col
        xs={24}
        sm={{ span: nameColumns - nameColumnOffset, offset: nameColumnOffset }}
        order={1}
        className={`field-name ${nameClass}`}
        style={{ paddingRight: gutter / 2 }}
      >
        {name}
      </Col>
      <Col
        xs={24}
        sm={{
          span: 24 - nameColumns - valueColumnOffset - valueRightOffset,
          offset: valueColumnOffset
        }}
        order={2}
        className={`${valueClass} field-value`}
        style={{ paddingleft: gutter / 2 }}
      >
        {value}
      </Col>
    </Row>
  );
};

export default InfoItem;
