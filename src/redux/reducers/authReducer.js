const initialState = {
    jwt: '',
    isAuthenitcated: false,
    isLoading: null,
    authUsername: '',
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
}

export default authReducer;
