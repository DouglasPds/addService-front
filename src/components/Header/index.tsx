import React from 'react';

import { HeaderContainer } from './styles';

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<h1>AddService</h1>
			<div>
				<button type="button">Entrar</button>
				<button type="button">Anunciar</button>
			</div>
		</HeaderContainer>
	);
};

export default Header;
