import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { save, load } from 'redux-localstorage-simple';
import { LOCALSTORAGE_KEY } from '../constants';
import rootReducer from '../reducers';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const savedState = save({ namespace: LOCALSTORAGE_KEY });

const configureStore = preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(logger, savedState)),
  );

const preloadedState = load({ namespace: LOCALSTORAGE_KEY }) || {};

const store = configureStore(preloadedState);

export default store;
