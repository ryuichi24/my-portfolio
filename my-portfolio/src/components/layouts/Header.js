import React from 'react';
import { Link } from 'react-router-dom';

import './layouts.css';
import hamburger from '../../img/hamburger.png';

const Header = () => {

    const onHiddenNav = () => {
        const hiddenNavEl = document.querySelector('.nav-hidden');
        hiddenNavEl.style.display = 'block';
    }

    const offHiddenNav = () => {
        const hiddenNavEl = document.querySelector('.nav-hidden');
        hiddenNavEl.style.display = 'none';
    }
    return (
        <header className="header-container">
                <div className="brand">
                <Link to="/" className="link"><div>RYUICHI</div></Link>
                </div>
                <div className="menu-btn">
                    <span onClick={onHiddenNav}><img className="hamburger" src={hamburger} alt={"Menu"}/></span>
                </div>
                <nav className="nav-item-container">
                    <Link to="/" className="link"><div className="nav-item">Home</div></Link>
                    <Link to="/project" className="link"><div className="nav-item">Project</div></Link>
                    <Link to="/cv" className="link"><div className="nav-item">CV</div></Link>
                </nav>
                <nav className="nav-hidden">
                        <span onClick={offHiddenNav} className="close">&times;</span>
                        <div className="nav-item-hidden-container">
                            <Link to="/" className="link" onClick={offHiddenNav}><div className="nav-item">Home</div></Link>
                            <Link to="/project" className="link" onClick={offHiddenNav}><div className="nav-item">Project</div></Link>
                            <Link to="/cv" className="link" onClick={offHiddenNav}><div className="nav-item">CV</div></Link>
                    </div>
                </nav>
        </header>
     );
}

export default Header;