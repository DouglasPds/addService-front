import React from 'react';

import { Form } from '@unform/web';

import Input from 'components/Input';

import { Container } from './styles';

const CreateUser: React.FC = () => {
	const handleSubmit = () => {
		console.log('alo');
	};

	return (
		<Container>
			<h1>AddService</h1>
			<Form onSubmit={handleSubmit}>
				<label>Nome</label>
				<Input name="nome" />
				<label>E-mail</label>
				<Input name="e-mail" />
				<label>Senha</label>
				<Input name="senha" />
				<button type="button">Cadastre-se</button>
			</Form>
		</Container>
	);
};

export default CreateUser;
