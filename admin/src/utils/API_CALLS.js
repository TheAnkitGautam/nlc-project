import axios from 'axios';

// const API_BASE_URL = process.env.REACT_APP_API_URI
const API_BASE_URL = "http://localhost:5000"
const token = sessionStorage.getItem("token");
const auth_token = token ? `Token ${token}` : "";

export const GetAllContent = async () => {
    const res = await axios.get(API_BASE_URL + '/getcontent')
    return res;
}

export const GetUserProfiles = async () => {
    let config = {
        headers: {
            Authorization: auth_token
        }
    }
    const { data } = await axios.get(API_BASE_URL + '/admin/user-profiles', config)
    return data;
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

export const DeletePost = async (postId) => {
    let config = {
        headers: {
            Authorization: auth_token
        }
    }
    const { data } = await axios.post(API_BASE_URL + "/admin/delete-post", { postId }, config);
    return data;
}

export const AddPost = async (formval) => {
    let config = {
        headers: {
            Authorization: auth_token
        }
    }
    const { title, category, imgUrl, instaUrl } = formval;

    const { data } = await axios.post(API_BASE_URL + "/admin/add-post", { title, category, imgUrl, instaUrl }, config);
    return data;
}