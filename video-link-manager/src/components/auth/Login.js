import React, { useState, useContext } from 'react'

//import libraries
import { useHistory } from 'react-router-dom';
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jwt_decode from 'jwt-decode';


//import context
import { AuthContext } from '../../context/AuthContext';
import { VideoLinkContext } from '../../context/VideoLinkContext';

//import api base url
import { apiBaseUrl } from '../../config';


const Login = () => {

    //preparing states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //TODO: add error message
    const [errorMessage, setErrorMessage] = useState('');

    //preare history
    const history = useHistory();

    //get things from context
    const { setAuthenticated } = useContext(AuthContext);
    const { isVideoLinkLoaded, setIsVideoLinkLoaded } = useContext(VideoLinkContext);


     //create submit handler
     const handleSubmit = async (e) => {
        e.preventDefault();
        loginUser()
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

        fetch(`${apiBaseUrl}/api/auth/login`, options)
            .then(res => res.json())
            .then(results => {
                if(!results.success) {
                    setErrorMessage(results.msg);
                }
                else {
                    const { access_token, refresh_token } = results;
                    //set tokens into local
                    localStorage.setItem('access_token', access_token);
                    localStorage.setItem('refresh_token', refresh_token);

                    //decode token to extract identity
                    const decoded = jwt_decode(access_token)
                    const identity = decoded.identity

                    //set identity info into local
                    localStorage.setItem('userId', identity.id)
                    localStorage.setItem('username', identity.username)
                    localStorage.setItem('email', identity.email)
                    setAuthenticated(true);
                    setIsVideoLinkLoaded(!isVideoLinkLoaded);
                    history.push('/videos');
                    }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="form-main">
            <div className="form-wrapper">
                <h2>Login</h2>
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