import axios from "axios"

export const API_Login_Request = async (dispatch) => {

    try {
        const { data } = await axios.get('/auth/login/success', { withCredentials: true })
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
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