import types from './types';

export function users(state: [], action: { type: string; payload: any }) {
	switch (action.type) {
		case types.CREATE_USER_SUCCESS:
			return { state: [...state, action.payload] };
		default:
			return state;
	}
}
