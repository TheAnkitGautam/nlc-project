const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'GOT_USER':
            return {
                user: action.payload._user,
                profile: null,
                msg: action.payload.msg
            };
        case 'GOT_USER_PROFILE':
            return {
                user: action.payload._user,
                profile: action.payload._profile,
                msg: action.payload.msg
            };
        case 'LOGOUT':
            return {
                user: null,
                profile: null,
                msg: null
            };
        default:
            return state;
    }
}

export default AuthReducer;