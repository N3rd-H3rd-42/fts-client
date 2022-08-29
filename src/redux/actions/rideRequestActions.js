import axios from 'axios';

export const RIDE_REQUEST = 'RIDE_REQUEST';
export const RIDE_REQUEST_SUCCESS = 'RIDE_REQUEST_SUCCESS';
export const RIDE_REQUEST_ERROR = 'RIDE_REQUEST_ERROR';
export const FETCH_ALL_RIDES = 'FETCH_ALL_RIDES';
export const CREATE_NEW_RIDE = 'CREATE_NEW_RIDE';
export const FETCH_RIDE_DETAILS = 'FETCH_RIDE_DETAILS';
export const UPDATE_RIDE_DETAILS = 'UPDATE_RIDE_DETAILS';

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

export const getAllRides = () => async (dispatch) => {
  try {
    const response = await axios.get(`${REACT_APP_BACKEND_URL}api/ride-requests`);
    if (response.status === 200)
      dispatch({
        type: FETCH_ALL_RIDES,
        payload: response.data?.rideList,
      });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createNewRide = (body) => async (dispatch) => {
  try {
    const response = await axios.post(`${REACT_APP_BACKEND_URL}api/ride-requests`, body);
    if (response.status === 201) {
      dispatch({ type: CREATE_NEW_RIDE });
      const updatedListRes = await axios.get(`${REACT_APP_BACKEND_URL}api/ride-requests`);
      if (updatedListRes.status === 200)
        dispatch({
          type: FETCH_ALL_RIDES,
          payload: updatedListRes.data?.rideList,
        });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSingleRideDetails = (rideId) => async (dispatch) => {
  try {
    const response = await axios.get(`${REACT_APP_BACKEND_URL}api/ride-requests/${rideId}`);
    if (response.status === 200)
      dispatch({ type: FETCH_RIDE_DETAILS, payload: response.data?.data });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateRideDetails =
  (rideId, reqBody) => async (dispatch) => {
    try {
      const response = await axios.put(
        `${REACT_APP_BACKEND_URL}api/ride-requests/${rideId}`,
        { ...reqBody }
      );
      if (response.status === 200) {
        dispatch({
          type: UPDATE_RIDE_DETAILS,
          payload: response.data?.data,
        });
        const updatedListRes = await axios.get(`${REACT_APP_BACKEND_URL}api/ride-requests`);
        if (updatedListRes.status === 200)
          dispatch({
            type: FETCH_ALL_RIDES,
            payload: updatedListRes.data?.rideList,
          });
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };