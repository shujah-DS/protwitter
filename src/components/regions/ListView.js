import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import {
  Row,
  Col,
  Table,
  Divider,
  Modal
} from 'antd';
import _ from 'lodash';

import { MANAGE_CATEGORY } from '../../constants';
import ListView from '../common/ListView';



const data = [
  {
    id: "1",
    name: "Basic"
  },{
    id: "2",
    name: "Culture"
  },{
    id:"3",
    name:"Feelings"
  },{
    id:"4",
    name:"Funny"
  },{
    id: "5",
    name: "Relatable"
  }
]
class RegionsListView extends React.Component {

  componentDidMount = () => {
  
  };


  deleteRegion = id => {
    const { deleteRegion } = this.props;
    Modal.confirm({
      title: 'Are you sure?',
      content: '',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteRegion(id);
      }
    });
  };

  render() {
    const {
      loading,
      searchLoading,
      pagination,
      onPaginationChange
    } = this.props;


    const allColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        className: 'clickable'
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
          <span className="row-actions">
          <Link to={`/${record.name}`} activeClassName="selected">
              {text}
            </Link>
          </span>
        )
      }
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
    

    let table = notTabletOrPhoneTable;
   

    return (
      <Row
        type="flex"
        justify="center"
        className="page list-view region-list-view"
      >
        <Col xs={24} xl={18}>
          <Row type="flex" justify="space-between" className="page-header">
            <h2 className="heading">{MANAGE_CATEGORY}</h2>
            <Col xs={24} md={18} className="filters">
              {/*<ClearableInput
                Input={Input}
                placeholder="Search"
                onChange={onSearch}
              />*/}

            </Col>
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

export default ListView(RegionsListView)
