import { useState, useEffect, createContext, useContext } from "react";
import { LOGGEDIN } from '../components/utill/config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem(LOGGEDIN);
        setAuthenticated(loggedIn === 'true');
    }, []);

    const login = () => {
        localStorage.setItem(LOGGEDIN, 'true');
        setAuthenticated(true);
    }

    const logout = () => {
        localStorage.removeItem(LOGGEDIN);
        setAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);