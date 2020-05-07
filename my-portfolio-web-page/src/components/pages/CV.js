import React, {useEffect} from 'react';

import ProfileCv from '../cv/ProfileCV';
import DetailCV from '../cv/DetailCV';

import './cv.css';

const CV = (props) => {
    useEffect(() => {
        document.title = `CV`;
        window.gtagPageview(props.location.pathname);

        // change description and rich result for SEO
        //do things...
      }, [props.location.pathname]);

      useEffect(() => {
        window.scrollTo(0, 0);
      });
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