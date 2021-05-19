interface AuthProps {
	token: {
		accessToken: string;
	};
	loading: boolean;
	success: boolean;
}

interface StateProps {
	auth: AuthProps;
}

export const auth = (state: StateProps): AuthProps => state.auth;
