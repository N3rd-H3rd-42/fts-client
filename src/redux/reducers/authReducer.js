import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from '../actions/authActions';

const initialState = {
  token: '',
  isAuthenticated: false,
  isLoading: null,
  user: {
    id: '',
    username: '',
  },
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
      return { ...state };
    case LOGOUT:
      return { ...state };
    default:
      return state;
  };
}
export default authReducer;
