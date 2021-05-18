import { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { createUser } from 'store/users/actions';

export const useUsers = () => {
	const dispatch = useDispatch();

	const addUser = useCallback(
		value => {
			dispatch(createUser(value));
		},
		[dispatch],
	);

	return {
		addUser,
	};
};
