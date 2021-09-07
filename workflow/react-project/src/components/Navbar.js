import React from 'react';
import "./Navbar.css";
import logo from '../cocktail-logo.png';

export const Navbar = ({ closeModal }) => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar-brand">
                    <img 
                        className="navbar-logo" 
                        src={logo} 
                        alt="Logo"
                        onClick={() => {
                            closeModal(true)
                        }}
                    ></img>
                    <div className="navbar-title">
                        Coctail App
                    </div>
                </div>

                <button 
                className="navbar-btn"
                    onClick={() => {
                            closeModal(true)
                        }}
                >
                    Get Started
                </button>
            </nav>
        </React.Fragment>
    );
}