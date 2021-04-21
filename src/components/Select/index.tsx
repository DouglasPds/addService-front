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
			getValue: (ref: any) => {
				if (rest.isMulti) {
					if (!ref.state.value) {
						return [];
					}
					return ref.state.value.map((option: OptionTypeBase) => option.value);
				}
				if (!ref.state.value) {
					return '';
				}
				return ref.state.value.value;
			},
		});
	}, [fieldName, registerField, rest.isMulti]);

	return <ReactSelect ref={selectRef} {...rest} />;
};

export default Select;
