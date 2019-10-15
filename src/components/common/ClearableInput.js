import React, { Component } from 'react';

import { Icon } from 'antd';
import moment from 'moment';

class ClearableInput extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  emitEmpty = () => {
    this.searchInput.input.value = '';
    this.searchInput.focus();
    this.setState({ show: false });
    this.props.onChange(undefined);
  };

  onChange = e => {
    if (moment.isMoment(e)) {
      this.setState({ show: true });
      this.props.onChange(e.format(this.props.format || 'YYYY-MM-DD'));
    } else if (e === null) {
      this.setState({ show: false });
      this.props.onChange(undefined);
    } else {
      this.setState({ show: !!e.target.value });
      this.props.onChange(e.target.value || undefined);
    }
  };

  render() {
    const { Input } = this.props;
    return (
      <Input
        ref={node => {
          this.searchInput = node;
        }}
        size="large"
        className="wide-button clearable-input"
        placeholder={this.props.placeholder}
        onChange={this.onChange}
        suffix={
          this.state.show && (
            <Icon type="close-circle" onClick={this.emitEmpty} />
          )
        }
        prefix={<Icon type="search" />}
      />
    );
  }
}

export default ClearableInput;
