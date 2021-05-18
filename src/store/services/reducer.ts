import types from './types';

interface Servico {
	id: string;
	titulo: string;
	descricao: string;
	tipo_servico: {
		value: string;
		label: string;
	};
	fotos: string;
	telefone: string;
}

interface InitialState {
	data: Servico[];
	loading: boolean;
	error: boolean;
}

const INITIAL_STATE: InitialState = {
	data: [],
	loading: false,
	error: false,
};

export function services(
	state = INITIAL_STATE,
	action: { type: string; payload: any },
): InitialState {
	switch (action.type) {
		case types.REQUEST_SERVICES:
			return { ...state, loading: true };

		case types.REQUEST_SUCCESS_SERVICES:
			return { data: action.payload, loading: false, error: false };

		case types.REQUEST_FAILURE_SERVICES:
			return { data: [], loading: false, error: true };

		case types.DELETE_SERVICE:
			return {
				loading: false,
				error: false,
				data: state.data.filter(id => id !== action.payload),
			};

		default:
			return state;
	}
}
