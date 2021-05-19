import { Servico } from 'interfaces/services.interface';

import types from './types';

export function requestServices(): Record<string, unknown> {
	return {
		type: types.REQUEST_SERVICES,
	};
}

export function requestService(id: string): Record<string, unknown> {
	return {
		type: types.REQUEST_SERVICE,
		id,
	};
}

export function requestMyServices(id: string): Record<string, unknown> {
	return {
		type: types.REQUEST_MY_SERVICES,
		id,
	};
}

export function deleteService(id: string): Record<string, unknown> {
	return {
		type: types.DELETE_SERVICE,
		id,
	};
}

export function createService(data: Servico): Record<string, unknown> {
	return {
		type: types.CREATE_SERVICE,
		data,
	};
}

export function updateService(
	id: string,
	data: Servico,
): Record<string, unknown> {
	return {
		type: types.UPDATE_SERVICE,
		id,
		data,
	};
}
