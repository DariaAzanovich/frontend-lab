import "./Navbar.css";
import "./media.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import Modal from "./Modal";
import Authentication from "./Authentication";
import { connect } from "react-redux";
import { logOut } from "../redux/action-creators/authActions";
import { showRegModal } from "../redux/action-creators/modalActions";

const Navbar = (props) => {
    return (
        <>
            {props.modalState &&
                <Modal title = 'Authentication'>
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

                {(!localStorage.getItem('token')) ? 
                    <button 
                        className="navbar-btn"
                        onClick={props.showRegModal}
                    >
                        Get Started
                    </button>
                :
                    <ul className="user-btns-list">
                        <li className="user-btns-item">
                            <FontAwesomeIcon 
                                icon={faSearch} 
                                size="2x"
                                className="navbar-search"
                            />

                            <ul className="user-btns-dropdown">
                                <li className="dropdown-logout search">
                                    <span>Search</span>
                                </li>
                            </ul>
                        </li>

                        <li className="user-btns-item">
                            <FontAwesomeIcon 
                                icon={faStar} 
                                size="2x"
                                className="navbar-liked"
                            />

                            <ul className="user-btns-dropdown">
                                <li className="dropdown-logout liked">
                                    <span>Liked</span>
                                </li>
                            </ul>
                        </li>

                        <li className="user-btns-item">
                            <FontAwesomeIcon 
                                icon={faHouseUser} 
                                size="2x"
                                className="navbar-user"
                            />

                            <ul className="user-btns-dropdown">
                                <li className="dropdown-logout log-out">
                                    <span onClick={props.logOut}>Log out</span>
                                </li>
                            </ul>
                        </li>
                    
                    </ul>
                    }
            </nav>
        </>
    );
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        modalState: state.modal.showRegModal
    };
    
};

const mapDispatchToProps = { 
    logOut, 
    showRegModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);