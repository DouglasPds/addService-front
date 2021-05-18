interface Servico {
	titulo: string;
	descricao: string;
	tipo_servico: {
		value: string;
		label: string;
	};
	fotos?: string;
	telefone?: string;
}

export const listServices = (state: any) => state.services;

export const listService = (state: any) => state.service;
