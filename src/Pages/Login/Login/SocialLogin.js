import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorMessage = '';
    let load = ''
    const navigate = useNavigate()
    if (error || error1) {

        errorMessage = <p className='text-center text-danger'>Error: {error?.message} {error1?.message}</p>

    }
    if (loading || loading1) {
        return <Loading></Loading>
        // load = <p>Loading...</p>;

    }
    if (user || user1) {
        navigate('/home')
    }
    return (
        <div >
            <p className='text-danger text-center'>{errorMessage}</p>
            <p className='text-danger text-center'>{load}</p>
            <div className='d-flex align-items-center'>

                <div style={{ height: '1px' }} className='w-50 bg-secondary'></div>
                <p className='px-2 mt-3'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-secondary'></div>
            </div>

            <div>
                <button onClick={() => signInWithGoogle()} className="btn-info d-block w-50 mx-auto  mb-3">
                    <img className='me-3' src={google} alt="" />
                    <span>Continue with google</span>
                </button>

                <button onClick={() => signInWithGithub()} className="btn-seceondary d-block w-50 mx-auto  mb-3">
                    <img className='me-3' width={30} src={github} alt="" />
                    <span>Continue with github</span>

                </button>

                <button className="btn-info d-block w-50 mx-auto  mb-3">
                    <img className='me-3' width={30} src={facebook} alt="" />
                    <span>Continue with facebook</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;