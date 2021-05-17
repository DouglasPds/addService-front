import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { servicos } from './servicos/reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
	servicos,
});

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run();

export default store;
