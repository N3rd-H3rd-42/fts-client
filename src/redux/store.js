import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/authReducer';
import { patientsReducer } from './reducers/patientsReducer';
import { rideRequestReducer } from './reducers/rideRequestReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// const preLoadedState = {};

const rootReducer = {
  auth: authReducer,
  patients: patientsReducer,
  rideRequest: rideRequestReducer,
};

// const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk).concat(logger),
  // preLoadedState,
});

export default store;
