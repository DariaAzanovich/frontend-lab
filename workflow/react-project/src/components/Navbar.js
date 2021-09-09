import "./Navbar.css";
import "./media.css";
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';

export const Navbar = ({ modalState }) => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <FontAwesomeIcon 
                        icon={faCocktail} 
                        size="3x"
                        className="navbar-logo"
                    />
                    <div className="navbar-title">
                        Coctail App
                    </div>
                </div>

                <button 
                className="navbar-btn"
                    onClick={() => {
                        modalState(true)
                    }}
                >
                    Get Started
                </button>
            </nav>
        </>
    );
}

Navbar.propTypes = {
    modalState: PropTypes.func.isRequired
};