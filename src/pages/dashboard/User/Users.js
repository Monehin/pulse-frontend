import React from 'react';
import { Tabs } from 'antd';
import UserList from './UserList';
const { TabPane } = Tabs;

const Users = () => {
  return (
    <div>
      <Tabs defaultActiveKey='1' tabPosition='left'>
        <TabPane tab='All' key='1'>
          <UserList />
        </TabPane>
        <TabPane tab='Trainees' key='2'>
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab='Managers' key='3'>
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab='Partners' key='4'>
          Content of Tab Pane 4
        </TabPane>
        <TabPane tab='Administrator' key='5'>
          Content of Tab Pane 5
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Users;
