import { applyMiddleware, createStore } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootSaga from '../saga';

const sagaMid = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMid, logger))
sagaMid.run(rootSaga)

export default store