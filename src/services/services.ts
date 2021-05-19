import { Servico } from 'interfaces/services.interface';

import api from './api';

export const getServices = async (): Promise<Servico[]> => {
	const response = await api.get('servicos');
	return response.data;
};

export const getService = async (id: string): Promise<Servico> => {
	const response = await api.get(`servicos/${id}`);
	return response.data;
};

export const getMyServices = async (id: string) => {
	const response = await api.get(`servicos?userId=${id}`);
	return response.data;
};

export const deleteService = async (id: string): Promise<void> => {
	await api.delete(`servicos/${id}`);
};

export const createService = async (data: Servico): Promise<void> => {
	await api.post('servicos', data);
};

export const updateService = async (
	id: string,
	data: Servico,
): Promise<void> => {
	await api.put(`servicos/${id}`, data);
};
