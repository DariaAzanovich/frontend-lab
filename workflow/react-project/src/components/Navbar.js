import React, {Fragment} from 'react';
import "./Navbar.css";
import logo from '../cocktail-logo.png';

export const Navbar = () => (
    <nav className="navbar">
        <div className="navbar-brand">
            <img className="navbar-logo" src={logo} alt="Logo"></img>
            <div className="navbar-title">
                Coctail App
            </div>
        </div>

        <button className="navbar-btn">Get Started</button>
    </nav>
)