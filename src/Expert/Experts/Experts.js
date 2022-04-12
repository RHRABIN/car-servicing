import React from 'react';
import expert1 from '../../images/experts/expert-1.jpg'
import expert2 from '../../images/experts/expert-2.jpg'
import expert3 from '../../images/experts/expert-3.jpg'
import expert4 from '../../images/experts/expert-4.jpg'
import expert5 from '../../images/experts/expert-5.jpg'
import expert6 from '../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        { id: 1, name: 'Jhon Dev', img: expert1 },
        { id: 2, name: 'Devid Miler', img: expert2 },
        { id: 3, name: 'William son', img: expert3 },
        { id: 4, name: 'Kris Gail', img: expert4 },
        { id: 5, name: 'Jhon Doe', img: expert5 },
        { id: 6, name: 'Haris Miler', img: expert6 }
    ]
    return (
        <div className='container'>
            <h2 className='text-primary text-center'>Our Experts</h2>
            <div className="row">
                {experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                >

                </Expert>)}
            </div>
        </div>
    );
};

export default Experts;