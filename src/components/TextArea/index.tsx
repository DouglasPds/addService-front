import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, ...rest }) => {
	const textAreaRef = useRef(null);
	const { fieldName, registerField, error } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: textAreaRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	return (
		<>
			<Container>
				<textarea rows={3} ref={textAreaRef} {...rest} />
				<span>{error}</span>
			</Container>
		</>
	);
};

export default TextArea;
