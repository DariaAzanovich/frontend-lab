import React, { useState } from 'react';
import './Authentication.css';

const Authentication = () => {
    const [singIn, setSignIn] = useState(true);

    return (
        <div className="authentication-wrap">
        <div className="auth">
        <p className="auth-title">
                {singIn ? 'Sign In' : 'Sign Up'}
            </p>
            <form className="sign-form">
                <label for="user">Username</label>
                <input 
                    type="text" 
                    placeholder="Username" 
                    id="user" 
                />
                
                <label for="passw">Password</label>
                <input 
                    type="password" 
                    placeholder="Password" 
                    id="passw" 
                />
            </form>
            
            <p className="change-in-up">
                {singIn ?
                    'Don\'t have an account? ' :
                    'Already signed up? '
                }
                <span 
                    className="change-in-up-btn"
                    onClick={() => setSignIn(!singIn)}    
                >
                    {singIn ? 'Sign up' : 'Go to login'}
                </span>
            </p>
        </div>
            

            <button className="log-btn">
                {singIn ? 'Sign In' : 'Sign Up'}
            </button>
        </div>
    )
}

export default Authentication;