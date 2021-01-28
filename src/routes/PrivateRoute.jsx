import { Route, Redirect } from 'react-router-dom';
import { useSharedState } from '../store';

const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const [state] = useSharedState();
  return (
    <Route
      {...otherProps}
      render={(props) =>
        state.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={otherProps.redirectTo ? otherProps.redirectTo : '/login'}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
