import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [address , setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [error , setError] = useState('')
    // const nevigate = useNavigate()

    const handleName = event => {
        setName(event.target.value)
    }
    const handleAddress = event => {
        setAddress(event.target.value)
    }
    const handlePhoneNumber = event => {
        setPhoneNumber(event.target.value)
    }
    const handleAddShipping = event => {
        event.preventDefault()
        const shipping = {name,address,phoneNumber}

    }
    return (
        <div className='form-container'>
             <div>
                 <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleAddShipping}>      
                  <div className="input-group">
                       <label htmlFor="name">Your Name</label>
                       <input onBlur={handleName} type="text" name="name" id="" required/>
                  </div>
                  <div className="input-group">
                       <label htmlFor="email">Your Email</label>
                       <input value={user?.email} readOnly type="email" name="email" id="" required/>
                  </div>
                  <div className="input-group">
                       <label htmlFor="address">Address</label>
                       <input onBlur={handleAddress} type="text" name="address" id="" required />
                  </div>
                  <div className="input-group">
                       <label htmlFor="phone">Phone Number</label>
                       <input onBlur={handlePhoneNumber} type="number" name="phone" id="" required/>
                  </div>
                    <p style={{color:"red"}}>
                        {error}
                    </p>
                  <input onClick={handleAddShipping} className='form-submit' type="submit" value="Add Shipping" />
                </form>
             </div>
            
        </div>
    );
};

export default Shipment;