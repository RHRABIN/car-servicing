import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import './Signup.css'
import SocialLogin from '../Login/SocialLogin';
const SignUp = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleNavigate = () => {
        navigate('/login')
    }

    if (user) {

        console.log('/home')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
        alert('profile upadated');
        navigate('/home');
    }
    return (
        <div className=' form-control form-div'>
            <h2 className='heading'>Pleaser Sign up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Enter your name' />
                <input type="email" name="email" id="" placeholder='Enter your email' />
                <input type="password" name="password" id="" placeholder='Enter your password' />
                <input type="checkbox" name="terms" id="terms" />
                <label onClick={() => setAgree(!agree)}
                    className={`ps-2 ${agree ? '' : 'text-danger'}`}
                    htmlFor="terms">Accept terms and conditions</label>
                <button
                    disabled={!agree}
                    className='btn btn-primary w-50 mx-auto d-block'>Submit</button>

            </form>
            <p style={{ textAlign: 'center' }}>Already have an account? <Link to='/login' className='text-primary text-center text-decoration-none' onClick={handleNavigate}>Please login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;