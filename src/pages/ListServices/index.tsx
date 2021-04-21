import React, { useState, useEffect, useCallback } from 'react';

import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Container, TableContainer } from './styles';

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
			const ListaServicos = response.data;

			setServicos(ListaServicos);
			console.log(response.data);
		}
		loadServicos();
	}, []);

	// const handleUpdate = useCallback(() => {}, []);

	const handleDelete = useCallback(async id => {
		await api.delete(`/servicos/${id}`);
	}, []);

	return (
		<>
			<Container>
				<h1>Tela de listagem</h1>
				<p>haha</p>
				<Link to="/cadastro">
					<button type="button">Add new service</button>
				</Link>

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
											<FiEdit />
										</Link>
										<a href="/" onClick={() => handleDelete(servico.id)}>
											<FiTrash2 />
										</a>
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
