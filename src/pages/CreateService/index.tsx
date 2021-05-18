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
import { Servico } from 'interfaces/services.interface';

import { Container, Button, Title, Label } from './styles';

interface Id {
	id: string;
}

const CreateService: React.FC = () => {
	const history = useHistory();
	const { id } = useParams<Id>();
	const [servico, setServico] = useState<Servico>();
	const formRef = useRef<FormHandles>(null);
	const { addService, handleUpdate, fetchService, service } = useServices();

	useEffect(() => {
		if (id) {
			fetchService(id);
		}
	}, [fetchService, id]);

	useEffect(() => {
		if (id) {
			setServico(service);
		}
	}, [id, service]);

	useEffect(() => {
		formRef.current?.setData({
			titulo: servico?.titulo,
			descricao: servico?.descricao,
			tipo_servico: {
				value: servico?.tipo_servico?.value,
				label: servico?.tipo_servico?.label,
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
