import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'treatment',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling ',
            description: 'treatment',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'treatment',
            img: whitening
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center text-xl '>
                <h2 className='font-bold text-primary text-xl uppercase'>Our Services</h2>
                <h3 className='text-4xl'>Services We Provide</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;