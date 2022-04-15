import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h2 className='mt-5'>This is about page</h2>
            <Link to='/secreat'>Go secreat</Link>
        </div>
    );
};

export default About;