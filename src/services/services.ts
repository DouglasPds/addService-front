import api from './api';

export const getServices = async () => {
	const response = await api.get('servicos');
	return response.data;
};

export const deleteService = async (id: string) => {
	await api.delete(`servicos/${id}`);
};
