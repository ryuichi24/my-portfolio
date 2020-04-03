import React from 'react';

//import libraries
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DeleteVideoLink from './DeleteVideoLink';

import './video-link.css';

const VideoLink = ({ videoLink }) => {

    return (
        <div className="video-link-wrapper">
            <div className="video-link-content-wrapper">
                <p>{videoLink.title}</p>
                <div className="video-link-content-icon-wrapper">
                    <DeleteVideoLink videoLinkId={videoLink.id}/>
                    <a className="link" href={videoLink.url}>
                        <FontAwesomeIcon className="font-awesome-youtube" icon={faYoutube}/>
                    </a>
                </div>
            </div>
        </div>
     );
}

export default VideoLink;