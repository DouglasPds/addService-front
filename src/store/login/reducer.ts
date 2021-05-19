import types from './types';

const INITIAL_STATE = {
	token: '',
	loading: false,
	success: false,
};

export const auth = (
	state = INITIAL_STATE,
	action: { type: string; payload: any },
) => {
	switch (action.type) {
		case types.SIGNIN_SUCCESS:
			return { token: action.payload, loading: false, success: true };

		case types.SIGNIN_FAILURE:
			return { token: '', loading: false, success: false };

		default:
			return state;
	}
};
