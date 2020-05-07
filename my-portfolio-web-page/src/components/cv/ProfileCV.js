import React from 'react';

import { faLinkedin , faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt , faMobileAlt, faEnvelope, faFile,  faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './profile-cv.css';

import Me from '../../img/me.jpg';


const ProfileCV = () => {
    return (
        <div className="profile-cv-container">
            <div className="profile-cv-item-container">
                <div className="me profile-cv-item">
                    <img className="me-avator" src={Me} alt="avator"/>
                    <h2>Ryuichi Nishi</h2>
                    <p>Software Enginner</p>
                </div>
                <div className="profile-cv-link-container profile-cv-item">
                    <a href={'https://www.linkedin.com/in/ryuichi-nishi-901507194/'}><FontAwesomeIcon className="font-awesome-profile-cv-link" icon={faLinkedin}/></a>
                    <a href={'https://github.com/ryuichi24'}><FontAwesomeIcon className="font-awesome-profile-cv-link" icon={faGithub}/></a>
                </div>
                <div className="profile-cv-contact-info-container profile-cv-item">
                    <div className="contact-detail-wrapper">
                        <FontAwesomeIcon className="font-awesome-contact" icon={faMapMarkerAlt}/>
                        <p>Varna, Bulgaria</p>
                    </div>
                    <div className="contact-detail-wrapper">
                        <FontAwesomeIcon className="font-awesome-contact" icon={faMobileAlt}/>
                        <p>+359 885398640</p>
                    </div>
                    <div className="contact-detail-wrapper">
                        <FontAwesomeIcon className="font-awesome-contact email" icon={faEnvelope}/>
                        <p>ryuichi.nishi24@gmail.com</p>
                    </div>
                    <div className="contact-detail-wrapper">
                        <FontAwesomeIcon className="font-awesome-contact email" icon={faFile}/>
                        <button className="cv-btn link">
                            <a href="/cv/CV-Ryuichi-Nishi.pdf" download style={{textDecoration: "none"}}>
                                <span className="get-my-cv" id="getMyCv">
                                    <FontAwesomeIcon className="font-awesome-contact download" icon={faDownload}/>
                                    Get My CV
                                </span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCV;