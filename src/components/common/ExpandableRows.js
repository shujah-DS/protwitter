import React from 'react';
import { Icon } from 'antd';

const ExpandableRows = record => (
  <div key={record.email}>
    <div className="expanded-row-render">
      <span className="title">Email: </span>
      <span>{record.email}</span>
    </div>
    <div className="expanded-row-render">
      <span className="title">Roles: </span>
      <span>{record.role}</span>
    </div>
    <div className="expanded-row-render">
      <span className="title">Sites: </span>
      <span>{record.sites}</span>
    </div>
    <div className="expanded-row-render">
      <span>
        <a href="">
          <Icon className="action-icon" type="edit" />
        </a>
        <a href="">
          <Icon className="action-icon" type="delete" />
        </a>
      </span>
    </div>
  </div>
);
export default ExpandableRows;
