import { all, takeEvery, put } from 'redux-saga/effects';

import { getServices } from 'services/services';

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

export default function* rootSaga() {
	yield all([takeEvery(types.REQUEST_SERVICES, requestServices)]);
}
