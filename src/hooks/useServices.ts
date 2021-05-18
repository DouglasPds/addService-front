import { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { requestServices, deleteService } from 'store/services/actions';
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

	return {
		services: data,
		loading,
		error,
		fetchServices,
		handleDelete,
	};
};
