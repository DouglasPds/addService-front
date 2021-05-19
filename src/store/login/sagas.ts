import { all, put, takeEvery } from 'redux-saga/effects';

import { login } from 'services/login';

import types from './types';

function* signIn(value: any): any {
	try {
		const { data } = value;
		const token = yield login(data);
		yield put({
			type: types.SIGNIN_SUCCESS,
			payload: token,
		});
	} catch (err) {
		yield put({
			type: types.SIGNIN_FAILURE,
		});
	}
}

export default function* rootSaga() {
	yield all([takeEvery(types.SIGNIN, signIn)]);
}
