import React, { useEffect } from 'react';
import { useSharedState } from './store';
import { getStoredAuthToken } from './utils/authToken';
import Routes from './routes/Routes';
import { Spin } from 'antd';

function App() {
  const [state, setState] = useSharedState();

  useEffect(() => {
    const auth = getStoredAuthToken();
    if (auth) {
      setState((prev) => ({
        ...prev,
        isAuthenticated: true,
        user: auth.user,
        isLoading: false,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  });

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Spin
        style={{ maxHeight: '100vh' }}
        delay={500}
        size='large'
        spinning={state.isLoading}
      >
        <Routes />
      </Spin>
    </div>
  );
}

export default App;
