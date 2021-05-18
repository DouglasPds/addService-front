import types from './types';

export function requestServices() {
	return {
		type: types.REQUEST_SERVICES,
	};
}

export function deleteService(id: string) {
	console.log(id);
	return {
		type: types.DELETE_SERVICE,
		id,
	};
}
