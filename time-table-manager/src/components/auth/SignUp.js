import React, { useState } from 'react'

//import libraries
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from 'react-router-dom';

//import base url for api
import { apiBaseUrl } from '../../config/api-base-url';

//import stylesheet
import './auth.css';


const SignUp = () => {

    //preparing states
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

     //prepare history
     const history = useHistory();

    //create submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(userName, email, password);
        setUserName('');
        setEmail('');
        setPassword('');
    }

     //send newUser to api interacting with database
     const addUser = (user_name, email, password) => {

        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                user_name,
                email,
                password
            })
        };

        fetch(`${apiBaseUrl}/api/user/`, options)
            .then(res => res.json())
            .then(results => {
                if (!results.success) {
                    setErrorMessage(results.msg)
                }
                else {
                    history.push('/login')
                }
            })
    }

    return (
        <div className="form-main">
            <div className="form-wrapper">
                <h2>Sign Up</h2>
                <p className="error-message">{errorMessage}</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <FontAwesomeIcon className="font-awesome" icon={faUser}/>
                        <input
                            className="input"
                            onChange={(e) => setUserName(e.target.value)}
                            type="text"
                            name="user_name"
                            placeholder="name"
                            value={userName}
                            required
                        /> {''}
                    </div>
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

export default SignUp;