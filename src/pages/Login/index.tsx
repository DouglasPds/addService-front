import React, { useCallback, useEffect, useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import Input from 'components/Input';
import { useAuth } from 'hooks/useAuth';
import getValidationErrors from 'utils/getValidationErrors';

import { Container } from './styles';

const CreateUser: React.FC = () => {
	const { signIn, success } = useAuth();
	const history = useHistory();
	const formRef = useRef<FormHandles>(null);

	useEffect(() => {
		if (success) {
			history.push('/');
		}
	}, [history, success]);

	const handleSubmit = useCallback(
		async (data: any) => {
			try {
				formRef.current?.setErrors({});

				const schema = Yup.object().shape({
					email: Yup.string()
						.required('E-mail obrigatório')
						.email('Digite um e-mail válido'),
					password: Yup.string().required('Senha obrigatória'),
				});

				await schema.validate(data, {
					abortEarly: false,
				});

				signIn(data);
			} catch (err) {
				const errors = getValidationErrors(err);
				formRef.current?.setErrors(errors);
			}
		},
		[signIn],
	);

	return (
		<Container>
			<Link to="/">
				<h1>AddService</h1>
			</Link>
			<Form ref={formRef} onSubmit={handleSubmit}>
				<label>E-mail</label>
				<Input type="email" name="email" />
				<label>Senha</label>
				<Input type="password" name="password" />
				<button type="submit">Entrar</button>
			</Form>
			<div>
				<p>Não tem uma conta?</p>
				<Link to="/cadastro">Cadastre-se</Link>
			</div>
		</Container>
	);
};

export default CreateUser;
