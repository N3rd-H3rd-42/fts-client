const initialState = {};

export const patientsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'TEST_PATIENTS':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
