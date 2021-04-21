import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';

import { useField } from '@unform/core';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name }) => {
	const textAreaRef = useRef(null);
	const { fieldName, registerField } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: textAreaRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	return <textarea rows={3} ref={textAreaRef} />;
};

export default TextArea;
