import React from 'react';
import { Route, Switch } from 'react-router';

import Dashboard from '../pages/dashboard';
import FavoriteMovies from '../pages/favorites';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/favorite" exact component={FavoriteMovies} />
    </Switch>
  </>
);

export default Routes;
