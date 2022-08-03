import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Utitlies/firebase.init';


const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();



    useEffect(() => {
        setEmail(user?.email)
    }, [user?.email])

    const handleNameBlur = event => {
        setName(event.target.value)
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }
    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = (name, email, address, phone);
        console.log(shipping)


    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleCreateUser}>
                    <h2 className='form-title'>Sipping Information</h2>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="" id="" onBlur={handleNameBlur} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} type="email" name="" id="" required readOnly />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" id="" onBlur={handleAddressBlur} required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" required />
                </form>
            </div>
        </div >
    );
};

export default Shipment;