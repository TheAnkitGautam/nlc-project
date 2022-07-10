const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                isFetching: false,
                error: false
            };
        case 'LOGOUT':
            return {
                user: null,
                isFetching: false,
                error: false
            };
        default:
            return state;
    }
}

export default AuthReducer;