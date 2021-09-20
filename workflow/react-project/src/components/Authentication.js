import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';
import Joi from 'joi';
import './Authentication.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { logIn, registration } from '../redux/action-creators/authActions';
import { toast } from 'react-toastify';


const Authentication = (props) => {
    const {loader, logIn, registration} = props; 

    const [signIn, setSignIn] = useState(true);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');

    const [passwVisible, setPasswVisible] = useState(false);
    const [confirmVisible, setComnfirmVisible] = useState(false);

    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))      
    })
    .with('username', 'password');

    const validateData = () => {
        const validation = schema.validate({username: username, password: password});

        if (validation.error) {
            const error = validation.error.details[0];

            error.context.key === 'username' ? 
                setUsernameError('Username must be at least 3 characters and can only contain letters and/or numbers!') 
            : 
                setPasswordError('Password must be at least 3 characters and can only contain letters and/or numbers!');
        }
    };

    const passwordComparison = () => {
        if(passwordConfirm !== password) {
            setPasswordConfirmError('Passwords are not identical!');
        }
    };

    const updateUsername = (event) => {
        setUsernameError();
        setUsername(event.target.value);
    };

    const updatePassword = (event) => {
        setPasswordError();
        setPassword(event.target.value);
    };

    const updatePasswordConfirm = (event) => {
        setPasswordConfirmError();
        setPasswordConfirm(event.target.value);
    };

    const errorToast = (error) => {
        if(error) {
            toast.error(error);
        }
    };

    const passwordVisibility = (event) => {

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
        validateData();
        passwordComparison();

        if (!usernameError && !passwordError && !passwordConfirmError) {
            const data = { 
                name: username, 
                password: password 
            };

            signIn ? logIn(data) : registration(data);
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
                <input 
                    type="text" 
                    placeholder="Username" 
                    id="user" 
                    onChange={updateUsername}
                    onBlur={validateData}
                    onError={errorToast(usernameError)}
                />

                <label htmlFor="passw">Password</label>
                <div className="password-wrap">
                    
                    <input 
                        type="password" 
                        placeholder="Password" 
                        id="passw" 
                        onChange={updatePassword}
                        onBlur={validateData}
                        onError={errorToast(passwordError)}
                    />
                    <span 
                        className="password-vivsibility"
                        onClick={passwordVisibility}
                    >
                        <FontAwesomeIcon
                                icon={passwVisible ? faEye : faEyeSlash} 
                                size="1x"
                        />
                    </span>
                    
                </div>
                

                {signIn ?  <></> :
                    <>
                        <label htmlFor="passwConfirm">Confirm Password</label>
                        <div className="password-wrap">
                            <input 
                                type="password" 
                                placeholder="!Password" 
                                id="passwConfirm" 
                                onChange={updatePasswordConfirm}
                                onBlur={passwordComparison}
                                onError={errorToast(passwordConfirmError)}
                            />
                            <span 
                                className="password-vivsibility"
                                onClick={passwordVisibility}
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

const mapDispatchToProps = { logIn, registration };

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);