import { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Servico } from 'interfaces/services.interface';
import {
	requestServices,
	requestService,
	requestMyServices,
	deleteService,
	createService,
	updateService,
} from 'store/services/actions';
import {
	listServices,
	listService,
	myServices,
} from 'store/services/selectors';

interface UseServicesProps {
	services: Servico[];
	service: Servico;
	myService: Servico[];
	loading: boolean;
	error: boolean;
	fetchServices(): void;
	fetchService(id: string): void;
	fetchMyServices(id: string): void;
	handleDelete(id: string): void;
	addService(value: Servico): void;
	handleUpdate(id: string, value: Servico): void;
}

export const useServices = (): UseServicesProps => {
	const { data, loading, error } = useSelector(listServices);
	const { state } = useSelector(listService);
	const { props } = useSelector(myServices);

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

	const fetchMyServices = useCallback(
		id => {
			dispatch(requestMyServices(id));
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
		myService: props,
		loading,
		error,
		fetchServices,
		fetchService,
		fetchMyServices,
		handleDelete,
		addService,
		handleUpdate,
	};
};
