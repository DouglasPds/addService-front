import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { login } from 'store/login/actions';
import { auth } from 'store/login/selectors';

export const useAuth = () => {
	const { token, success } = useSelector(auth);
	const dispatch = useDispatch();

	const signIn = useCallback(
		value => {
			dispatch(login(value));
		},
		[dispatch],
	);

	return {
		signIn,
		token,
		success,
	};
};
