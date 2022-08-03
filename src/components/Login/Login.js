import React from 'react';
import './Login.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../Utitlies/firebase.init';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Login = () => {
    const [email, setEamil] = useState('')
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';



    const handleEmailBlur = event => {
        setEamil(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate(from, { replace: true })
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)

    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleUserSignIn}>
                    <h2 className='form-title'>Login</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <h1>Loading........</h1>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to='/signup'>Create New Account</Link>
                </p>
            </div>
        </div >
    );
};

export default Login;