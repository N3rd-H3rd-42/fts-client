import axios from 'axios';
// import { BACKEND_URL } from '../../constants/config';

export const FETCH_ALL_PATIENTS = 'FETCH_ALL_PATIENTS';
export const CREATE_NEW_PATIENT = 'CREATE_NEW_PATIENT';
export const FETCH_PATIENT_DETAILS = 'FETCH_PATIENT_DETAILS';
export const UPDATE_PATIENT_DETAILS = 'UPDATE_PATIENT_DETAILS';
export const TOGGLE_PATIENT_ACTIVE = 'TOGGLE_PATIENT_ACTIVE';
export const DELETE_PATIENT = 'DELETE_PATIENT';

const { REACT_APP_BACKEND_URL } = process.env;

export const getAllPatients = () => async (dispatch) => {
  try {
    const response = await axios.get(`${REACT_APP_BACKEND_URL}api/patients`);
    if (response.status === 200)
      dispatch({
        type: FETCH_ALL_PATIENTS,
        payload: response.data?.patientList,
      });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createNewPatient = (body) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${REACT_APP_BACKEND_URL}api/patient`,
      body
    );
    if (response.status === 201) {
      dispatch({ type: CREATE_NEW_PATIENT });
      const updatedListRes = await axios.get(
        `${REACT_APP_BACKEND_URL}api/patients`
      );
      if (updatedListRes.status === 200)
        dispatch({
          type: FETCH_ALL_PATIENTS,
          payload: updatedListRes.data?.patientList,
        });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSinglePatientDetails = (patientId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${REACT_APP_BACKEND_URL}api/patient/${patientId}`
    );
    if (response.status === 200)
      dispatch({ type: FETCH_PATIENT_DETAILS, payload: response.data?.data });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updatePatientDetails =
  (patientId, reqBody) => async (dispatch) => {
    try {
      const response = await axios.put(
        `${REACT_APP_BACKEND_URL}api/patient/${patientId}`,
        { ...reqBody }
      );
      if (response.status === 200) {
        dispatch({
          type: UPDATE_PATIENT_DETAILS,
          payload: response.data?.data,
        });
        const updatedListRes = await axios.get(
          `${REACT_APP_BACKEND_URL}api/patients`
        );
        if (updatedListRes.status === 200)
          dispatch({
            type: FETCH_ALL_PATIENTS,
            payload: updatedListRes.data?.patientList,
          });
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const togglePatientIsActive = (patientId) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${REACT_APP_BACKEND_URL}api/patient/toggle-active/${patientId}`
    );
    if (response.status === 200)
      dispatch({ type: TOGGLE_PATIENT_ACTIVE, payload: response.data?.data });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deletePatient = (patientId) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `${REACT_APP_BACKEND_URL}api/patient/${patientId}`
    );
    if (response.status === 200) {
      dispatch({ type: DELETE_PATIENT });
      const updatedListRes = await axios.get(
        `${REACT_APP_BACKEND_URL}api/patients`
      );
      if (updatedListRes.status === 200)
        dispatch({
          type: FETCH_ALL_PATIENTS,
          payload: updatedListRes.data?.patientList,
        });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
