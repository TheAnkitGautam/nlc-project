const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'GOT_USER':
            return {
                user: action.payload._user,
                profile: null
            };
        case 'GOT_USER_PROFILE':
            return {
                user: action.payload._user,
                profile: action.payload._profile
            };
        case 'LOGOUT':
            return {
                user: null,
                profile: null,
            };
        default:
            return state;
    }
}

export default AuthReducer;