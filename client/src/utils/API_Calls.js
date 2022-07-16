import axios from "axios"

export const API_Login_Request = async (dispatch) => {

    try {
        const { data } = await axios.get('/auth/login/success', { withCredentials: true })
        const _user = data;

        if (_user) {
            const { data } = await axios.post('/user/profile', { googleId: _user.googleId })
            const _profile = data
            if (_profile) {
                dispatch({ type: 'GOT_USER_PROFILE', payload: { _user, _profile } })
            } else {
                dispatch({ type: 'GOT_USER', payload: { _user } })
            }
        }
    } catch (err) {

    }

}

export const Save_User_Profile = async (profileData) => {
    try {
        const res = await axios.post('/user/profile', profileData, { withCredentials: true });
        return res;
    } catch (error) {
        return error;
    }
}