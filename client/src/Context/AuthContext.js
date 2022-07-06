import { createContext, useContext } from "react";
import { getUserData } from '../utils/API_Calls'

export const AuthContext = createContext(null);

const getUser = async () => {
    const res = await getUserData();
    if (res.error) {
        return null;
    }
    else {
        return res;
    }
}

export const AuthContextProvider = ({ children }) => {
    
    const user = getUser();

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);