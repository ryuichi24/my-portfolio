import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//import context
import { AuthContext } from '../../context/AuthContext';

import './header.css';
import hamburger from '../../img/hamburger.png';

const Header = () => {

    //get things from context
    const { authenticated, logOut } = useContext(AuthContext);

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
                <Link to="/" className="link"><div>Viket</div></Link>
                </div>
                <div className="menu-btn">
                    <span onClick={onHiddenNav}><img className="hamburger" src={hamburger} alt={"Menu"}/></span>
                </div>
                <nav className="nav-item-container">
                    <Link to="/videos" className="link"><div className="nav-item" style={!authenticated ? {display: 'none'} : null}>My Videos</div></Link>
                    <Link to="/account-setting" className="link"><div className="nav-item" style={!authenticated ? {display: 'none'} : null}>Account</div></Link>
                    <div className="nav-item logout" style={!authenticated ? {display: 'none'} : null} onClick={logOut}>Logout</div>
                    <Link to="/sign-up" className="link"><div className="nav-item" style={authenticated ? {display: 'none'} : null}>Sign Up</div></Link>
                    <Link to="/login" className="link"><div className="nav-item" style={authenticated ? {display: 'none'} : null}>Login</div></Link>
                </nav>
                <nav className="nav-hidden">
                        <span onClick={offHiddenNav} className="close">&times;</span>
                        <div className="nav-item-hidden-container">
                            <Link to="/sign-up" className="link" onClick={offHiddenNav}><div className="nav-item nav-item-hidden" style={authenticated ? {display: 'none'} : null}>Sign up</div></Link>
                            <Link to="/login" className="link" onClick={offHiddenNav}><div className="nav-item nav-item-hidden" style={authenticated ? {display: 'none'} : null}>Login</div></Link>

                            <Link to="/videos" className="link" onClick={offHiddenNav} ><div className="nav-item nav-item-hidden" style={!authenticated ? {display: 'none'} : null}>My Videos</div></Link>
                            <Link to="/account-setting" className="link" onClick={offHiddenNav} ><div className="nav-item nav-item-hidden" style={!authenticated ? {display: 'none'} : null}>Account</div></Link>
                            <div className="nav-item-hidden logout" style={!authenticated ? {display: 'none'} : null} onClick={() => {logOut(); offHiddenNav();}}>Logout</div>
                    </div>
                </nav>
        </header>
     );
}

export default Header;