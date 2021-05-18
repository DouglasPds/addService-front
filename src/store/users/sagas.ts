import { all, put, takeEvery } from 'redux-saga/effects';

import { createUser } from 'services/users';

import types from './types';

function* addUser(value: any) {
	const { data } = value;
	console.log(data);
	yield createUser(data);
	yield put({
		type: types.CREATE_USER_SUCCESS,
		payload: data,
	});
}

export default function* rootSaga() {
	yield all([takeEvery(types.CREATE_USER, addUser)]);
}
