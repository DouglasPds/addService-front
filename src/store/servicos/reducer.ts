import types from './types';

const INITIAL_STATE = {
	data: [],
	loading: false,
	error: false,
};

export function servicos(
	state = INITIAL_STATE,
	action: { type: string; payload: [] },
) {
	switch (action.type) {
		case types.REQUEST_SERVICES:
			return { ...state, loading: true };

		case types.REQUEST_SUCCESS_SERVICES:
			return { data: action.payload, loading: false, error: false };

		case types.REQUEST_FAILURE_SERVICES:
			return { data: [], loading: false, error: true };

		default:
			return state;
	}
}
