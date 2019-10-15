import React, { Component } from 'react';

export default class ModalState extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({ visible: true, key: Date.now() });
  };

  hideModal = () => {
    this.setState({ visible: false });
  };

  toggleModalVisibility = () => {
    this.setState(prevState => ({
      visible: prevState.visible,
      key: Date.now()
    }));
  };

  setModalVisibility = visible => {
    this.setState({ visible, key: Date.now() });
  };

  render() {
    return <div key={this.state.key} />;
  }
}
