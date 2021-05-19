import React, { useEffect } from 'react';

import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import { useAuth } from 'hooks/useAuth';
import { useServices } from 'hooks/useServices';
import { Servico } from 'interfaces/services.interface';

import { Container, TableContainer, Button, Title } from './styles';

const MyServices: React.FC = () => {
	const { fetchMyServices, myService, handleDelete } = useServices();
	const { idUser } = useAuth();

	useEffect(() => {
		if (idUser) {
			fetchMyServices(idUser?.sub);
		}
	}, [fetchMyServices, idUser]);

	useEffect(() => {
		// eslint-disable-next-line no-unused-expressions
		myService;
	}, [myService]);

	return (
		<>
			<Header />
			<Container>
				<Title>Meus anúncios</Title>

				<TableContainer>
					<table>
						<thead>
							<tr>
								<th>Título</th>
								<th>Descrição</th>
								<th>Tipo Serviço</th>
								<th>Telefone</th>
								<th>Ações</th>
							</tr>
						</thead>

						<tbody>
							{myService.map((service: Servico) => (
								<tr key={service.id}>
									<td>{service.titulo}</td>
									<td>{service.descricao}</td>
									<td>{service.tipo_servico?.value}</td>
									<td>{service.telefone}</td>
									<td>
										<Link to={`/servico/${service.id}`}>
											<FiEdit size={20} />
										</Link>
										<a
											href="meus-servicos"
											onClick={() => handleDelete(service.id)}
										>
											<FiTrash2 size={20} />
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</TableContainer>

				<Link to="/servico">
					<Button type="button">Novo Anúncio</Button>
				</Link>
			</Container>
		</>
	);
};

export default MyServices;
