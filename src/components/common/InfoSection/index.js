import React from 'react';
import { Icon, Row, Col, Spin } from 'antd';
import './index.less';

class InfoSection extends React.Component {
  state = { key: Date.now() };

  render() {
    const { ModalForm } = this.props;
    const loading = Boolean(this.props.loading);
    return (
      <Col xs={24} className={`info-section ${this.props.className || ''}`}>
        <div className="section-content">
          <Row className="info-header">
            <span className="info-heading">
              {this.props.title}
              {' '}
            </span>
            {this.props.showUpdateButton && (
              <Icon
                className="action-icon info-header-icon"
                type={this.props.iconType || 'edit'}
                onClick={() => {
                  this.props.setModalVisibility(this.props.code, true);
                  this.setState({ key: Date.now() });
                }}
              />
            )}
          </Row>
          <Row
            className="info-content"
            style={{ minHeight: this.props.minHeight || 'auto' }}
          >
            <Spin spinning={loading} />
            {!loading && this.props.items}
          </Row>
        </div>
        {Boolean(ModalForm) && (
          <ModalForm
            key={this.state.key}
            modalStatus={this.props.modalStatus}
            setModalVisibility={this.props.setModalVisibility}
            {...this.props.modalProps}
          />
        )}
      </Col>
    );
  }
}

export default InfoSection;
