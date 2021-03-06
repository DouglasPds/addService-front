import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	body {
		background: #F0F2F5 ;
		font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased
	}

	a {
		text-decoration: none;
		color: #7800ba;
	}

	button {
		cursor: pointer;
	}
`;
