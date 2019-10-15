import React from 'react';
import { Row, Col, Table, Button, Icon } from 'antd';
import _ from 'lodash';
import moment from 'moment';

import AddForm from './ec2/AddForm';
import ModalState from './common/ModalState';
import Stats from './common/Stats';
import { connectComponent } from '../modules/utils';
import { actions } from '../modules/ec2/actions';
import { GET_INSTANCES } from '../modules/ec2/constants';
import JoinNodes from './common/JoinNodes';
import { LAUNCH_INSTANCE, CREATE_EC2_INSTANCE } from '../constants';

class ManagerDashboard extends ModalState {
  state = { instance: {}, page: 1 };

  componentDidMount = () => {
    this.props.getInstances();
  };

  pageChange = pagination => {
    this.setState({
      page: pagination.current
    });
  };

  render() {
    const { ec2, device } = this.props;
    const { visible, key, instance } = this.state;

    const allColumns = [
      {
        title: 'Instance Title',
        key: 'InstanceTitle',
        render: (text, record) =>
          (record.Tags.filter(x => x.Key === 'Name').length > 0
            ? record.Tags.filter(x => x.Key === 'Name')[0].Value
            : 'No Name')
      },
      {
        title: 'Instance Id',
        dataIndex: 'InstanceId',
        key: 'InstanceId'
      },
      {
        title: 'Instance Type',
        dataIndex: 'InstanceType',
        key: 'InstanceType'
      },
      {
        title: 'Launch Time   ',
        dataIndex: 'LaunchTime',
        key: 'LaunchTime',
        sorter: (a, b) => moment(a.LaunchTime) - moment(b.LaunchTime)
      },
      {
        title: 'Instance State',
        key: 'InstanceState',
        filterMultiple: false,
        filters: [
          {
            text: 'Running',
            value: 'running'
          },
          {
            text: 'Stopped',
            value: 'stopped'
          },
          {
            text: 'Terminated',
            value: 'terminated'
          }
        ],
        onFilter: (value, record) => record.State.Name.indexOf(value) === 0,
        render: (text, record) => _.startCase(record.State.Name)
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span className="row-actions">
            <JoinNodes>
              <Icon type="edit" theme="filled" />
              <Icon
                type="delete"
                onClick={() => this.props.terminateInstance(record.InstanceId)}
                theme="filled"
              />
            </JoinNodes>
          </span>
        )
      }
    ];
    let columns = allColumns;
    if (device.screen === 'xs') {
      columns = allColumns.slice(0, 2);
    }
    const statsOrder = [
      'runningInstances',
      'stoppedInstances',
      'licences',
      'availableAmis'
    ];
    const statsKeys = {
      runningInstances: {
        countClass: 'color-green',
        countLabel: 'Running Instances'
      },
      stoppedInstances: {
        countClass: 'color-blue',
        countLabel: 'Stooped Instances'
      },
      licences: {
        countClass: 'color-blue',
        countLabel: 'Available Licenses'
      },
      availableAmis: {
        countClass: 'color-orange',
        countLabel: 'Available AMIs'
      }
    };
    const stats = statsOrder.map(name => ({
      count: Math.floor(Math.random() * 100),
      ...statsKeys[name]
    }));
    return (
      <Row type="flex" justify="center" className="page manager-dashboard">
        {/* <Col xs={24} xl={18}>
          <Row type="flex" justify="end" className="page-header">
            <Button type="primary" size="large" onClick={this.showModal}>
              Launch Instance
            </Button>
            <Divider />
          </Row>
        </Col> */}
        <Col xs={24} xl={18}>
          <Stats
            stats={stats}
            loading={false}
            defaultFilter="month"
            onFilterChange={this.onStatsFilterChange}
            heading="Stats"
            actions={(
              <Button type="primary" size="large" onClick={this.showModal}>
                {LAUNCH_INSTANCE}
              </Button>
)}
          />
        </Col>
        <Col xs={24} xl={18}>
          <Table
            size="middle"
            rowKey="InstanceId"
            columns={columns}
            dataSource={ec2.instances}
            loading={ec2[GET_INSTANCES].loading}
            onChange={this.pageChange}
          />
        </Col>
        <AddForm
          key={key}
          title={CREATE_EC2_INSTANCE}
          visible={visible}
          onCancel={this.hideModal}
          instance={instance}
        />
      </Row>
    );
  }
}
const mapStateToProps = state => ({
  ec2: { ...state.ec2 }
});

export default connectComponent(
  mapStateToProps,
  {
    getInstances: actions.getInstances.request,
    startInstance: actions.startInstance.request,
    stopInstance: actions.stopInstance.request,
    terminateInstance: actions.terminateInstance.request
  },
  ManagerDashboard
);
