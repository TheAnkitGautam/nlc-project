import axios from "axios"

// const API_BASE_URL = process.env.REACT_APP_API_URI
const API_BASE_URL = "http://localhost:5000"

export const Start_Login = () => {
    alert(API_BASE_URL + '/auth/google');
    
    window.open(API_BASE_URL + '/auth/google', '_self');

}

export const Get_User = async () => {
    try {
        const { data } = await axios.get(API_BASE_URL + '/auth/login/success', { withCredentials: true })
        return data;
    } catch (err) {
        console.log(err);
    }

}

export const Create_User_Profile = async (profileData) => {
    try {
        const { data } = await axios.post(API_BASE_URL + '/auth/create-profile', profileData, { withCredentials: true });
        return data;
    } catch (error) {
        return error;
    }
}

export const Logout = async () => {
    await axios.get(API_BASE_URL + '/auth/logout', { withCredentials: true })
}

export const RegisterForEvent = async (newData) => {
    const { data } = await axios.post(API_BASE_URL + '/user/register', newData, { withCredentials: true })
    return data;
}

// Public Routes
export const GetContent = async () => {
    const { data } = await axios.get(API_BASE_URL + '/getcontent')
    return data;
}

export const GetRules = async (eventName) => {
    const { data } = await axios.post(API_BASE_URL + '/getrules', { eventName });
    return data;
}

export const Subscribe = async (email) => {
    return await axios.post(API_BASE_URL + '/subscribe', { "email": email }, { withCredentials: true });
}