import React, {useState} from 'react';
import "./Navbar.css";
import logo from '../cocktail-logo.png';
import Modal from './Modal';

export const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar-brand">
                    <img 
                        className="navbar-logo" 
                        src={logo} 
                        alt="Logo"
                        onClick={() => {
                            setOpenModal(true)
                        }}
                    ></img>
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

            {openModal && <Modal closeModal={setOpenModal}/>}
        </React.Fragment>
    );
}