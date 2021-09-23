import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';
import './Authentication.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { logIn, register } from '../redux/action-creators/authActions';


const Authentication = (props) => {
    const {loader, logIn, register} = props; 

    const [signIn, setSignIn] = useState(true);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [usernameDirty, setUsernameDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordConfirmDirty, setPasswordConfirmDirty] = useState(false);

    const [usernameError, setUsernameError] = useState('Username can not be empty!');
    const [passwordError, setPasswordError] = useState('Password can not be empty!');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');

    const [formValid, setFormValid] = useState(false);

    const [passwVisible, setPasswVisible] = useState(false);
    const [confirmVisible, setComnfirmVisible] = useState(false);

    useEffect(() => {
        if(signIn) {
            setPasswordConfirmError();
        } else {
            if(!passwordConfirm) {
                setPasswordConfirmError('Passwords are not identical!');
                return;
            }
        }

        if(usernameError || passwordError || passwordConfirmError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [usernameError, passwordError, passwordConfirmError, signIn, passwordConfirm]);

    const blurHandler = (event) => {
        switch(event.target.id) {
            case 'user':
                setUsernameDirty(true);
                break;
            case 'passw':
                setPasswordDirty(true);
                comparePasswords();
                break;
            case 'passwConfirm':
                setPasswordConfirmDirty(true);
                comparePasswords();
                break;
        }
    }

    const comparePasswords = () => {
        if(passwordConfirm !== password) {
            setPasswordConfirmError('Passwords are not identical!');
        }
    };

    const updateUsername = (event) => {
        setUsername(event.target.value);

        const re = /^[a-zA-Z0-9]{3,30}$/;

        if(!re.test(String(event.target.value)) || !event.target.value) {
            setUsernameError('Must be at least 3 characters and can only contain letters and/or numbers!');
        } else {
            setUsernameError();
        }
    };

    const updatePassword = (event) => {
        setPassword(event.target.value);

        const re = /^[a-zA-Z0-9]{3,30}$/;

        if(!re.test(String(event.target.value)) || !event.target.value) {
            setPasswordError('Must be at least 3 characters and can only contain letters and/or numbers!');
        } else {
            setPasswordError();
        }
    };

    const updatePasswordConfirm = (event) => {
        setPasswordConfirm(event.target.value);

        if(event.target.value !== password) {
            setPasswordConfirmError('Passwords are not identical!');
        } else {
            setPasswordConfirmError();
        }
    };

    const handlePasswordVisibilityChange = (event) => {

        const field = event.currentTarget.parentElement.firstChild;

        const type = field.getAttribute('type') === 'password' ? 'text' : 'password';

        field.setAttribute('type', type);

        if(field.id === 'passw') {
            setPasswVisible(!passwVisible);
        } else {
            setComnfirmVisible(!confirmVisible);
        }
    };

    const postData = () => {
        if (!usernameError && !passwordError && !passwordConfirmError) {
            const data = { 
                name: username, 
                password 
            };

            signIn ? logIn(data) : register(data);
        }
    };

    if(loader) {
        return <Loader />
    } 

    return (
        <div className="authentication-wrap">
            <div className="auth">
                <p className="auth-title">
                    {signIn ? 'Sign In' : 'Sign Up'}
                </p>
                <form className="sign-form">
                    <label htmlFor="user">Username</label>

                    {usernameDirty && usernameError && <span className="form-errors">{usernameError}</span>}

                    <input 
                        type="text" 
                        placeholder="Username" 
                        id="user"
                        value={username} 
                        onChange={updateUsername}
                        onBlur={blurHandler}
                    />

                    <label htmlFor="passw">Password</label>

                    {passwordDirty && passwordError && <span className="form-errors">{passwordError}</span>}

                    <div className="password-wrap">
                        
                        <input 
                            type="password" 
                            placeholder="Password" 
                            id="passw" 
                            value={password}
                            onChange={updatePassword}
                            onBlur={blurHandler}
                        />
                        <span 
                            className="password-vivsibility"
                            onClick={handlePasswordVisibilityChange}
                        >
                            <FontAwesomeIcon
                                    icon={passwVisible ? faEye : faEyeSlash} 
                                    size="1x"
                            />
                        </span>
                        
                    </div>
                    

                    {!signIn &&
                        <>
                            <label htmlFor="passwConfirm">Confirm Password</label>


                            {passwordConfirmDirty && passwordConfirmError && <span className="form-errors">{passwordConfirmError}</span>}

                            <div className="password-wrap">
                                <input 
                                    type="password" 
                                    placeholder="!Password" 
                                    id="passwConfirm" 
                                    value={passwordConfirm}
                                    onChange={updatePasswordConfirm}
                                    onBlur={blurHandler}
                                />
                                <span 
                                    className="password-vivsibility"
                                    onClick={handlePasswordVisibilityChange}
                                >
                                    <FontAwesomeIcon
                                        icon={confirmVisible ? faEye : faEyeSlash} 
                                        size="1x"
                                    />
                                </span>
                            </div>
                        </>
                    }
                </form>
                
                <p className="change-in-up">
                    {signIn ?
                        'Don\'t have an account? ' :
                        'Already signed up? '
                    }
                    <span 
                        className="change-in-up-btn"
                        onClick={() => setSignIn(!signIn)}    
                    >
                        {signIn ? 'Sign up' : 'Go to login'}
                    </span>
                </p>
            </div>
                
            <button 
                className="log-btn"
                onClick={postData}
                disabled={!formValid}
                style={!formValid ? {
                    cursor: 'not-allowed'
                } : {}}
            >
                {signIn ? 'Sign In' : 'Sign Up'}
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loader: state.auth.loader
    };
    
};

const mapDispatchToProps = { logIn, register };

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);