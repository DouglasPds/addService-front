import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { services, service } from './services/reducer';
import rootSaga from './services/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
	services,
	service,
});

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
