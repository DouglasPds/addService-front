import React, { useState, useEffect, useCallback } from 'react';

import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Container, TableContainer, Button, Title } from './styles';

interface Servico {
	id: string;
	titulo: string;
	descricao: string;
	tipo_servico: string;
	fotos: string;
	telefone: string;
}

const ListServices: React.FC = () => {
	const [servicos, setServicos] = useState<Servico[]>([]);

	useEffect(() => {
		async function loadServicos(): Promise<void> {
			const response = await api.get('/servicos');

			setServicos(response.data);
		}
		loadServicos();
	}, []);

	const handleDelete = useCallback(async id => {
		await api.delete(`/servicos/${id}`);
	}, []);

	return (
		<>
			<Container>
				<Title>Lista dos serviços</Title>

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
							{servicos.map(servico => (
								<tr key={servico.id}>
									<td>{servico.titulo}</td>
									<td>{servico.descricao}</td>
									<td>{servico.tipo_servico}</td>
									<td>{servico.telefone}</td>
									<td>
										<Link to={`/cadastro/${servico.id}`}>
											<FiEdit size={20} />
										</Link>
										<a href="/" onClick={() => handleDelete(servico.id)}>
											<FiTrash2 size={20} />
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</TableContainer>

				<Link to="/cadastro">
					<Button type="button">Novo Serviço</Button>
				</Link>
			</Container>
		</>
	);
};

export default ListServices;
