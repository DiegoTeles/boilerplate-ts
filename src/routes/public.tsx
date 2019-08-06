import React from 'react';
import { BrowserRouter as Route, Router, Switch } from 'react-router-dom';

import UsersRoute from '../pages/Users';
import MainRoute from '../pages/Main';

const publicRoute: React.FC = () => {
  return (
		<Switch>
		<Route />
		</ Switch>
  )
};

export default publicRoute;
