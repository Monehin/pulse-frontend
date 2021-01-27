import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
  }, []);

  if (state.isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
