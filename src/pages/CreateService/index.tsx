import React, { useCallback, useRef, useEffect, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory, useParams } from 'react-router-dom';

import Header from 'components/Header';
import Input from 'components/Input';
import AsyncSelect from 'components/Select';
import TextArea from 'components/TextArea';
import tipoServico from 'enum/tipoServico';
import { useServices } from 'hooks/useServices';
import api from 'services/api';

import { Container, Button, Title, Label } from './styles';

interface Servico {
	titulo: string;
	descricao: string;
	tipo_servico: {
		value: string;
		label: string;
	};
	fotos?: string;
	telefone?: string;
}

interface Id {
	id: string;
}

const CreateService: React.FC = () => {
	const history = useHistory();
	const { id } = useParams<Id>();
	const [servico, setServico] = useState<Servico>();
	const formRef = useRef<FormHandles>(null);
	const { addService, handleUpdate } = useServices();

	useEffect(() => {
		async function loadServico(): Promise<void> {
			if (id) {
				const response = await api.get(`/servicos/${id}`);
				setServico(response.data);
			}
		}
		loadServico();
	}, [id]);

	useEffect(() => {
		formRef.current?.setData({
			titulo: servico?.titulo,
			descricao: servico?.descricao,
			tipo_servico: {
				value: servico?.tipo_servico.value,
				label: servico?.tipo_servico.label,
			},
			telefone: servico?.telefone,
		});
	}, [servico]);

	const handleSubmit = useCallback(
		(data: Servico, { reset }) => {
			if (id) {
				handleUpdate(id, data);
			} else {
				addService(data);
			}
			history.push('/');
			reset();
		},
		[addService, history, handleUpdate, id],
	);

	// const handleSubmit = useCallback(
	// 	async (data: Servico, { reset }) => {
	// 		try {
	// 			const { titulo, descricao, tipo_servico, telefone } = data;

	// 			if (id) {
	// 				await api.put(`/servicos/${id}`, {
	// 					titulo,
	// 					descricao,
	// 					tipo_servico,
	// 					telefone,
	// 				});
	// 			} else {
	// 				await api.post('/servicos', {
	// 					titulo,
	// 					descricao,
	// 					tipo_servico,
	// 					telefone,
	// 				});
	// 			}

	// 			history.push('/');

	// 			reset();
	// 		} catch (err) {
	// 			console.log(err, 'Erro ao salvar');
	// 		}
	// 	},
	// 	[history, id],
	// );

	return (
		<>
			<Header />
			<Container>
				<Title>Criar Serviço</Title>
				<Form id="form" ref={formRef} onSubmit={handleSubmit}>
					<Label htmlFor="titulo">Título</Label>
					<Input name="titulo" id="titulo" placeholder="Título" />
					<Label>Descrição</Label>
					<TextArea name="descricao" placeholder="Descrição" />
					<Label>Tipo Serviço</Label>
					<AsyncSelect
						name="tipo_servico"
						options={tipoServico}
						placeholder="Selecione..."
						isClearable
					/>
					<Label>Telefone</Label>
					<Input name="telefone" placeholder="Telefone" />
					<div>
						<Button type="submit">Adicionar</Button>
						<Link to="/">
							<Button type="button">Voltar</Button>
						</Link>
					</div>
				</Form>
			</Container>
		</>
	);
};

export default CreateService;
