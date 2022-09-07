import { createContext, useContext, useLayoutEffect, useMemo, useState } from "react";
import { GetUser } from "./utils/API_CALLS";


export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useLayoutEffect(() => {
        const findUser = async () => {
            const response = await GetUser();
            if (response.error) setUser(null);
            else setUser(response);
        }
        findUser();
    }, []);

    const _signInUser = (token, userData) => {
        sessionStorage.setItem("token", token);
        setUser(userData);
    }

    const _signOutUser = () => {
        sessionStorage.removeItem("token");
        setUser(null);
    }

    const memoedValue = useMemo(() => ({
        user,
        _signInUser,
        _signOutUser
    }), [user]);

    return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);