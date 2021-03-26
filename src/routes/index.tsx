import React from 'react';
import { Route, Switch } from 'react-router';

import Dashboard from '../pages/dashboard';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  </>
);

export default Routes;
