import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { AuthContext }  from '../../context/AuthContext';

import './header.css';

const Header = () => {

    const { authenticated, logOut } = useContext(AuthContext);

    const onModal = () => {
        const modal = document.querySelector('.modal');
                        modal.style.display = "block";
    }

    const offModal = () => {
        const modal = document.querySelector('.modal');
                        modal.style.display = "none";
    }

    return (
        <header>
            <div className="header-container">
                <div className="brand">
                    <Link className="link" to="/"><h3>Time Table Manager</h3></Link>
                </div>
                <nav className="nav-item-container">
                    <div className="nav-item" style={authenticated ? {display: 'none'} : null}><Link className="link" to="/sign-up"><h3>Sign Up</h3></Link></div>
                    <div className="nav-item logged-in" style={authenticated ? {display: 'block'} : null}><Link className="link" to="/time-table"><h3>Time Table</h3></Link></div>
                    <div className="nav-item logged-in" style={authenticated ? {display: 'block'} : null}><Link className="link" to="/time-table/form"><h3>Create Table</h3></Link></div>
                    <div className="nav-item" style={authenticated ? {display: 'none'} : null}> <Link className="link" to="/login"><h3>Log in</h3></Link></div>
                        <div className="menu-btn-container nav-item">
                            <button onClick={() => onModal()} className="menu-btn">
                                <span>Menu</span>
                            </button>
                        </div>
                </nav>
            </div>

            {/* modal */}
            <div className="myModal modal">
                <div className="modal-content">
                    <span onClick={() => offModal()} className="close">&times;</span>
                    <div className="modal-content-container">
                        <div className="modal-item" style={authenticated ? {display: 'none'} : null}><Link onClick={() => offModal()} className="link" to="/sign-up"><h3>Sign Up</h3></Link></div>
                        <div className="modal-item logged-in" style={authenticated ? {display: 'block'} : null}><Link onClick={() => offModal()} className="link" to="/time-table"><h3>Time Table</h3></Link></div>
                        <div className="modal-item logged-in" style={authenticated ? {display: 'block'} : null}><Link className="link" onClick={() => offModal()} to="/time-table/form"><h3>Create Table</h3></Link></div>
                        <div className="modal-item logged-in" style={authenticated ? {display: 'block'} : null}><Link className="link" onClick={() => offModal()} to="/edit-profile"><h3>Edit Profile</h3></Link></div>
                        <div className="modal-item logged-in" style={authenticated ? {display: 'block'} : null}><Link className="link" onClick={() => offModal()} to="/delete-user"><h3>Delete Account</h3></Link></div>
                        <div className="modal-item log-out-btn logged-in" style={authenticated ? {display: 'block'} : null}><div onClick={() => {logOut(); offModal()}}><h3>Log out</h3></div></div>
                        <div className="modal-item" style={authenticated ? {display: 'none'} : null}><Link onClick={() => offModal()} className="link" to="/login"><h3>Log in</h3></Link></div>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Header;