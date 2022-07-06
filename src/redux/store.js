import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/authReducer';
import thunk from 'redux-thunk';

const preLoadedState = {};

const reducer = {
  auth: authReducer,
};

const middleware = [thunk];

const store = configureStore({
  reducer,
  preLoadedState,
  middleware
});

export default store;
