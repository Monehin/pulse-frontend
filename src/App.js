import React, { useEffect } from 'react';
import { useSharedState } from './store';
import { getStoredAuthToken } from './utils/authToken';
import Routes from './routes/Routes';
import Loading from './components/Loading';

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
    }
  });

  if (state.isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Routes />
    </div>
  );
}

export default App;
