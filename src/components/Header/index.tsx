import React from 'react';

import { Link } from 'react-router-dom';

import { HeaderContainer } from './styles';

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<h1>AddService</h1>
			<div>
				<Link to="/cadastro">
					<button type="button">Entrar</button>
				</Link>
				<button type="button">Anunciar</button>
			</div>
		</HeaderContainer>
	);
};

export default Header;
