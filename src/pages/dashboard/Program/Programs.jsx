import React, { useEffect } from 'react';
import api from '../../../utils/api';
import { useSharedState } from '../../../store';
import { Link } from 'react-router-dom';
import { Table, Badge, Menu, Dropdown, Space, Tag, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Link to='/'>{text.toUpperCase()}</Link>,
  },
  {
    title: 'Duration',
    dataIndex: 'weeks',
    key: 'weeks',
    render: (num) => <h4>{`${num} Weeks`}</h4>,
  },
  {
    title: 'Rating Attributes',
    key: 'rating_attributes',
    dataIndex: 'rating_attributes',
    render: (rating_attributes) => (
      <>
        {rating_attributes.map((attribute) => {
          let color = 'blue';
          return (
            <Tag color={color} key={attribute._id}>
              {attribute.name.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size='middle'>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Space>
    ),
  },
];

const Programs = () => {
  const [sharedState, setShareState] = useSharedState();

  const getProgramCohort = async () => {
    const getPrograms = api.get('/programs');
    const getCohorts = api.get('/cohort-programs');
    api
      .all([getPrograms, getCohorts])
      .then((data) => {
        setShareState({
          ...sharedState,
          programs: data[0].data,
          cohorts: data[1].data,
        });
      })
      .catch((err) => console.log('ERROR', err.response));
  };

  useEffect(() => {
    getProgramCohort();
    // eslint-disable-next-line
  }, []);

  const programData = sharedState.programs
    ? sharedState.programs.map((program) => ({ key: program.id, ...program }))
    : null;

  const menu = (
    <Menu>
      <Menu.Item>Action 1</Menu.Item>
      <Menu.Item>Action 2</Menu.Item>
    </Menu>
  );

  const expandedRowRender = (row) => {
    const columns = [
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Start Date', dataIndex: 'start_date', key: 'start_date' },
      { title: 'End Date', dataIndex: 'end_date', key: 'end_date' },
      {
        title: 'Status',
        key: 'status',
        render: (data) => (
          <span>
            <Badge status='success' />
            {data.status}
          </span>
        ),
      },
      {
        title: 'Trainees ',
        dataIndex: 'trainee_count',
        key: 'trainee_count',
      },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size='middle'>
            <Button size='small'>Pause</Button>
            <Button size='small'>Stop</Button>
            <Dropdown overlay={menu}>
              <Button size='small'>
                More <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let j in row.cohort_programs) {
      data.push({
        key: row.key,
        state_date: row.cohort_programs[j].start_date,
        end_date: row.cohort_programs[j].end_date,
        name: `Cohort ${parseInt(j) + 1}`,
        trainee_count: '50',
        status: row.cohort_programs[j].status,
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  return (
    <div>
      <h1>PROGRAMS</h1>
      {sharedState.programs ? (
        <Table
          columns={columns}
          expandable={{ expandedRowRender }}
          dataSource={programData}
        />
      ) : null}
    </div>
  );
};

export default Programs;
