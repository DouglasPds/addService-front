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
) {
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

		case types.CREATE_SERVICE_SUCCESS:
			return {
				...state,
				data: [...state.data, action.payload],
			};

		case types.UPDATE_SERVICE_SUCCESS:
			return {
				...state,
				data: [
					state.data.map(servico => {
						if (servico.id === action.payload.id) {
							return {
								...action.payload.data,
							};
						}
						return servico;
					}),
				],
			};

		default:
			return state;
	}
}

export function service(state = [], action: { type: string; payload: any }) {
	switch (action.type) {
		case types.REQUEST_SERVICE_SUCCESS:
			return { state: action.payload };

		default:
			return state;
	}
}
