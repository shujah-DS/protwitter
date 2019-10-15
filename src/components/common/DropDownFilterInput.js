import React from 'react';
import { Row, Input, Icon } from 'antd';

import ClearableInput from './ClearableInput';
import FilterDropDown from './SelectDropDown';
import { PRIMARY_COLOR_CODE } from '../../constants';

const DropDownFilterInput = ({
  input = Input,
  placeholder = 'Search',
  label = 'Filter By',
  onChange
}) => (
  <div className="custom-filter-dropdown filter">
    <div className="ant-row-flex filter-container">
      <Row>
        <span
          style={{ marginBottom: 10, display: 'inline-block' }}
          className="title-label"
        >
          {label || 'Filter By'}
:
        </span>
      </Row>
      <ClearableInput
        Input={input}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  </div>
);

export const getInputFilter = (
  _this,
  input,
  key,
  placeholder = 'Search',
  label = 'Filter By'
) => ({
  filterDropdown: (
    <DropDownFilterInput
      input={input}
      placeholder={placeholder}
      onChange={value => _this.onFilterChange(key, value)}
      label={label}
    />
  ),
  filterIcon: (
    <Icon
      type="filter"
      style={{
        color: _this.state.filters[key] ? PRIMARY_COLOR_CODE : '#aaa'
      }}
    />
  )
});

export const getDropDownFilter = (
  _this,
  key,
  data,
  placeholder = 'Search',
  label = 'Filter By',
  keyName = 'id'
) => ({
  filterDropdown: (
    <div className="custom-filter-dropdown filter">
      <FilterDropDown
        data={data}
        handleChange={value => _this.onFilterChange(key, value)}
        placeholder={placeholder}
        label={label}
        keyName={keyName}
      />
    </div>
  ),
  filterIcon: (
    <Icon
      type="filter"
      style={{
        color: _this.state.filters[key] ? PRIMARY_COLOR_CODE : '#aaa'
      }}
    />
  )
});

export default DropDownFilterInput;
