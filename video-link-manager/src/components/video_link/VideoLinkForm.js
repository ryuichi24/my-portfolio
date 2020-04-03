import React, { useState, useContext } from 'react';

import { VideoLinkContext }from '../../context/VideoLinkContext';

import { apiBaseUrl } from '../../config';

import './video-link-form.css';

const VideoLinkForm = () => {

    //prepare states
    const [ newVideoLink, setNewVideoLink ] = useState('')

    //get states from context
    const { videoLinks, setVideoLinks } = useContext(VideoLinkContext)


    const addVideoLink = () =>{

        //prepare options
        const access_token = localStorage.getItem('access_token')

        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': `Bearer ${access_token}`
            },
            body: JSON.stringify({
                url: newVideoLink
            })
        }

        fetch(`${apiBaseUrl}/api/video-link/`, options)
            .then(res => res.json())
            .then(results => {
                setVideoLinks([...videoLinks, results])
            })
    }


    const handleSubmit = (e) =>{

        //not to refresh the whole page
        e.preventDefault();

        addVideoLink();

        //refresh state
        setNewVideoLink('');
    }


    return (
        <div className="vide-link-form-wrapper">
            <form className="video-link-form" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input
                        onChange={(e) => setNewVideoLink(e.target.value)}
                        type="text"
                        name="video-link"
                        placeholder="add link..."
                        value={newVideoLink}
                        required
                    />
                    </div>
                <button className="video-link-form-btn" type="submit">Add</button>
            </form>
        </div>
    );
}

export default VideoLinkForm;