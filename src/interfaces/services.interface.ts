export interface Servico {
	id: string;
	titulo: string;
	descricao: string;
	tipo_servico: {
		value: string;
		label: string;
	};
	userId: string;
	fotos?: string;
	telefone: string;
}
