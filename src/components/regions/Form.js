import React from 'react';
import { Modal, Form, Input, Button, Spin, Switch, message } from 'antd';
import ModalActions from '../common/ModalActions';
import { connectComponent } from '../../modules/utils';
import RegionService from '../../services/region';
import SelectDropDown from '../common/SelectDropDown';
import { REGIONS } from '../../constants/data';

const FormItem = Form.Item;

class AddForm extends React.Component {
  state = { loading: false, error: '' };

  handleSubmit = () => {
    const that = this;
    const { region = {}, onCancel } = this.props;
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        that.setState({
          loading: true,
          error: ''
        });
        try {
          let response;
          if (region.id) {
            response = await RegionService.updateRegion(region.id, values);
          } else {
            response = await RegionService.addRegion(values);
          }
          that.setState({
            loading: false,
            error: ''
          });
          onCancel();
          message.success(response.message, 3);
        } catch (error) {
          that.setState({
            loading: false,
            error: error.message
          });
        }
      }
    });
  };

  render() {
    const { visible, onCancel, form, title, region = {} } = this.props;
    const { loading, error } = this.state;
    const { getFieldDecorator } = form;
    const modalActions = (
      <ModalActions>
        <Button onClick={onCancel} size="large" className="wide">
          Cancel
        </Button>
        <Button
          type="primary"
          onClick={this.handleSubmit}
          size="large"
          className="wide"
          disabled={loading}
          loading={loading}
        >
          Submit
        </Button>
      </ModalActions>
    );
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 }
      }
    };

    return (
      <Modal
        title={title}
        visible={visible}
        footer={modalActions}
        onCancel={onCancel}
        maskClosable={false}
        className="form region-form left-labels"
      >
        <Form>
          <Spin size="large" spinning={Boolean(loading)} />
          <p className="has-error">{error}</p>
          <FormItem label="Enable" {...formItemLayout}>
            {getFieldDecorator('is_enabled', {
              initialValue:
                region.is_enabled === undefined ? true : region.is_enabled,
              valuePropName: 'checked',
              rules: []
            })(<Switch />)}
          </FormItem>

          <FormItem label="Name" {...formItemLayout}>
            {getFieldDecorator('name', {
              initialValue: region.name,
              rules: [
                {
                  required: true,
                  message: 'Please select a region!'
                }
              ]
            })(
              <SelectDropDown
                placeholder="Select Region"
                data={REGIONS}
                keyName="name"
                textName="name"
                valueName="name"
              />
            )}
          </FormItem>
          <FormItem label="Alias" {...formItemLayout}>
            {getFieldDecorator('alias', {
              initialValue: region.alias,
              rules: [
                {
                  required: true,
                  message: 'Please enter region alias!'
                }
              ]
            })(<Input />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  regions: { ...state.regions }
});

export default connectComponent(mapStateToProps, {}, Form.create()(AddForm));
