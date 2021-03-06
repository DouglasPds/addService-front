import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1120px;
	margin: 0 auto;
	padding: 0 20px 40px;

	form {
		background: white;
		padding: 10px;
		display: flex;
		flex-direction: column;

		div > button {
			background-color: #157347;
			width: 120px;
			margin-right: 10px;
		}
	}

	a {
		> button {
			background-color: #bb2d3b;
			width: 120px;
		}
	}
`;

export const Label = styled.label`
	margin: 15px 0;
`;

export const Title = styled.h1`
	font-size: 48px;
	color: #181818;
	max-width: 450px;
	line-height: 56px;

	margin: 20px 0 40px 0;
`;

export const Button = styled.button`
	margin-top: 20px;
	border: none;
	color: white;
	padding: 12px 24px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	border-radius: 5px;
`;
