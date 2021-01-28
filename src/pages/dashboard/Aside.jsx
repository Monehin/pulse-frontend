/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';

import {
  CarryOutOutlined,
  PartitionOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Aside = ({ collapsed }) => {
  let { url } = useRouteMatch();

  return (
    <Sider css={style} trigger={null} collapsible collapsed={collapsed}>
      <div className='logo'>
        <h1>PULSE</h1>
      </div>
      <Menu theme='light' mode='inline' defaultSelectedKeys={['1']}>
        <Menu.Item key='1' icon={<PartitionOutlined />}>
          <Link to={`${url}`}> Programs</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<CarryOutOutlined />}>
          <Link to={`${url}/cohorts`}>Cohorts </Link>
        </Menu.Item>
        <Menu.Item key='3' icon={<TeamOutlined />}>
          <Link to={`${url}/trainees`}> Trainees </Link>
        </Menu.Item>
        <Menu.Item key='4' icon={<UserOutlined />}>
          <Link to={`${url}/profile`}> Profile</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

const style = css`
  background-color: #ffffff;

  .logo {
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Aside;
