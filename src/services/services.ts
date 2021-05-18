import api from './api';

export const getServices = async () => {
	const response = await api.get('servicos');
	return response.data;
};
