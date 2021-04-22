import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import ReactSelect, { OptionTypeBase, Props } from 'react-select';

interface SelectProps extends Props<OptionTypeBase> {
	name: string;
}

const Select: React.FC<SelectProps> = ({ name, ...rest }) => {
	const selectRef = useRef(null);
	const { fieldName, registerField } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: selectRef.current,
			path: 'state.value',
		});
	}, [fieldName, registerField, rest.isMulti]);

	return <ReactSelect ref={selectRef} {...rest} />;
};

export default Select;
