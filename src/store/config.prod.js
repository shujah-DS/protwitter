import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// import rootReducer from '../modules/root-reducer';
// import rootSaga from '../modules/root-saga';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const history = createHistory();
  const store = createStore(
    // rootReducer,
    // initialState,
    applyMiddleware(sagaMiddleware, routerMiddleware(history)),
  );
  // sagaMiddleware.run(rootSaga);
  store.history = history;
  return store;
}
