import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from '../actions/authActions';

const initialState = {
  token: '',
  isAuthenitcated: false,
  isLoading: null,
  user: {
    id: '',
    username: '',
  },
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_FAILURE:
      return { ...state };
    case LOGIN_SUCCESS:
      return { 
        ...state,
        isAuthenitcated: true,

    };
    case LOGOUT:
      return { ...state };
    default:
      return state;
  }
};

export default authReducer;
