import api from './api';

export const login = async (data: any) => {
	const response = await api.post('login', data);
	return response.data;
};
