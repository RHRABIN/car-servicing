import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const handleServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container'>
            <h4>{name}</h4>
            <img src={img} alt="" />
            <p><small>{description}</small></p>
            <h5>Cost: {price}$</h5>
            <button onClick={() => handleServiceDetail(id)} className='btn btn-primary'>{name}</button>
        </div>
    );
};

export default Service;