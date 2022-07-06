import axios from "axios";
import { BACKEND_URL } from "../../constants/config";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginAction = (body) => async (dispatch) => {
    const response = await axios.post(`${BACKEND_URL}api/login`, body);

    if (response) {
        try {

            if (response.status === 200) await dispatch({ type: LOGIN_SUCCESS, payload: response.data });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
