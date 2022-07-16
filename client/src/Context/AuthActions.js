export const LoginSuccess = (data) => ({
    type: 'GOT_USER',
    payload: data
})

export const FetchProfile = (data) => ({
    type: 'GOT_USER_PROFILE',
    payload: data
})

export const Logout = () => ({
    type: 'LOGOUT',
})