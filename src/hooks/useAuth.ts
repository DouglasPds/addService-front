import { useCallback, useEffect, useState } from 'react';

import jwt_decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';

import { login } from 'store/login/actions';
import { auth } from 'store/login/selectors';

interface TokenProps {
	email: string;
	sub: string;
}

export const useAuth = () => {
	const { token, success } = useSelector(auth);
	const dispatch = useDispatch();
	const [idUser, setIdUser] = useState<TokenProps>();

	useEffect(() => {
		if (success) {
			const user: TokenProps = jwt_decode(token.accessToken);
			setIdUser(user);
		}
	}, [success, token.accessToken]);

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
		idUser,
	};
};
