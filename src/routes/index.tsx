import React from 'react';

import { Switch, Route } from 'react-router-dom';

import CreateService from 'pages/CreateService';
import ListServices from 'pages/ListServices';

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact component={ListServices} />
		<Route path="/cadastro/:id" component={CreateService} />
		<Route path="/cadastro" component={CreateService} />
	</Switch>
);

export default Routes;
