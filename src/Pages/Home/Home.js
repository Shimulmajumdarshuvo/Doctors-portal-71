import React from 'react';
import Banner from './Banner/Banner';
import DentalCare from './DentalCare/DentalCare';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';

import Services from './Services/Services';
import Footer from './Shared/Footer/Footer';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info ></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;