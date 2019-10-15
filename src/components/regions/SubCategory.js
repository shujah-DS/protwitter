import React from 'react';
import {
  Row,
  Col,
  Table,
  Divider,
} from 'antd';
import { NavLink as Link } from 'react-router-dom';
import _ from 'lodash';

import ListView from '../common/ListView';
import {basicMain} from '../../Data/Basic.js';
import {cultureMain} from '../../Data/Culture.js';
import {relatableMain} from '../../Data/Relateable.js';
import {feelingsMain} from '../../Data/Feelings.js';
import {funnyMain} from '../../Data/Funny.js';

class SubCategory extends React.Component {

  componentDidMount = () => {
    const title = this.props.location.pathname.replace(/[^a-zA-Z0-9]/g, '');
    console.log(title,'location');
  };



  render() {
    const {
      loading,
      searchLoading,
      pagination,
      onPaginationChange
    } = this.props;
    // const data = vpcs.vpcs.filter(vpc => _.includes(vpc.name, search));
    // const { title, vpc } = this.state;
    let data = [];
    if(this.props.location.pathname.replace(/[^a-zA-Z0-9]/g, '') === 'Basic'){
      basicMain.forEach(function (item, index) {
        data.push(item)
      });
    } else if(this.props.location.pathname.replace(/[^a-zA-Z0-9]/g, '') === 'Culture'){
      cultureMain.forEach(function (item, index) {
        data.push(item)
      });
    } else if(this.props.location.pathname.replace(/[^a-zA-Z0-9]/g, '') === 'Relatable'){
      relatableMain.forEach(function (item, index) {
        data.push(item)
      });
    } else if(this.props.location.pathname.replace(/[^a-zA-Z0-9]/g, '') === 'Feelings'){
      feelingsMain.forEach(function (item, index) {
        data.push(item)
      });
    } else if(this.props.location.pathname.replace(/[^a-zA-Z0-9]/g, '') === 'Funny'){
      funnyMain.forEach(function (item, index) {
        data.push(item)
      });
    }
    const allColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
        className: 'clickable'
      },
      {
        title: 'Name',
        dataIndex: 'name',
        render: (text, record) => (
          <span className="row-actions">
          <Link to={`category/${this.props.location.pathname.replace(/[^a-zA-Z0-9]/g, '')}-${record.name}`} activeClassName="selected">
              {text}
            </Link>
          </span>
        )      
      },

    ];
    let columns = allColumns;

    const notTabletOrPhoneTable = (
      <Table
        size="middle"
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={loading || searchLoading}
        onChange={onPaginationChange}
        pagination={pagination}
      />
    );
    const phoneTable = (
      <Table
        size="middle"
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={loading || searchLoading}
        onChange={onPaginationChange}
        pagination={pagination}
      />
    );

    let table = notTabletOrPhoneTable;

    return (
      <Row
        type="flex"
        justify="center"
        className="page list-view vpc-list-view"
      >
        <Col xs={24} xl={18}>
          <Row type="flex" justify="space-between" className="page-header">
            <h2 className="heading">{this.props.location.pathname.replace(/[^a-zA-Z0-9]/g, '')}</h2>
          </Row>
          <Divider />
        </Col>
        <Col xs={24} xl={18}>
          {table}
        </Col>
      </Row>
    );
  }
}
export default ListView(SubCategory)
