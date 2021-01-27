import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Dashboard from '../pages/dashboard/index';

const Routes = () => {
  return (
    <Switch>
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <PrivateRoute path='/dashboard' exact component={Dashboard} />
    </Switch>
  );
};

export default Routes;
