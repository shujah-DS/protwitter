import React from 'react';
import { Row, Col } from 'antd';
import './index.less';

const ModalActions = props => (
  <Row
    type="flex"
    gutter={10}
    justify="space-between"
    className="modal-actions"
  >
    {[...props.children].map((child, index, children) => {
      const {
        xsSpan = 24,
        smSpan = props.span || 8,
        xsOffset = 0,
        smOffset = 0,
        smOrder = index,
        xsOrder = children.length - index
      } = props.grid || {};
      return (
        <Col
          className="modal-action"
          key={`action-col-${index}`}
          xs={{ span: xsSpan, order: xsOrder, offset: xsOffset }}
          sm={{ span: smSpan, order: smOrder, offset: smOffset }}
        >
          {child}
        </Col>
      );
    })}
  </Row>
);

export default ModalActions;
