import React, { createContext, useState, useEffect } from "react";

//import libraries
import { useHistory } from 'react-router-dom';

//import api base url
import { apiBaseUrl } from '../config';

export const AuthContext = createContext();


const AuthContextProvider = (props) => {

    const [authenticated, setAuthenticated] = useState(true);

    const history = useHistory();

    const logOut = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        setAuthenticated(false);
        history.push('/login');
    }

    useEffect(() => {

        //check if the user has token
        if(localStorage.getItem('refresh_token')) {

            const refresh_token = localStorage.getItem('refresh_token');

            //set options for http request
            const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${refresh_token}`
            }
        };

            //check if the token is valid
            fetch(`${apiBaseUrl}/api/auth/refresh`, options)
                .then(res => res.json())
                .then(results => {
                    if(!results.success === 1) {
                        console.log(results.msg)
                        setAuthenticated(false)
                    }
                    else {
                        //set new access token into local
                        localStorage.setItem('access_token', results.access_token)

                        setAuthenticated(true)
                    }
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