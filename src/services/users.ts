import api from './api';

export const createUser = async (data: any) => {
	await api.post('users', data);
};
