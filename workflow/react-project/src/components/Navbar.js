import "./Navbar.css";
import "./media.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import Modal from "./Modal";

export const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            {openModal && <Modal modalState={setOpenModal}/>}
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
                        setOpenModal(true)
                    }}
                >
                    Get Started
                </button>
            </nav>
        </>
    );
}