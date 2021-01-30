import React from 'react';
import { Button } from 'antd';

const Trainees = () => {
  const check = () => {
    console.log('MONEHIN');
  };

  return (
    <div>
      <h1>TRAINEES</h1>
      <Button type='primary' onClick={check}>
        Loading
      </Button>
    </div>
  );
};

export default Trainees;
