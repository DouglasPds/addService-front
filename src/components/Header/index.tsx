import React, { useCallback, useState } from 'react';

import { Link } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';

import { HeaderContainer } from './styles';

const Header: React.FC = () => {
	const { success } = useAuth();
	const [sign, setSign] = useState(success);

	const handleSingOut = useCallback(() => {
		setSign(false);
	}, []);

	return (
		<HeaderContainer>
			<Link to="/">
				<h1>AddService</h1>
			</Link>
			<div>
				{sign ? (
					<>
						<Link to="meus-servicos">
							<button type="button">Meus Anúncios</button>
						</Link>
						<button type="button" onClick={handleSingOut}>
							<a href="/">Sair</a>
						</button>
						<Link to="servico">
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
