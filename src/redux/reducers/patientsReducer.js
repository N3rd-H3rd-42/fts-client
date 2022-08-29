import {
  FETCH_ALL_PATIENTS,
  CREATE_NEW_PATIENT,
  FETCH_PATIENT_DETAILS,
  UPDATE_PATIENT_DETAILS,
  TOGGLE_PATIENT_ACTIVE,
  DELETE_PATIENT,
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
    case TOGGLE_PATIENT_ACTIVE:
      return {
        ...state,
        selectedPatient: { ...payload },
      };
    case CREATE_NEW_PATIENT:
      return { ...state };
    case DELETE_PATIENT:
      return {
        ...state,
        selectedPatient: {},
      };
    default:
      return state;
  }
};
