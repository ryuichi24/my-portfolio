import React, { createContext, useState, useEffect } from "react";

import { apiBaseUrl } from '../config';

//create context
export const VideoLinkContext = createContext();


const VideoLinkContextProvider = (props) => {

    //prepare states
    const [videoLinks, setVideoLinks] = useState([]);
    const [isVideoLinkLoaded, setIsVideoLinkLoaded] = useState(false);

    useEffect(() => {

        //prepare options
        const access_token = localStorage.getItem('access_token')
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': `Bearer ${access_token}`
            }
        }

        //get all video links of current user
        fetch(`${apiBaseUrl}/api/video-link/by-user`, options)
            .then(res => res.json())
            .then(data => setVideoLinks([...data]))
            .catch(error => console.log(error))

    }, [isVideoLinkLoaded]);


    return (
        <VideoLinkContext.Provider value={{ videoLinks, setVideoLinks, isVideoLinkLoaded, setIsVideoLinkLoaded }}>
            { props.children }
        </VideoLinkContext.Provider>
    )
}

export default VideoLinkContextProvider;