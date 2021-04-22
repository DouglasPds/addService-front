import React, { useCallback, useRef, useEffect, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory, useParams } from 'react-router-dom';

import Dropzone from '../../components/Dropzone';
import Input from '../../components/Input';
import AsyncSelect from '../../components/Select';
import TextArea from '../../components/TextArea';
import tipoServico from '../../enum/tipoServico';
import api from '../../services/api';
import { Container, Button, Title, Label } from './styles';

interface Servico {
	titulo: string;
	descricao: string;
	tipo_servico: string;
	fotos?: string;
	telefone?: string;
}

interface Id {
	id: string;
}

const CreateService: React.FC = () => {
	const history = useHistory();
	const { id } = useParams<Id>();
	const [servico, setServico] = useState<Servico>(() => {
		async function loadServico(): Promise<Servico | undefined> {
			if (id) {
				console.log(id);
				const response = await api.get(`/servicos/${id}`);
				// setServico(response.data);
				console.log(response.data);
				return response.data;
				console.log(response.data.fotos);
				console.log(servico);
			}
		}
		loadServico();
		return {} as Servico;
	});
	const formRef = useRef<FormHandles>(null);

	useEffect(() => {
		async function loadServico(): Promise<void> {
			if (id) {
				console.log(id);
				const response = await api.get(`/servicos/${id}`);
				setServico(response.data);
				console.log(response.data);
				console.log(response.data.fotos);
				// console.log(servico);
			}
		}
		loadServico();
	}, [id]);

	useEffect(() => {
		// const {  } = servico;
		formRef.current?.setData({
			titulo: servico?.titulo,
			descricao: servico?.descricao,
			tipo_servico: {
				value: servico?.tipo_servico,
				label: servico?.tipo_servico,
			},
			// fotos: servico?.fotos,
			telefone: servico?.telefone,
		});
		console.log(servico);
		// setTimeout(() => console.log(servico?.fotos), 2000);
	}, [servico]);

	const handleSubmit = useCallback(
		async (data: Servico, { reset }) => {
			try {
				console.log('haha', data, data.titulo);
				// console.log(data.fotos[0]?.name);

				const { titulo, descricao, tipo_servico, fotos, telefone } = data;

				if (id) {
					await api.put(`/servicos/${id}`, {
						titulo,
						descricao,
						tipo_servico,
						telefone,
					});
				} else {
					await api.post('/servicos', {
						titulo,
						descricao,
						tipo_servico,
						// fotos: fotos[0]?.name,
						telefone,
					});
				}

				history.push('/');

				reset();
			} catch (err) {
				console.log(err, 'Erro ao salvar');
			}
		},
		[history, id],
	);

	return (
		<>
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
					{/* <Dropzone name="fotos" /> */}
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
