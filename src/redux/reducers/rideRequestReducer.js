import {
    RIDE_REQUEST, RIDE_REQUEST_SUCCESS, RIDE_REQUEST_ERROR, FETCH_ALL_RIDES,
    CREATE_NEW_RIDE,
    FETCH_RIDE_DETAILS,
    UPDATE_RIDE_DETAILS
} from "../actions/rideRequestActions";

const initialState = {
    list: [],
    selectedRide: {},
}

export const rideRequestReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case RIDE_REQUEST:
            return { ...state, status: null };
        case RIDE_REQUEST_SUCCESS:
            return { ...state, status: true };
        case RIDE_REQUEST_ERROR:
            return { ...state, status: false };
        case FETCH_ALL_RIDES:
            return {
                ...state,
                list: [...payload],
            };
        case FETCH_RIDE_DETAILS:
        case UPDATE_RIDE_DETAILS:
            return {
                ...state,
                selectedRide: { ...payload },
            };
        case CREATE_NEW_RIDE:
            return { ...state };
        default:
            return { ...state };
    }
}