/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';
import DashboardRoutes from '../../routes/DashboardRoutes';

const { Sider } = Layout;

const Aside = ({ collapsed }) => {
  let { url } = useRouteMatch();

  return (
    <Sider css={style} trigger={null} collapsible collapsed={collapsed}>
      <div className='logo'>
        <h1>PULSE</h1>
      </div>
      <Menu theme='light' mode='inline' defaultSelectedKeys={['1']}>
        {DashboardRoutes
          ? DashboardRoutes.map((route) => (
              <Menu.Item key={route.id} icon={route.icon}>
                <Link to={`${url}${route.url}`}>{route.name}</Link>
              </Menu.Item>
            ))
          : null}
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
