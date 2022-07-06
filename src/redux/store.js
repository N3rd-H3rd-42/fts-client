import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/authReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// const preLoadedState = {};

const rootReducer = {
  auth: authReducer,
};

// const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk).concat(logger),
  // preLoadedState,
});

export default store;
