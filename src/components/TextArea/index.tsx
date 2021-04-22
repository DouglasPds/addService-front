import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { Textarea } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, ...rest }) => {
	const textAreaRef = useRef(null);
	const { fieldName, registerField } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: textAreaRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	return <Textarea rows={3} ref={textAreaRef} {...rest} />;
};

export default TextArea;
