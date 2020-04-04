import React from 'react';

import ProfileCv from '../cv/ProfileCV';
import DetailCV from '../cv/DetailCV';

import './cv.css';

const CV = () => {
    return (
        <div className="cv-container">
            <div className="cv-main">
                <ProfileCv/>
                <DetailCV/>
            </div>
        </div>
    );
}

export default CV;