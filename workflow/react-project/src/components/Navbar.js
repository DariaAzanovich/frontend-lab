import "./Navbar.css";
import "./media.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import Authentication from './Authentication';
import { connect } from 'react-redux';
import { logOut } from '../redux/action-creators/authActions';
import { showRegModal } from '../redux/action-creators/modalActions';
import history from '../redux/history';

const Navbar = (props) => {
    const goTo = (pagePath = '') => {
        pagePath ? history.push(`/${pagePath}`) : history.push('/');
    }

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
                        onClick={() => {goTo()}}
                    />
                    <div 
                        className="navbar-title"
                        onClick={() => {goTo()}}
                    >
                        Cocktail App
                    </div>
                </div>

                { !props.isAuth ? 
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
                                onClick={() => goTo('search')}
                            />

                            <div className="dropdown-prompt search">
                                <span>Search</span>
                            </div>
                        </li>

                        <li className="user-btns-item">
                            <FontAwesomeIcon 
                                icon={faStar} 
                                size="2x"
                                className="navbar-liked"
                            />

                            <div className="dropdown-prompt liked">
                                <span>Liked</span>
                            </div>
                        </li>

                        <li className="user-btns-item">
                            <FontAwesomeIcon 
                                icon={faHouseUser} 
                                size="2x"
                                className="navbar-user"
                            />

                            <div className="dropdown-prompt log-out">
                                <span onClick={() => {
                                        props.logOut();
                                        goTo();
                                    }}
                                >
                                    Log out
                                </span>
                            </div>
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
        modalState: state.modal.showRegModal,
        isAuth: state.auth.isAuth
    };
    
};

const mapDispatchToProps = { 
    logOut, 
    showRegModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);