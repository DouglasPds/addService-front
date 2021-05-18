import React, { useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';

import Input from 'components/Input';
import { useUsers } from 'hooks/useUsers';

import { Container } from './styles';

const CreateUser: React.FC = () => {
	const { addUser } = useUsers();
	const history = useHistory();
	const formRef = useRef<FormHandles>(null);

	const handleSubmit = useCallback(
		(data: any, { reset }) => {
			addUser(data);
			history.push('/');
			reset();
		},
		[addUser, history],
	);

	return (
		<Container>
			<h1>AddService</h1>
			<Form ref={formRef} onSubmit={handleSubmit}>
				<label>Nome</label>
				<Input name="nome" />
				<label>E-mail</label>
				<Input name="e-mail" />
				<label>Senha</label>
				<Input name="senha" />
				<button type="submit">Cadastre-se</button>
			</Form>
		</Container>
	);
};

export default CreateUser;
