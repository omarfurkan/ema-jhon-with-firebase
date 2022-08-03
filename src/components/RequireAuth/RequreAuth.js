import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Utitlies/firebase.init';
import { useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";

const RequreAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequreAuth;