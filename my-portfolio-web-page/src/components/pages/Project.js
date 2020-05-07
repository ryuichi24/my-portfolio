import React, { useEffect } from 'react';

import './project.css';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Project = (props) => {
    useEffect(() => {
        document.title = `Projects`;
        window.gtagPageview(props.location.pathname);

        // change description and rich result for SEO
        //do things...
      }, [props.location.pathname]);

      useEffect(() => {
        window.scrollTo(0, 0);
      });
    return (
        <div className="project-container">
            <div className="project-main">
                <h1>My Projects</h1>

                <div className="project-item-container">
                    <div className="project-item">
                        <div className="project-item-image project-one">
                             <h2 className="project-name">Youtube Link Manager</h2>
                        </div>
                        <div className="project-item-detail">
                            <p>Youtube video link manager built with React/Interact with flask api to manage data and authentication</p>
                            <div className="project-link-container">
                                <a className="link project-link" href={'https://github.com/ryuichi24/video-link-manager'}><FontAwesomeIcon className="font-awesome" icon={faGithub}/>Github</a>
                                <span>|</span>
                                <a className="link project-link" href={process.env.REACT_APP_PROJECT_URL_ONE}><FontAwesomeIcon className="font-awesome" icon={faLink}/>App</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-item-image project-two">
                            <h2 className="project-name">Api For Youtube Link Manager</h2>
                        </div>
                        <div className="project-item-detail">
                            <p>Flask api intereacting with MySQL database/ORM SQLAlchemy/JWT authentication</p>
                            <div className="project-link-container">
                                <a className="link project-link" href={'https://github.com/ryuichi24/api-video-link-manager'}><FontAwesomeIcon className="font-awesome" icon={faGithub}/>Github</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-item-image project-three">
                             <h2 className="project-name">Time Table Manager</h2>
                        </div>
                        <div className="project-item-detail">
                            <p>Time table sharing app built with React/Interact with express api to manage data and authentication</p>
                            <div className="project-link-container">
                                <a className="link project-link" href={'https://github.com/ryuichi24/time-table-manager'}><FontAwesomeIcon className="font-awesome" icon={faGithub}/>Github</a>
                                <span>|</span>
                                <a className="link project-link" href={process.env.REACT_APP_PROJECT_URL_TWO}><FontAwesomeIcon className="font-awesome" icon={faLink}/>App</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-item-image project-four">
                            <h2 className="project-name">Api For Time Table Manager</h2>
                        </div>
                        <div className="project-item-detail">
                            <p>Express api intereacting with MySQL database/JWT authentication</p>
                            <div className="project-link-container">
                                <a className="link project-link" href={'https://github.com/ryuichi24/api-time-table-manager'}><FontAwesomeIcon className="font-awesome" icon={faGithub}/>Github</a>
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

                    <div className="project-item">
                        <div className="project-item-image project-six">
                            <h2 className="project-name">My Portfolio</h2>
                        </div>
                        <div className="project-item-detail">
                            <p>Docker compose/Nginx reverse proxy for api and multiple web hosting/Deployed on VPS</p>
                            <div className="project-link-container">
                                <a className="link project-link" href={'https://github.com/ryuichi24/my-portfolio'}><FontAwesomeIcon className="font-awesome" icon={faGithub}/>Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;