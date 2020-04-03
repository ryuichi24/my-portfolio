import React, { useContext } from 'react';

//import libraries
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { VideoLinkContext }from '../../context/VideoLinkContext';

import { apiBaseUrl } from '../../config';

const DeleteVideoLink = ({ videoLinkId }) => {


    //get states from context
    const { videoLinks, setVideoLinks } = useContext(VideoLinkContext)

    const deleteLink = () => {
        //prepare options
        const access_token = localStorage.getItem('access_token')

        const options = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': `Bearer ${access_token}`
            }
    }

        fetch(`${apiBaseUrl}/api/video-link/${videoLinkId}`, options)
                .then(res => res.json())
                .then(results => {
                    if (!results.success) {
                        console.log("fail to delete");
                    }
                    else {
                        const newVideoLinks = videoLinks.filter(link => {
                            return link.id !== results.id;
                        });

                        setVideoLinks(newVideoLinks);
                    }
                });
    }

    return (
        <div className="delete-video-link-wrapper">
            <FontAwesomeIcon onClick={deleteLink} className="font-awesome-trash" icon={faTrashAlt}/>
        </div>
    );
}

export default DeleteVideoLink;