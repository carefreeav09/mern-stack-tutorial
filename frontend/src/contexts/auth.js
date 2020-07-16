import React, { createContext, useState } from 'react';
import {clearLocalStorage, getLocalStorage, setLocalStorage} from "../utils/storageUtil";
import axios from "axios";
import history from "../utils/history";

import {isAuthenticated} from "../utils/jwtUtil";
import {JWT_TOKEN} from "../constants/appConfig";

export const AuthContext = createContext();

export const AuthContextProvider = props => {
    const [authenticated, setAuthenticated] = useState(isAuthenticated() || false);
    const [userId, setUserId] = useState(getLocalStorage('userId'));
    const [errorMessage, setErrorMessage] = useState(undefined);

    const login = (query) => {
        axios
            .post('http://localhost:5000/graphql', query, {
                headers: {
                    Lang: 'en',
                },
            })
            .then(response => {
                setAuthenticated(true);
                setLocalStorage(JWT_TOKEN, response.data.data.login.token);
                history.push('/')
            })
            .catch(error => {
                setErrorMessage(error.response.data);
                console.log(error);
            });
    };

    const register = (query) => {
        axios
            .post('http://localhost:5000/graphql', query, {
                headers: {
                    Lang: 'en',
                },
            })
            .then(response => {
                history.push('/login')
            })
            .catch(error => {
                setErrorMessage(error.response.data);
                console.log(error);
            });
    }

    const logout = () => {
        setAuthenticated(false);
        clearLocalStorage('reactxagram-token')
        history.push({ pathname : '/'});
    }

    return (
        <AuthContext.Provider value={
            {
                authenticated : authenticated,
                login: (query) => login(query),
                logout: () => logout(),
                register: (query) => register(query),
            }
        } >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;