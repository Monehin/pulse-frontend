/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  Form,
  Input,
  Button,
  Checkbox,
  Card,
  message,
  notification,
} from 'antd';
import api from '../../utils/api';
import { storeAuthToken } from '../../utils/authToken';
import { useSharedState } from '../../store';
import { Redirect } from 'react-router-dom';

const openNotificationWithIcon = (type, msg) => {
  notification[type]({
    message: 'LOGIN',
    description: msg,
  });
};

const Login = () => {
  const [sharedState, setSharedState] = useSharedState();

  if (sharedState.isAuthenticated) return <Redirect to='/dashboard' />;

  const onFinish = async (values) => {
    setSharedState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      const res = await api.post('/auth/local/', {
        identifier: values.email,
        password: values.password,
      });
      const { data } = res;
      storeAuthToken(data);
      setSharedState((prev) => ({
        ...prev,
        user: data.user,
        isAuthenticated: true,
        isLoading: false,
      }));
      openNotificationWithIcon('success', 'User Login Successfully');
      return <Redirect to='/dashboard' />;
    } catch (error) {
      setSharedState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      if (error.response) {
        const errMsg =
          error.response.data.message && error.response.data.message[0].messages
            ? error.response.data.message[0].messages[0].message
            : null;
        message.error(errMsg);
      } else {
        message.error(error, 'Server Error');
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  return (
    <div css={style}>
      <Card style={{ width: '30rem' }}>
        <h3>Login</h3>
        <Form
          layout='vertical'
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please input a valid email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <div className='tailLayout'>
            <Form.Item name='remember' valuePropName='checked'>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Card>
    </div>
  );
};

const style = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;

  h3 {
    text-align: center;
    padding: 1rem 0;
  }

  .tailLayout {
    display: flex;
    justify-content: space-between;
  }
`;

export default Login;
