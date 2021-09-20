import "./Navbar.css";
import "./media.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import Modal from "./Modal";
import Authentication from "./Authentication";

export const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            {openModal && 
                <Modal modalState={setOpenModal} title = 'Authentication'>
                    <Authentication />
                </Modal>
            }
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
                <div className="user-btns">
                <FontAwesomeIcon 
                    icon={faSearch} 
                    size="2x"
                    className="navbar-search"
                />
                <FontAwesomeIcon 
                    icon={faStar} 
                    size="2x"
                    className="navbar-liked"
                />
                <FontAwesomeIcon 
                    icon={faHouseUser} 
                    size="2x"
                    className="navbar-user"
                />
                </div>
                <div className="dropdown-logout">
                    <span 
                        onClick={() => {

                        }}
                    >Log out</span>
                </div>
            </nav>
        </>
    );
}