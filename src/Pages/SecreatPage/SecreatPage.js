import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import useService from '../../hooks/ServiceDetail';

const SecreatPage = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [service, setService] = useService(id);
    // const [user, setUser] = useState({
    //     name: 'Rabin',
    //     email: 'rhrabin@gamil.com',
    //     add: 'Netrakon, Arkapra',
    // })
    const handleOrder = (e) => {
        e.preventDefault();
        const order = {
            email: user?.email,
            name: user?.Name,
            serviceId: service._id,
            serviceName: service.name,
            address: e.target.add.value,
        };
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                console.log(response)
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order booked')
                }
                e.target.reset()
            })


    }
    // const handleChange = (e) => {
    //     const { add, ...rest } = user;
    //     const newAdd = e.target.value;
    //     const newUser = { newAdd, ...rest };
    //     setUser(newUser)
    // }
    return (
        <div className=''>
            <h4 className='mt-5 text-center'>Please Order : {service.name}</h4>
            <form onSubmit={handleOrder} className='form-control w-50 mx-auto'>

                <input className='w-100 mb-2' disabled value={user.displayName} type="text" name="name" id="name" /><br />
                <input className='w-100 mb-2' required autoComplete='off' placeholder='your address' value={user.add} type="text" name="add" id="add" /><br />
                <ToastContainer></ToastContainer>
                <input className='w-100 mb-2' value={service.name} type="text" name="service" id="service" /><br />
                <input className='w-100 mb-2' value={user.email} type="text" name="email" id="email" /><br />
                <input className='w-50 mx-auto d-block' type="submit" value="Order" />
            </form>
        </div>
    );
};

export default SecreatPage;