import types from './types';

export function requestServices() {
	return {
		type: types.REQUEST_SERVICES,
	};
}

export function deleteService(id: string) {
	return {
		type: types.DELETE_SERVICE,
		id,
	};
}

export function createService(data: any) {
	return {
		type: types.CREATE_SERVICE,
		data,
	};
}
