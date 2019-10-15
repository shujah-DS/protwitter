import React from 'react';
import ModalState from './ModalState';

const ListView = WrappedComponent => {
  class Hoc extends ModalState {
    state = {
      page: 1,
      search: '',
      visible: false,
      pagination: {
        showTotal: (total, range) => `${range[0]} - ${range[1]} of ${total}`
      }
    };

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

    onPaginationChange = pagination => {
      this.setState({
        page: pagination.current
      });
    };

    onSearch = search => {
      this.setState({ loading: true });
      setTimeout(
        () => this.setState({ search: search || '', loading: false }),
        300
      );
    };

    render() {
      const { loading, search, page, pagination, key, visible } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          onPaginationChange={this.onPaginationChange}
          onSearch={this.onSearch}
          search={search}
          page={page}
          pagination={pagination}
          searchLoading={loading}
          formKey={key}
          visible={visible}
          showModal={this.showModal}
          hideModal={this.hideModal}
          toggleModalVisibility={this.toggleModalVisibility}
          setModalVisibility={this.setModalVisibility}
        />
      );
    }
  }
  return Hoc;
};

export default ListView;
