import { applyMiddleware, createStore } from 'redux'; // cria o estado global
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from '../sagas/root-sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

export default store