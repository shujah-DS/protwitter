import React, { Fragment } from 'react';
import { Divider } from 'antd';

const JoinNodes = ({ divider = <Divider type="vertical" />, children }) => (
  <Fragment>
    {children.reduce((result, child, index) => {
      if (index < children.length - 1) {
        return result.concat([
          child,
          React.cloneElement(divider, { key: `divider-${index}` })
        ]);
      }
      return result.concat(child);
    }, [])}
  </Fragment>
);

export default JoinNodes;
