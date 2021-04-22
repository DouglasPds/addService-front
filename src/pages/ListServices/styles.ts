import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1120px;
	margin: 0 auto;
	padding: 40px 20px;
`;

export const Title = styled.h1`
	font-size: 48px;
	color: #181818;
	max-width: 450px;
	line-height: 56px;

	margin: 20px 0 40px 0;
`;

export const Button = styled.button`
	background-color: #0b5ed7;
	border: none;
	color: white;
	padding: 12px 24px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	border-radius: 5px;
`;

export const TableContainer = styled.section`
	margin-top: 64px;

	table {
		width: 100%;
		border-spacing: 0 8px;

		th {
			color: #181818;
			font-weight: normal;
			padding: 20px 32px;
			text-align: left;
			font-size: 16px;
			line-height: 24px;
		}

		td {
			padding: 20px 32px;
			border: 0;
			background: #fff;
			font-size: 16px;
			font-weight: normal;
			color: #181818;
		}

		td:first-child {
			border-radius: 8px 0 0 8px;
		}

		td:last-child {
			border-radius: 0 8px 8px 0;
		}
	}
`;
