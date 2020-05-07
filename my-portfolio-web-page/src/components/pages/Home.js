import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './home.css';

const Home = (props) => {
    useEffect(() => {
        document.title = `Home`;
        window.gtagPageview(props.location.pathname);

        // change description and rich result for SEO
        //do things...
      }, [props.location.pathname]);

      useEffect(() => {
        window.scrollTo(0, 0);
      });
    return (
        <div className="home-container">
            <div className="home-main">
                <h1>Greeting! I am <span className="my-name">Ryuichi Nishi</span></h1>
                <p>
                I am a university student studying Software Engineering in Varna, Bulgaria.
                </p>
                <div className="home-link-item-container">
                    <p>Learn more ? > > ></p>
                    <Link to="/project" className="link home-link-item"><div>Project</div></Link>
                    <Link to="/cv" className="link home-link-item"><div>CV</div></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;