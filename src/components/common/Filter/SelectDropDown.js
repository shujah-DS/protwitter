import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';
import _ from 'lodash';
import { showLabel } from '../../modules/utils';
import './index.less';

class SelectDropDown extends Component {
  blur = () => {
    this.drop.rcSelect.blur();
  };

  componentDidMount = () => {
    if (this.props && this.props.setSelf) {
      setTimeout(() => {
        this.props.setSelf(this.drop);
      }, 1000);
    }
  };

  render() {
    const { Option } = Select;
    const { data } = this.props;
    const { FormItem } = this.props;

    let filterRecords = '';

    filterRecords = data.map(object => (
      <Option key={object.id} value={object[this.props.keyName || 'id']}>
        {object.name}
      </Option>
    ));

    let className = 'drop-down';

    let select = (
      <Select
        ref={node => {
          this.drop = node;
        }}
        showSearch
        className={className}
        mode={this.props.mode}
        size="large"
        placeholder={this.props.placeholder}
        onChange={this.props.handleChange}
        allowClear
      >
        {filterRecords}
      </Select>
    );

    let selectFilter = (
      <Row type="flex" className="filter-container">
        <Col>
          <Row>
            <span className="title-label">
              {this.props.label || 'Filter By:'}
            </span>
          </Row>
          <Row>{select}</Row>
        </Col>
      </Row>
    );

    if (this.props.formType) {
      const { getFieldDecorator } = this.props.form;
      className = 'wide-button';

      select = (
        <Select
          ref={node => {
            this.drop = node;
          }}
          showSearch
          className={className}
          mode={this.props.mode}
          size="large"
          placeholder={this.props.placeholder}
          onChange={this.props.handleChange}
          allowClear
        >
          {filterRecords}
        </Select>
      );

      const values = getFieldDecorator(this.props.name, {
        initialValue: this.props.initialValue,
        rules: [{ required: this.props.required, message: this.props.warning }]
      })(select);

      selectFilter = (
        <FormItem label={showLabel(this.props.label, this.props.deviceSize)}>
          {values}
        </FormItem>
      );
    }

    return this.props.formType ? select : selectFilter;
  }
}

export default SelectDropDown;
