import React from 'react';
import { Row, Col, Card, Form, Input, Icon, Button } from 'antd';

import { actions } from '../../modules/auth/actions';
import { LOGIN } from '../../modules/auth/constants';
import { connectComponent } from '../../modules/utils';

const FormItem = Form.Item;

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.login(values);
      }
    });
  };

  render() {
    const { loading, isLoggedIn } = this.props;
    if (isLoggedIn) return null;
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center">
        <Col xs={24} sm={8}>
          <Card title="Login" style={{ marginTop: 150 }}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [
                    { required: true, message: 'Please input your username!' }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="Username"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: 'Please input your Password!' }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  loading={loading}
                >
                  Log in
                </Button>
              </FormItem>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth[LOGIN].loading
});

export default connectComponent(
  mapStateToProps,
  {
    login: actions.login.request
  },
  Form.create()(Login)
);
