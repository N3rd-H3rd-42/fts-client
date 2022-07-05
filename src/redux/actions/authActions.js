import axios from "axios";
import { BACKEND_URL } from "../../constants/config";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginAction = (body) => async (dispatch) => {
    try {
        const response = await axios.post(`${BACKEND_URL}api/login`, body);
        if (response.status === 200) dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
        console.log(error);
        throw error;
    }
}
