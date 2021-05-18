import React from 'react';

import { Switch, Route } from 'react-router-dom';

import CreateService from 'pages/CreateService';
import ListServices from 'pages/ListServices';

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact component={ListServices} />
		<Route path="/servico/:id" component={CreateService} />
		<Route path="/servico" component={CreateService} />
	</Switch>
);

export default Routes;
