import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import Header from 'components/Header';
import { useServices } from 'hooks/useServices';
import { Servico } from 'interfaces/services.interface';

import { Container, TableContainer, Title } from './styles';

const ListServices: React.FC = () => {
	const { fetchServices, services } = useServices();

	useEffect(() => {
		fetchServices();
	}, [fetchServices]);

	return (
		<>
			<Header />
			<Container>
				<Title>Anúncios</Title>

				<TableContainer>
					<table>
						<thead>
							<tr>
								<th>Título</th>
								<th>Descrição</th>
								<th>Tipo Serviço</th>
								<th>Telefone</th>
								<th>Detalhes</th>
							</tr>
						</thead>

						<tbody>
							{services.map((service: Servico) => (
								<tr key={service.id}>
									<td>{service.titulo}</td>
									<td>{service.descricao}</td>
									<td>{service.tipo_servico?.value}</td>
									<td>{service.telefone}</td>
									<td>
										<Link to={`detalhes/${service.id}`}>Detalhes</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</TableContainer>
			</Container>
		</>
	);
};

export default ListServices;
