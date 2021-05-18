import { User } from 'interfaces/users.interface';

import types from './types';

export function createUser(data: User): Record<string, unknown> {
	return {
		type: types.CREATE_USER,
		data,
	};
}
