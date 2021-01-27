import { Button } from 'antd';
import { removeStoredAuthToken } from '../../utils/authToken';
import { useSharedState } from '../../store';

const Dashboard = () => {
  const [state, setState] = useSharedState();

  const handleLogout = () => {
    removeStoredAuthToken();
    setState((prev) => ({ ...prev, isAuthenticated: false, user: null }));
  };

  console.log(state.user.role.name);
  return (
    <div>
      <h1>Dashboard</h1>
      <h3> Welcome {state.user.username}!</h3>
      <h3> Role: {state.user.role.name}</h3>
      <Button type='dashed' onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
