import React, { useState, useEffect } from 'react';

//import api base url
import { apiBaseUrl } from '../../config';

import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './edit-account.css';



const EditUserProfile = () => {

    const [ userName, setUserName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ successMessage, setSuccessMessage ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');

    // const { } = useContext(UserContext);
    const editAccount = () => {
        //prepare options
        const access_token = localStorage.getItem('access_token')

        const options = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': `Bearer ${access_token}`
            },
            body: JSON.stringify({
                username: userName,
                email,
            })
        }

        fetch(`${apiBaseUrl}/api/user/`, options)
            .then(res => res.json())
            .then(results => {
                if (!results.success) {
                    setErrorMessage(results.msg)
                }
                else {
                    setSuccessMessage(results.msg);
                    localStorage.setItem('username', results.user.username);
                }
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editAccount();
    }

    useEffect(() => {
         //prepare options
         const access_token = localStorage.getItem('access_token')

         const options = {
             method: 'GET',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json;charset=UTF-8',
                 'Authorization': `Bearer ${access_token}`
             }
         }

         fetch(`${apiBaseUrl}/api/user/`, options)
            .then(res => res.json())
            .then(results => {
                if (!results.success) {
                    console.log(results)
                }
                else {
                    setUserName(results.user.username);
                    setEmail(results.user.email);
                }
            })
    }, []);

    return (
        <div className="account-setting">
            <div className="form-wrapper">
                <h2>Edit Profile</h2>
                <p className="success-message">{successMessage}</p>
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
                    <button className="btn" type="submit">Update</button>
                </form>
            </div>
        </div>
    );
}

export default EditUserProfile;