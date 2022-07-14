import axios from "axios";
import { BACKEND_URL } from '../../constants/config';

export const FETCH_ALL_PATIENTS = 'FETCH_ALL_PATIENTS';

export const getAllPatients = () => async (dispatch) => {
    try {
        const response = await axios.get(`${BACKEND_URL}api/patients`);
        if (response.status === 200) dispatch({ type: FETCH_ALL_PATIENTS, payload: response.data.patientList });
    } catch (error) {
        console.log(error);
        throw error;
    }
}