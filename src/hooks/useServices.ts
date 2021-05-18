import { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
	requestServices,
	requestService,
	deleteService,
	createService,
	updateService,
} from 'store/services/actions';
import { listServices, listService } from 'store/services/selectors';

interface Servico {
	titulo: string;
	descricao: string;
	tipo_servico: {
		value: string;
		label: string;
	};
	fotos?: string;
	telefone?: string;
}

export const useServices = () => {
	const { data, loading, error } = useSelector(listServices);
	const { state } = useSelector(listService);

	const dispatch = useDispatch();

	const fetchServices = useCallback(() => {
		dispatch(requestServices());
	}, [dispatch]);

	const fetchService = useCallback(
		id => {
			dispatch(requestService(id));
		},
		[dispatch],
	);

	const handleDelete = useCallback(
		id => {
			dispatch(deleteService(id));
		},
		[dispatch],
	);

	const handleUpdate = useCallback(
		(id, value) => {
			dispatch(updateService(id, value));
		},
		[dispatch],
	);

	const addService = useCallback(
		value => {
			dispatch(createService(value));
		},
		[dispatch],
	);

	return {
		services: data,
		service: state,
		loading,
		error,
		fetchServices,
		fetchService,
		handleDelete,
		addService,
		handleUpdate,
	};
};
