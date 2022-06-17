const initialState = {
    jwt: '',
    isAuthenitcated: false,
    isLoading: null,
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
}

export default authReducer;
