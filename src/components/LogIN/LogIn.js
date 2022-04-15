import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import './LogIn.css'

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    // const [error , setError] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const nevigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }

    if(user){
       nevigate(from,{replace:true})
    }
     const handleSignIn  = event  => {
         event.preventDefault()
        signInWithEmailAndPassword(email,password)
     }
    return (
        <div className='form-container'>
             <div>
                 <h2 className='form-title'>Log In</h2>
                <form onSubmit={handleSignIn}>      
                  <div className="input-group">
                       <label htmlFor="email"> Email</label>
                       <input onBlur={handleEmail} type="email" name="email" id="" required/>
                  </div>
                  <div className="input-group">
                       <label htmlFor="password">Password</label>
                       <input onBlur={handlePassword} type="password" name="pssword" id="" required />
                  </div>
                   <p style={{color:'red'}}>
                       {error?.message}
                   </p>
                     {
                         loading && <p>Loading...</p>
                     }
                  <input className='form-submit' type="submit" value="LogIn" />
                </form>
                <p>
                    New to Ema-John ? <Link className='form-link' to='/signup'>Create New Account</Link>
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

export default LogIn;