import React, { InputHTMLAttributes, useRef, useEffect } from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { fieldName, registerField, error } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	return (
		<>
			<Container>
				<input ref={inputRef} {...rest} />
				<span>{error}</span>
			</Container>
		</>
	);
};

export default Input;
