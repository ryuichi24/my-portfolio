import React, { useState, useEffect, useContext } from 'react';

//import libraries
import { useHistory } from 'react-router-dom';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import context
import { AuthContext } from '../../context/AuthContext';

//import api base url
import { apiBaseUrl } from '../../config/api-base-url';

//import stylesheet
import './user.css';


const DeleteUser = () => {
    //prepare states
    const [ value, setValue ] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //get from context
    const { setAuthenticated } = useContext(AuthContext);

    //preare history
    const history = useHistory();

    const deleteUser = () => {

        const options = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };

        fetch(`${apiBaseUrl}/api/user/${localStorage.getItem('user_id')}`, options)
            .then(res => res.json())
            .then(results => {
                    if (!results.success) {
                        setErrorMessage(results.message);
                }
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        deleteUser();

        //reset all data
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_name');
        setAuthenticated(false);

        //lead to home page
        history.push('/');
    }

    useEffect(() => {
        const deleteBtn = document.querySelector('.delete-btn');

        //enables the delete btn if the name matches
        if(value === localStorage.getItem('user_name')) {
            deleteBtn.disabled = false;
            deleteBtn.classList.add('enabled-btn');
        } else {
            deleteBtn.classList.remove('enabled-btn');
            deleteBtn.disabled = true;
        }
    }, [value]);

    return (
        <div className="form-main">
            <div className="form-wrapper">
                <h2 className="delete-account">Delete Account</h2>
                <p className="error-message">{errorMessage}</p>
                <p className="delete-confirm">Please type your user name to confirm.</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <FontAwesomeIcon className="font-awesome" icon={faUser}/>
                        <input className="input" onChange={(e) => setValue(e.target.value)} type="text" placeholder="user name"/>
                    </div>
                    <button className="delete-btn" disabled>Delete Account</button>
                </form>
            </div>
        </div>
    );
}

export default DeleteUser;