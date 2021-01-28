/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Layout, Button, Avatar, Typography, Popover } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { removeStoredAuthToken } from '../../utils/authToken';
import { useSharedState } from '../../store';

import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Text } = Typography;

const NavBar = ({ collapsed, toggle }) => {
  const [state, setState] = useSharedState();

  const { username, email, role } = state.user;

  const handleLogout = () => {
    removeStoredAuthToken();
    setState((prev) => ({
      ...prev,
      isAuthenticated: false,
      isloading: true,
      user: null,
    }));
  };

  return (
    <Header css={style} style={{ padding: 0, backgroundColor: '#F0F2F5' }}>
      <div>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: () => toggle(),
          }
        )}
      </div>
      <div className='nav-profile'>
        <Text type='primary'>
          {' '}
          {`${username.toUpperCase()} | ${role.name.toUpperCase()}`}
        </Text>
        <Popover
          placement='bottomRight'
          title={<Text type='secondary'>{`${email}`}</Text>}
          content={<Button onClick={handleLogout}>Logout</Button>}
          trigger='click'
        >
          <Avatar
            style={{
              backgroundColor: '#87d068',
            }}
            icon={<UserOutlined />}
          />
        </Popover>
      </div>
    </Header>
  );
};

const style = css`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .nav-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
  }

  .nav-profile > * {
    margin-left: 1rem;
  }
`;

export default NavBar;
