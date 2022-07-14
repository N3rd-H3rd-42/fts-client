import axios from 'axios';
import { BACKEND_URL } from '../../constants/config';

export const FETCH_ALL_PATIENTS = 'FETCH_ALL_PATIENTS';
export const CREATE_NEW_PATIENT = 'CREATE_NEW_PATIENT';
export const FETCH_PATIENT_DETAILS = 'FETCH_PATIENT_DETAILS';

// const { REACT_APP_BACKEND_URL } = process.env;

export const getAllPatients = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BACKEND_URL}api/patients`);
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
        const response = await axios.post(`${BACKEND_URL}api/patient`, body);
        if (response.status === 201) {
            dispatch({ type: CREATE_NEW_PATIENT });
            const updatedListRes = await axios.get(`${BACKEND_URL}api/patients`);
            if (updatedListRes.status === 200) dispatch({
                type: FETCH_ALL_PATIENTS,
                payload: updatedListRes.data?.patientList,
              });
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getSinglePatientDetails = (patientId) => async (dispatch) => {
    try {
        const response = await axios.get(`${BACKEND_URL}api/patient/${patientId}`)
        if (response.status === 200) dispatch({ type: FETCH_PATIENT_DETAILS, payload: response.data?.data })
    } catch (error) {
        console.log(error);
        throw error;
    }
}