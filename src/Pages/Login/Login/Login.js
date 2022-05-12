import { async } from '@firebase/util';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from './SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation(auth);
    const [errors, setErrors] = useState('');
    const from = location.state?.from?.pathname || "/";
    let errorMessage = ''
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    if (user) {
        navigate(from, { replace: true })
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {

        errorMessage = <p className='text-center text-danger'>Error: {error?.message}</p>

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email });
        console.log(data);
        localStorage.setItem('accesToken', data.accesToken)

    }
    const forgetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Reset Password Sent')
        }
        else {
            toast('Please enter your email')
        }
    }


    const handleNavigate = () => {
        navigate('/signup')
    }
    return (
        <div className='w-50 mx-auto mt-5 form-control'>
            <h2 className='heading'>Log in</h2>
            <PageTitle title='Login'></PageTitle>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {errorMessage}
                <Button variant="primary mx-auto w-50 d-block" type="submit">
                    Log in
                </Button>
            </Form>
            <p style={{ textAlign: 'center' }}>New to Genius Car? <Link to='/signup' className='text-primary text-center text-decoration-none' onClick={handleNavigate}>Please signup</Link></p>
            <p className='text-center'>Foget password?<button onClick={forgetPassword} className='text-primary btn btn-link  text-decoration-none'   >Reset password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;