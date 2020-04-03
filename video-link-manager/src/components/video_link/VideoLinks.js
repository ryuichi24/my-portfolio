import React, { useContext } from 'react';

import VideoLink from './VideoLink';
import VideoLinkForm from './VideoLinkForm';

import { VideoLinkContext } from '../../context/VideoLinkContext';

import './video-links.css';


const VideoLinks = () => {

    //get states from context
    const { videoLinks } = useContext(VideoLinkContext);

    return (
        <div className="video-links-wrapper">
            <div className="video-link-form">
                <VideoLinkForm/>
            </div>
            <div className="video-links-item-container">
                {videoLinks.map(videoLink => <VideoLink key={videoLink.id} videoLink={videoLink} />)}
            </div>
        </div>
    )
}

export default VideoLinks;