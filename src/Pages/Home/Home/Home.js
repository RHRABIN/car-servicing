import React from 'react';
import Banner from '../../../Banner/Banner/Banner';
import Experts from '../../../Expert/Experts/Experts';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import Services from '../Services/Services'
const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;