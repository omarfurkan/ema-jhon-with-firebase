import React from 'react';
import './SignUp.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../Utitlies/firebase.init';



const SignUp = () => {
    const [email, setEamil] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEamil(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Mismatch password')
            return;
        }
        if (password.length < 6) {
            setError('password munt be minimum 6 charecter or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password)

    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleCreateUser}>
                    <h2 className='form-title'>Sign Up</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="" onBlur={handleEmailBlur} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" onBlur={handlePasswordBlur} required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign UP" required />
                </form>
                <p>

                    Already have an accouont. <Link className='form-link' to='/login'>Login</Link>
                </p>
            </div>
        </div >
    );
};

export default SignUp;