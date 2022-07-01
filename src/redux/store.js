import { applyMiddleware, compose, createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// need to figure out how to above module to accomandate deprecated `createStore` method
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from './reducers';

const thunk = thunkMiddleware;

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(compose(applyMiddleware(thunk, createLogger())))
);

export default store;
