import axios from 'axios'

export const getUserData = async () => {
    try {
        const { data } = await axios.get('/auth/login/success', { withCredentials: true });
        return data;
    } catch (err) {
        return err;
    }
}