import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger'
import reducer from '../reducers/reducer';

// redux saga
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas/saga";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


const logger = createLogger();

const store = createStore(
  reducer,
  // applyMiddleware(logger)
  compose(applyMiddleware(sagaMiddleware, logger))
);

// run the saga
sagaMiddleware.run(watcherSaga);

export default store;

