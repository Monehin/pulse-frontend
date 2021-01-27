import { Route, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { useSharedState } from '../store';

const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const [state] = useSharedState();
  return (
    <Route
      {...otherProps}
      render={(props) =>
        !state.isLoading ? (
          state.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={otherProps.redirectTo ? otherProps.redirectTo : '/login'}
            />
          )
        ) : (
          <Loading />
        )
      }
    />
  );
};

export default PrivateRoute;
