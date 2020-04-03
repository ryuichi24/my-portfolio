import React, { useState, useEffect } from 'react';

//import api base url
import { apiBaseUrl } from '../../config/api-base-url';

import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const EditUserProfile = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [ successMessage, setSuccessMessage ] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // const { } = useContext(UserContext);
    const updateProfile = (newName, newEmail) => {

        const options = {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                user_name: userName,
                email,
                id: localStorage.getItem('user_id')
            })
        };

        fetch(`${apiBaseUrl}/api/user`, options)
            .then(res => res.json())
            .then(results => {
                if (!results.success) {
                    setErrorMessage(results.message);
                } else {
                    setSuccessMessage(results.message);
                    localStorage.setItem('user_name', results.user_name)
                    localStorage.setItem('email', results.email)
                }
            })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile(userName, email);
    }

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        };

        fetch(`${apiBaseUrl}/api/user/${localStorage.getItem('user_id')}`, options)
            .then(res => res.json())
            .then(results => {
                if(!results.success) {
                    console.log(results.message);
                } else {
                    setUserName(results.user.user_name);
                    setEmail(results.user.email);
                }
            });
    }, []);

    return (
        <div className="form-main">
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