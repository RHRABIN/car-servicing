import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='service-container'>
            <h4>{name}</h4>
            <img src={img} alt="" />
            <p><small>{description}</small></p>
            <h5>Cost: {price}$</h5>
            <button className='btn btn-primary'>{name}</button>
        </div>
    );
};

export default Service;