import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import initialState from './initial_state';
import rootReducer from '../reducers/';

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, createLogger()),
);

export default store;
