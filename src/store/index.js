import { createStore, applyMiddleware, compose } from 'redux';
import { save, load } from 'redux-localstorage-simple';
import { CONFIG } from '../constants';
import rootReducer from '../reducers';
import middleware from './middleware';

const { LOCALSTORAGE_KEY } = CONFIG;

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const savedState = save({ namespace: LOCALSTORAGE_KEY });

const configureStore = (preloadedState = {}) =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware, savedState)),
  );

const preloadedState = load({ namespace: LOCALSTORAGE_KEY });

const store = configureStore(preloadedState);

export default store;
