import React from 'react';
import { Link } from 'react-router-dom';

import { faSignInAlt, faPlus, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './home.css';

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="home-content-wrapper">
                <h2>Save your Youtube Links</h2>
                <div className="useage-container">
                    <div className="useage">
                        <FontAwesomeIcon className="font-awesome-useage" icon={faSignInAlt}/>
                        <p className="useage-content">Create your account</p>
                    </div>
                    <div className="useage">
                        <FontAwesomeIcon className="font-awesome-useage" icon={faPlus}/>
                        <p className="useage-content">Add Youtube video links</p>
                    </div>
                    <div className="useage">
                        <FontAwesomeIcon className="font-awesome-useage" icon={faList}/>
                        <p className="useage-content">The list gets created</p>
                    </div>
                </div>

                <div className="signup-login-container">
                    <Link to="/sign-up" className="link home-signup-login-btn">Sign Up</Link>
                    <Link to="/Login" className="link home-signup-login-btn">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;