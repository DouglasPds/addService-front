import types from './types';

export function login(data: any) {
	return {
		type: types.SIGNIN,
		data,
	};
}
