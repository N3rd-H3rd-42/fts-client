import { RIDE_REQUEST, RIDE_REQUEST_SUCCESS, RIDE_REQUEST_ERROR } from "../actions/rideRequestActions";

const initialState = {
    status: null,
}

export const rideRequestReducer = (state = initialState, { type }) => {
    switch (type) {
        case RIDE_REQUEST:
            return { ...state, status: null };
        case RIDE_REQUEST_SUCCESS:
            return { ...state, status: true };
        case RIDE_REQUEST_ERROR:
            return { ...state, status: false };
        default:
            return { ...state };
    }
}