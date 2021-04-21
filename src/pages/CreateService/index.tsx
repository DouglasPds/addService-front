import React, { useCallback, useRef, useEffect, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory, useParams } from 'react-router-dom';

import Dropzone from '../../components/Dropzone';
import Input from '../../components/Input';
import ReactSelect from '../../components/Select';
import TextArea from '../../components/TextArea';
import tipoServico from '../../enum/tipoServico';
import api from '../../services/api';
import { Container } from './styles';

interface Servico {
	titulo: string;
	descricao: string;
	tipo_servico: string;
	fotos: File[];
	telefone: string;
}

interface Id {
	id: string;
}

const CreateService: React.FC = () => {
	const history = useHistory();
	const { id } = useParams<Id>();
	const [servico, setServico] = useState<Servico>();
	const formRef = useRef<FormHandles>(null);

	useEffect(() => {
		async function loadServico(): Promise<void> {
			if (id) {
				const response = await api.get(`/servicos/${id}`);
				const servicoa = response.data;
				setServico(servicoa);
				console.log(response.data);
			}
		}
		loadServico();
		console.log(id);
	}, [id]);

	useEffect(() => {
		formRef.current?.setData({
			titulo: servico?.titulo,
			descricao: servico?.descricao,
			// tipo_servico: servico?.tipo_servico,
			// fotos: servico?.fotos[0].name,
			telefone: servico?.telefone,
		});
		formRef.current?.setFieldValue('tipo_servico', servico?.tipo_servico);
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
				console.log('pós post');
				// console.log(response.data);

				reset();
			} catch (err) {
				console.log(err, 'Erro ao salvar');
			}
		},
		[history],
	);

	return (
		<>
			<Container>
				<h1>Criar Serviço</h1>
				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input name="titulo" />
					<TextArea name="descricao" />
					<ReactSelect name="tipo_servico" options={tipoServico} isClearable />
					<Input name="telefone" />
					{/* <Dropzone name="fotos" /> */}
					<button type="submit">Adicionar</button>
				</Form>
				<Link to="/">
					<button type="button">Voltar</button>
				</Link>
			</Container>
		</>
	);
};

export default CreateService;
