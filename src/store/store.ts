import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { services, service } from './services/reducer';
import rootSagaServices from './services/sagas';
import rootSagaUsers from './users/sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
	services,
	service,
});

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagaUsers);
sagaMiddleware.run(rootSagaServices);

export default store;
