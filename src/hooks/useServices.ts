import { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
	requestServices,
	deleteService,
	createService,
	updateService,
} from 'store/services/actions';
import { listServices } from 'store/services/selectors';

export const useServices = () => {
	const { data, loading, error } = useSelector(listServices);
	const dispatch = useDispatch();

	const fetchServices = useCallback(() => {
		dispatch(requestServices());
	}, [dispatch]);

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
		loading,
		error,
		fetchServices,
		handleDelete,
		addService,
		handleUpdate,
	};
};
