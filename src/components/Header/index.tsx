import React from 'react';

import { Link } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';

import { HeaderContainer } from './styles';

const Header: React.FC = () => {
	const { success } = useAuth();

	return (
		<HeaderContainer>
			<h1>AddService</h1>
			<div>
				{success ? (
					<>
						<button type="button">Sair</button>
						<Link to="cadastro">
							<button type="button">Anunciar</button>
						</Link>
					</>
				) : (
					<Link to="/login">
						<button type="button">Entrar</button>
					</Link>
				)}
			</div>
		</HeaderContainer>
	);
};

export default Header;
