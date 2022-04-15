import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2 className='mt-5'>Welcome to detail : {serviceId}</h2>

            <Link to='/secreat'>
                <button className="btn btn-primary">Proceed Chekout</button>
            </Link>


        </div>
    );
};

export default ServiceDetail;