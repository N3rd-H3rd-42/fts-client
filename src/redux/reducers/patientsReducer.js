import { FETCH_ALL_PATIENTS } from '../actions/patientActions';

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
    default:
      return state;
  }
};
