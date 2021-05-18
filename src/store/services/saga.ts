import { all, takeEvery, put } from 'redux-saga/effects';

import { getServices, deleteService } from 'services/services';

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

export default function* rootSaga() {
	yield all([
		takeEvery(types.REQUEST_SERVICES, requestServices),
		takeEvery(types.DELETE_SERVICE, handleDelete),
	]);
}
