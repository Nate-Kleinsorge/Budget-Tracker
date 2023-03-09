import jwtDecode from 'jwt-decode';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from './mutations';
import { ADD_USER } from './mutations';
import { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);
const setStoredJwtToken = (token) => sessionStorage.setItem('jwt' , token);
const getStoredJwtToken = () => sessionStorage.getItem("jwt");
const removeStoredJwtToken = () => sessionStorage.removeItem("jwt")
const getTokenUser = (token) => {
    const {data} = jwtDecode(token);
    return data;
}
const AuthProvider = (props) => {
    const navigate = useNavigate();
    const [login] = useMutation(LOGIN)
    const [addUser] = useMutation(ADD_USER)
    const [error , setError] = useState()
    const [token , setToken] = useState();
    const user = token ? getTokenUser(token) : null;
    useEffect(() => {
        setToken(getStoredJwtToken());
    }, []);
    const handleLogin = async ({ email, password }) => {
        try {
        const {data} = await login({
            variables: {
                email,
                password,
            },
        });
const token = data.login.token;
setToken(token);
setStoredJwtToken(token);
navigate("/");
    } catch ({ message = "Unexpected error occured."}) {
        setError(message)
    }
    }
    const handleLogout = () => {
        setToken();
        removeStoredJwtToken();
    };
    useEffect(() => {
        setToken(getStoredJwtToken());
    }, []);
    const handleSignUp = async ({ firstName, lastName, email, password }) => {
        try {
        const {data} = await addUser({
            variables: {
                firstName,
                lastName,
                email,
                password,
            },
        });
const token = data.addUser.token;
setToken(token);
setStoredJwtToken(token);
navigate("/");
    } catch ({ message = "Unexpected error occured."}) {
        setError(message)
    }
    }
    return <AuthContext.Provider value={{user , handleSignUp , handleLogin, handleLogout, error}} {...props} />;
};
export {AuthProvider , useAuth};