import "./Navbar.css";
import "./media.css";
import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';

export const Navbar = ({ closeModal }) => {
    return (
        <Fragment>
            <nav className="navbar">
                <div className="navbar-brand">
                    <FontAwesomeIcon 
                        icon={faCocktail} 
                        size="3x"
                        className="navbar-logo"
                        onClick={() => {
                            closeModal(true)
                        }}
                    />
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
        </Fragment>
    );
}