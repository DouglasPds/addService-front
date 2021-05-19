import styled from 'styled-components';

export const Container = styled.div`
	background: white;
	margin: 70px auto 0;
	max-width: 30rem;
	padding: 20px;

	display: flex;
	flex-direction: column;

	h1 {
		margin-bottom: 20px;
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;

		label {
			margin: 15px 0;
		}

		button {
			margin-top: 20px;
			border: none;
			background: #157347;
			color: white;
			padding: 12px 24px;
			text-align: center;
			text-decoration: none;
			font-size: 16px;
			border-radius: 5px;
		}
	}

	div:last-child {
		margin-top: 40px;

		display: flex;
		justify-content: center;

		p {
			margin-right: 10px;
		}
	}
`;
