import React, { useCallback, useRef, useEffect, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import Header from 'components/Header';
import Input from 'components/Input';
import AsyncSelect from 'components/Select';
import TextArea from 'components/TextArea';
import tipoServico from 'enum/tipoServico';
import { useAuth } from 'hooks/useAuth';
import { useServices } from 'hooks/useServices';
import { Servico } from 'interfaces/services.interface';
import getValidationErrors from 'utils/getValidationErrors';

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
	const { idUser } = useAuth();

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
		async (data: Servico, { reset }) => {
			try {
				formRef.current?.setErrors({});

				const schema = Yup.object().shape({
					titulo: Yup.string().required('Título obrigatório'),
					descricao: Yup.string().required('Descrição obrigatória'),
					tipo_servico: Yup.object()
						.nullable()
						.shape({
							label: Yup.string().required('Tipo do serviço obrigatório'),
							value: Yup.string().required(),
						}),
					telefone: Yup.string().required('Telefone obrigatório'),
				});

				await schema.validate(data, {
					abortEarly: false,
				});

				if (id) {
					handleUpdate(id, data);
				} else {
					data.userId = idUser!.sub;
					addService(data);
				}
				history.push('/');
				reset();
			} catch (err) {
				const errors = getValidationErrors(err);
				formRef.current?.setErrors(errors);
			}
		},
		[addService, history, handleUpdate, id, idUser],
	);

	return (
		<>
			<Header />
			<Container>
				<Title>Criar Anúncio</Title>
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
