import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

const { REACT_APP_BACKEND_URL } = process.env;

export const loginAction = (body) => async (dispatch) => {
  try {
    const response = await axios.post(`${REACT_APP_BACKEND_URL}api/login`, body);
    if (response.status === 200)
      await dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
