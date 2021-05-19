interface AuthProps {
	token: string;
	loading: boolean;
	success: boolean;
}

interface StateProps {
	auth: AuthProps;
}

export const auth = (state: StateProps): AuthProps => state.auth;
