import { Servico } from 'interfaces/services.interface';

interface ServiceProps {
	data: Servico[];
	loading: boolean;
	error: boolean;
}

interface MyServiceProps {
	props: Servico[];
	loading: boolean;
	error: boolean;
}

interface StateProps {
	services: ServiceProps;
}

interface MyStateProps {
	myServices: MyServiceProps;
}

interface State {
	state: Servico;
}
interface StateData {
	service: State;
}

export const listServices = (state: StateProps): ServiceProps => state.services;

export const listService = (state: StateData): State => state.service;

export const myServices = (state: MyStateProps): MyServiceProps =>
	state.myServices;
