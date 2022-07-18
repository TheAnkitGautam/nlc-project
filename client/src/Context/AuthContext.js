import AuthReducer from './AuthReducer';
import { createContext, useReducer } from 'react'

const INITIAL_STATE = {
    user: null,
    profile: null,
    msg: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            profile: state.profile,
            msg: state.msg,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    );
}