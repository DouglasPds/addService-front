import styled from 'styled-components';

export const Container = styled.div`
	background: white;
	margin: 70px auto 0;
	max-width: 60rem;
	padding: 20px;

	display: flex;
	flex-direction: column;

	h1 {
		margin-bottom: 30px;
	}

	p + p {
		margin-top: 10px;
	}

	button {
		background-color: #bb2d3b;
		margin-top: 50px;
		border: none;
		color: white;
		padding: 12px 24px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		border-radius: 5px;
	}
`;
