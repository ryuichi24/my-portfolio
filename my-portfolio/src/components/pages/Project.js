import React from 'react';

import './project.css';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Project = () => {
    return (
        <div className="project-container">
            <div className="project-main">
                <h1>My Projects</h1>

                <div className="project-item-container">
                    <div className="project-item">
                        <div className="project-item-image project-one">
                             <h2 className="project-name">Time Table Manager</h2>
                        </div>
                        <div className="project-item-detail">
                            <p>Time table sharing app built with React/Interact with Api to manage data and authentication</p>
                            <div className="project-link-container">
                                <a className="link project-link" href={'https://github.com/ryuichi24/time-table-manager'}><FontAwesomeIcon className="font-awesome" icon={faGithub}/>Github</a>
                                <span>|</span>
                                <a className="link project-link" href={process.env.REACT_APP_PROJECT_URL_ONE}><FontAwesomeIcon className="font-awesome" icon={faLink}/>App</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-item-image project-two">
                            <h2 className="project-name">Api For Time Table Manager</h2>
                        </div>
                        <div className="project-item-detail">
                            <p>Api intereacting with MySQL database/JWT authentication</p>
                            <div className="project-link-container">
                                <a className="link project-link" href={'https://github.com/ryuichi24/api-time-table-manager'}><FontAwesomeIcon className="font-awesome" icon={faGithub}/>Github</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-item-image project-three">
                             <h2 className="project-name">Youtube Link Managerr</h2>
                        </div>
                        <div className="project-item-detail">
                            <p>still in process</p>
                            <div className="project-link-container">
                                <a className="link project-link" href={'https://github.com/ryuichi24/video-link-manager'}><FontAwesomeIcon className="font-awesome" icon={faGithub}/>Github</a>
                                <span>|</span>
                                <a className="link project-link" href={process.env.REACT_APP_PROJECT_URL_TWO}><FontAwesomeIcon className="font-awesome" icon={faLink}/>App</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-item-image project-four">
                            <h2 className="project-name">Api For Youtube Link Manager</h2>
                        </div>
                        <div className="project-item-detail">
                            <p>still in process</p>
                            <div className="project-link-container">
                                <a className="link project-link" href={'https://github.com/ryuichi24/api-video-link-manager'}><FontAwesomeIcon className="font-awesome" icon={faGithub}/>Github</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-item-image project-five">
                            <h2 className="project-name">Student Module Manager</h2>
                        </div>
                        <div className="project-item-detail">
                            <p>Console app built with .NET Core managing students and thier modules data/EntityFrameWork/MS SQL Server</p>
                            <div className="project-link-container">
                                <a className="link project-link" href={'https://github.com/ryuichi24/student-module-management-system'}><FontAwesomeIcon className="font-awesome" icon={faGithub}/>Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;