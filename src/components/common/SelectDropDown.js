import React, { Component } from 'react';
import { Select } from 'antd';

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
    const {
      data,
      size = 'large',
      keyName = 'key',
      valueName = 'value',
      textName = 'value',
      className = '',
      placeholder = '',
      showSearch = true,
      onChange,
      onSelect,
      disabled = false,
      loading = false
    } = this.props;

    const filterRecords = data.map(item => {
      const key = item[keyName] || item[valueName] || item;
      const value = item[valueName] || item;
      const text = item[textName] || value;
      return (
        <Option key={key} value={value}>
          {text}
        </Option>
      );
    });

    return (
      <Select
        {...this.props}
        showSearch={showSearch}
        className={className}
        mode={this.props.mode}
        size={size}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        loading={loading}
        onSelect={onSelect}
        allowClear
      >
        {filterRecords}
      </Select>
    );
  }
}

export default SelectDropDown;
