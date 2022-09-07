import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URI
const token = sessionStorage.getItem("token");
const auth_token = token ? `Token ${token}` : "";

export const GetAllContent = async () => {
    const res = await axios.get(API_BASE_URL + '/getcontent')
    return res;
}

export const Login = async (username, password) => {
    const { data } = await axios.post(API_BASE_URL + '/admin/login', { username, password })
    return data;
}

export const GetUser = async () => {
    let config = {
        headers: {
            Authorization: auth_token
        }
    }
    const { data } = await axios.get(API_BASE_URL + "/admin/login/success", config)
    return data;
}