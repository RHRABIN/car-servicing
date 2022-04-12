import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='service-container'>
            <h3>This is:{name}</h3>
            <img src={img} alt="" />
            <p><small>{description}</small></p>
            <h3>Cost: {price}$</h3>
            <button>Book {name}</button>
        </div>
    );
};

export default Service;