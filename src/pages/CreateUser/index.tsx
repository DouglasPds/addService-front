import React, { useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import Input from 'components/Input';
import { useUsers } from 'hooks/useUsers';
import getValidationErrors from 'utils/getValidationErrors';

import { Container } from './styles';

const CreateUser: React.FC = () => {
	const { addUser } = useUsers();
	const history = useHistory();
	const formRef = useRef<FormHandles>(null);

	const handleSubmit = useCallback(
		async (data: any, { reset }) => {
			try {
				formRef.current?.setErrors({});

				const schema = Yup.object().shape({
					nome: Yup.string().required('Nome obrigatório'),
					email: Yup.string()
						.required('E-mail obrigatório')
						.email('Digite um e-mail válido'),
					password: Yup.string().required('Senha obrigatória'),
				});

				await schema.validate(data, {
					abortEarly: false,
				});

				addUser(data);
				history.push('/');
				reset();
			} catch (err) {
				const errors = getValidationErrors(err);
				formRef.current?.setErrors(errors);
			}
		},
		[addUser, history],
	);

	return (
		<Container>
			<Link to="/">
				<h1>AddService</h1>
			</Link>
			<Form ref={formRef} onSubmit={handleSubmit}>
				<label>Nome</label>
				<Input name="nome" />
				<label>E-mail</label>
				<Input type="email" name="email" />
				<label>Senha</label>
				<Input type="password" name="password" />
				<button type="submit">Cadastre-se</button>
			</Form>
			<div>
				<p>Já tem uma conta?</p>
				<Link to="/login">Entrar</Link>
			</div>
		</Container>
	);
};

export default CreateUser;
