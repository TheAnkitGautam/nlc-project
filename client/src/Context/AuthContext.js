import { createContext, useContext, useEffect, useState } from 'react'
import { Get_User, Logout } from '../utils/API_Calls';

const INITIAL_STATE = null;

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const findUser = async () => {
            const response = await Get_User();
            setData(response);
        }
        findUser();
    }, [])

    const LogoutUser = async () => {
        setData(null)
        await Logout();
    }

    return (
        <AuthContext.Provider value={{ data, LogoutUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);