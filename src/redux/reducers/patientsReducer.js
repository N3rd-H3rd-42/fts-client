import {
  FETCH_ALL_PATIENTS,
  CREATE_NEW_PATIENT,
  FETCH_PATIENT_DETAILS,
  UPDATE_PATIENT_DETAILS
} from '../actions/patientActions';

const initialState = {
  list: [],
  selectedPatient: {},
};

export const patientsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_PATIENTS:
      return {
        ...state,
        list: [...payload],
      };
    case FETCH_PATIENT_DETAILS:
    case UPDATE_PATIENT_DETAILS:
      return {
        ...state,
        selectedPatient: { ...payload },
      };
    case CREATE_NEW_PATIENT:
    default:
      return state;
  }
};
