import React, { createContext, useState, useEffect } from "react";

//import libraries
import { useHistory } from 'react-router-dom';

//import api base url
import { apiBaseUrl } from '../config/api-base-url';

export const AuthContext = createContext();


const AuthContextProvider = (props) => {

    const [authenticated, setAuthenticated] = useState(true);

    const history = useHistory();

    const logOut = () => {
        localStorage.removeItem('user_name');
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        setAuthenticated(false);
        history.push('/');

    }

    useEffect(() => {

        //check if the user has token
        if(localStorage.getItem('token')) {

            const token = localStorage.getItem('token');

            const options = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }

            fetch(`${apiBaseUrl}/api/authentication`, options)
                .then(res => res.json())
                .then(results => {
                    setAuthenticated(results.authenticated);
                })

        } else {
            setAuthenticated(false);
        }
    }, [authenticated]);


    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated, logOut}}>
            { props.children }
        </AuthContext.Provider>
     );
}

export default AuthContextProvider;