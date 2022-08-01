import axios from 'axios';

export const RIDE_REQUEST = 'RIDE_REQUEST';
export const RIDE_REQUEST_SUCCESS = 'RIDE_REQUEST_SUCCESS';
export const RIDE_REQUEST_ERROR = 'RIDE_REQUEST_ERROR';

const { REACT_APP_BACKEND_URL } = process.env;

export const rideRequest = (body) => async (dispatch) => {
    dispatch({ type: RIDE_REQUEST });
  try {
    const response = await axios.post(
      `${REACT_APP_BACKEND_URL}api/request-a-ride`,
      { ...body }
    );
    if (response.status === 200) dispatch({ type: RIDE_REQUEST_SUCCESS });
    console.log(response);
  } catch (error) {
    dispatch({ type: RIDE_REQUEST_ERROR });
    console.log(error);
    throw error;
  }
};
