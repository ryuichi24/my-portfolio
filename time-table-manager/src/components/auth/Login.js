import React, { useState, useContext } from 'react'

//import libraries
import { useHistory } from 'react-router-dom';
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import context
import { AuthContext } from '../../context/AuthContext';

//import api base url
import { apiBaseUrl } from '../../config/api-base-url';


const Login = () => {

    //preparing states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    //preare history
    const history = useHistory();

    //get things from context
    const { setAuthenticated } = useContext(AuthContext);


     //create submit handler
     const handleSubmit = async (e) => {
        e.preventDefault();

        loginUser();

        //refresh states
        setEmail('');
        setPassword('');
    }


    const loginUser = () => {

         //set options for http request
         const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                email,
                password
            })
        };

        fetch(`${apiBaseUrl}/api/authentication/login/`, options)
            .then(res => res.json())
            .then(results => {

                console.log()

            if (results.success) {
                localStorage.setItem('token', results.token);
                localStorage.setItem('user_id', results.id);
                localStorage.setItem('user_name', results.user_name);
                setAuthenticated(results.authenticated);
                history.push('/time-table');
            } else {
                setErrorMessage(results.message);
            }
        });
    }

    return (
        <div className="form-main">
            <div className="form-wrapper">
                <h2>Log In</h2>
                <p className="error-message">{errorMessage}</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <FontAwesomeIcon className="font-awesome" icon={faEnvelope}/>
                        <input
                            className="input"
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            name="email"
                            placeholder="email"
                            value={email}
                            required
                        /> {''}
                    </div>
                    <div className="input-wrapper">
                        <FontAwesomeIcon className="font-awesome" icon={faKey}/>
                        <input
                            className="input"
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            required
                        /> {''}
                    </div>
                        <button className="btn" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Login;