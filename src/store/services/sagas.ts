import { all, takeEvery, put } from 'redux-saga/effects';

import {
	getServices,
	getService,
	getMyServices,
	deleteService,
	createService,
	updateService,
} from 'services/services';

import types from './types';

function* requestServices(): any {
	try {
		const services = yield getServices();
		yield put({
			type: types.REQUEST_SUCCESS_SERVICES,
			payload: services,
		});
	} catch (err) {
		yield put({ type: types.REQUEST_FAILURE_SERVICES });
	}
}

function* requestService(value: any): any {
	const { id } = value;
	const service = yield getService(id);
	yield put({
		type: types.REQUEST_SERVICE_SUCCESS,
		payload: service,
	});
}

function* requestMyServices(value: any): any {
	const { id } = value;
	const myServices = yield getMyServices(id);
	yield put({
		type: types.REQUEST_MY_SERVICES_SUCCESS,
		payload: myServices,
	});
}

function* handleDelete(value: any) {
	const { id } = value;
	yield deleteService(id);
	yield put({
		type: types.DELETE_SERVICE,
		payload: id,
	});
}

function* addService(value: any) {
	const { data } = value;
	yield createService(data);
	yield put({
		type: types.CREATE_SERVICE_SUCCESS,
		payload: data,
	});
}

function* handleUpdate(value: any) {
	const { id, data } = value;
	yield updateService(id, data);
	yield put({
		type: types.UPDATE_SERVICE_SUCCESS,
		payload: {
			id,
			data,
		},
	});
}

export default function* rootSaga() {
	yield all([
		takeEvery(types.REQUEST_SERVICES, requestServices),
		takeEvery(types.REQUEST_SERVICE, requestService),
		takeEvery(types.REQUEST_MY_SERVICES, requestMyServices),
		takeEvery(types.DELETE_SERVICE, handleDelete),
		takeEvery(types.CREATE_SERVICE, addService),
		takeEvery(types.UPDATE_SERVICE, handleUpdate),
	]);
}
