import React from 'react';

import { Switch, Route } from 'react-router-dom';

import CreateService from 'pages/CreateService';
import CreateUser from 'pages/CreateUser';
import ListServices from 'pages/ListServices';
import Login from 'pages/Login';

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact component={ListServices} />
		<Route path="/servico/:id" component={CreateService} />
		<Route path="/servico" component={CreateService} />
		<Route path="/cadastro" component={CreateUser} />
		<Route path="/login" component={Login} />
	</Switch>
);

export default Routes;
