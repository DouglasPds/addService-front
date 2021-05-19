/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import { useServices } from 'hooks/useServices';

import { Container } from './styles';

interface Id {
	id: string;
}

const Detail: React.FC = () => {
	const { id } = useParams<Id>();
	const { fetchService, service } = useServices();

	useEffect(() => {
		if (id) {
			fetchService(id);
		}
	}, [fetchService, id]);

	return (
		<>
			<Header />
			<Container>
				<h1>{service.titulo}</h1>
				<p>{service.descricao}</p>
				<p>{service.tipo_servico?.value}</p>
				<p>{service.telefone}</p>
				<Link to="/">
					<button type="button">Voltar</button>
				</Link>
			</Container>
		</>
	);
};

export default Detail;
