import { createContext, useContext } from "react";


export const AuthContext = createContext(null);


export const AuthContextProvider = ({ children }) => {

    return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>

}

export const useAuth = () => useContext(AuthContext);