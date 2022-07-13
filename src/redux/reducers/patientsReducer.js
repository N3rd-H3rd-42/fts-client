import { FETCH_ALL_PATIENTS, CREATE_NEW_PATIENT } from '../actions/patientActions';

const initialState = {
    list: [],
};

export const patientsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_PATIENTS:
      return {
        ...state,
        list: [...payload],
      };
    case CREATE_NEW_PATIENT:
    default:
      return state;
  }
};
