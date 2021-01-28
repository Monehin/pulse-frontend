/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { Layout } from 'antd';
import Aside from './Aside';
import NavBar from './NavBar';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Programs from './Program/Programs';
import Cohorts from './Cohort/Cohorts';
import Trainees from './Trainee/Trainees';

const { Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollaspe] = useState(false);
  let { path } = useRouteMatch();

  const toggle = () => {
    setCollaspe(!collapsed);
  };
  return (
    <>
      <Layout css={style}>
        <Aside collapsed={collapsed} />
        <Layout className='site-layout'>
          <NavBar collapsed={collapsed} toggle={toggle} />
          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path={path}>
                <Programs />
              </Route>
              <Route path={`${path}/cohorts`}>
                <Cohorts />
              </Route>
              <Route path={`${path}/trainees`}>
                <Trainees />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

const style = css`
  min-height: 100vh;
`;

export default Dashboard;
