import React from 'react';
import Address from '../Address/Address';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Address></Address>
        </div>
    );
};

export default Home;