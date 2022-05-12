import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useService from '../../hooks/ServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useService(serviceId);
    const handleService = () => {
        navigate(`/secreat/${serviceId}`)
    }

    return (
        <div>
            <h2 className='mt-5'>Welcome to detail : {service.name}</h2>


            <button onClick={() => handleService(serviceId)} className="btn btn-info">Proceed Chekout</button>



        </div>
    );
};

export default ServiceDetail;