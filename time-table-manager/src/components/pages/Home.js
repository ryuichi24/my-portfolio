import React from 'react';

//import libraries
import { Link } from 'react-router-dom';

//import stylesheet
import './home.css';

// get fontawesome imports
import { faUserPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Home = () => {
    return (
        <div className="home-page-wrapper">
            <h2>Share your time table</h2>
            <div className="home-page-content">
                <div className="link-card-container">
                    <div className="link-card">
                        <Link className="link" to="/sign-up">
                            <div className="sign-up-icon"><FontAwesomeIcon icon={faUserPlus} /></div>
                            <div className="sign-up"><h3>Sign Up</h3></div>
                        </Link>
                    </div>
                    <div className="link-card">
                        <Link className="link" to="/login">
                            <div className="log-in-icon"><FontAwesomeIcon icon={faSignInAlt} /></div>
                            <div className="log-in"><h3>Log In</h3></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Home;