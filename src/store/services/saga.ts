import { all, takeEvery, put, takeLatest } from 'redux-saga/effects';

import { getServices, deleteService, createService } from 'services/services';

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

export default function* rootSaga() {
	yield all([
		takeEvery(types.REQUEST_SERVICES, requestServices),
		takeEvery(types.DELETE_SERVICE, handleDelete),
		takeEvery(types.CREATE_SERVICE, addService),
	]);
}
