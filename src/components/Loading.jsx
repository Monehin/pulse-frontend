/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Spin, Space } from 'antd';

const Loading = () => {
  return (
    <div css={style}>
      <Space size='large'>
        <Spin size='large' />
      </Space>
    </div>
  );
};

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  max-width: 100vw;
  height: 100vh;
  transition: 1s;
`;

export default Loading;
