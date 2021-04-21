import React, { useEffect, useRef, useState } from 'react';

import { useField } from '@unform/core';
import { useDropzone } from 'react-dropzone';

import { Container } from './styles';

interface DropzoneProps {
	name: string;
}

interface InputRefProps extends HTMLInputElement {
	acceptedFiles: File[];
}

const Dropzone: React.FC<DropzoneProps> = ({ name }) => {
	const inputRef = useRef<InputRefProps>(null);
	const { fieldName, registerField, defaultValue = [] } = useField(name);

	const [acceptedFiles, setAcceptedFiles] = useState<File[]>(defaultValue);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: 'image/*',
		onDrop: onDropAcceptedFiles => {
			if (inputRef.current) {
				inputRef.current.acceptedFiles = onDropAcceptedFiles;
				setAcceptedFiles(onDropAcceptedFiles);
			}
		},
	});

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef?.current,
			getValue: (ref: InputRefProps) => {
				return ref.acceptedFiles || [];
			},
			clearValue: (ref: InputRefProps) => {
				ref.acceptedFiles = [];
				setAcceptedFiles([]);
			},
			setValue: (ref: InputRefProps, value) => {
				ref.acceptedFiles = value;
				setAcceptedFiles(value);
			},
		});
	}, [fieldName, registerField]);

	return (
		<Container>
			<div {...getRootProps()} onClick={() => inputRef.current?.click()}>
				<input {...getInputProps()} accept="image/*" ref={inputRef} />

				{acceptedFiles.length !== 0 && (
					<ul>
						{acceptedFiles.map(file => (
							<li key={file.name}>{file.name}</li>
						))}
					</ul>
				)}

				{isDragActive ? (
					<p>Soltar o arquivo aqui ...</p>
				) : (
					<p>
						Arraste e solte alguns arquivos aqui ou clique para selecionar
						arquivos
					</p>
				)}
			</div>
		</Container>
	);
};

export default Dropzone;
