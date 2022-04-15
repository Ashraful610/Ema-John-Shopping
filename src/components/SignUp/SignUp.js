import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error , setError] = useState('')
    const nevigate = useNavigate()

    const [createUserWithEmailAndPassword ,user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }
     
   if(user){
        nevigate('/')
   }

    const handleCreateUser = event => {
        event.preventDefault()

        if(password !== confirmPassword){
            setError('Your two password did not match')
            return
        }
        if(password.length < 6){
            setError('Password must be 6 character')
        }
        setError('')
        
        createUserWithEmailAndPassword(email,password)

    }
    return (
        <div className='form-container'>
             <div>
                 <h2 className='form-title'>Sign In</h2>
                <form onSubmit={handleCreateUser}>      
                  <div className="input-group">
                       <label htmlFor="email"> Email</label>
                       <input onBlur={handleEmail} type="email" name="email" id="" required/>
                  </div>
                  <div className="input-group">
                       <label htmlFor="password">Password</label>
                       <input onBlur={handlePassword} type="password" name="pssword" id="" required />
                  </div>
                  <div className="input-group">
                       <label htmlFor="confirm-password">Confirm Password</label>
                       <input onBlur={handleConfirmPassword} type="password" name="confirm-pssword" id="" required/>
                  </div>
                    <p style={{color:"red"}}>
                        {error}
                    </p>
                  <input onClick={handleCreateUser} className='form-submit' type="submit" value="SignUp" />
                </form>
                <p>
                   Already have an account ? <Link className='form-link' to='/login'>Log In</Link>
                </p>
                       <div className='horizantal'>
                             <div className='line'>
                                  <hr/>
                             </div>
                             <div>
                                <p className='or'>or</p>
                             </div>
                             <div className='line'>
                                 <hr />
                             </div>
                      </div>
                 <div className='btn-container'>
                     <button className='google-btn'>
                         Continue With Google
                    </button>
                 </div>
             </div>
            
        </div>
    );
};

export default SignUp;