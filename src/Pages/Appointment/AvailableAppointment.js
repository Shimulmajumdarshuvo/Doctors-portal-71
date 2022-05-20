import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ServicePart from '../ServicePart';
import BookingModal from './BookingModal';


const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h4 className='text-xl text-center text-secondary my-12'>Available Appointment on : {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    services.map(service => <ServicePart
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></ServicePart>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                setTreatment={setTreatment}
                treatment={treatment}>
            </BookingModal>}
        </div>
    );
};

export default AvailableAppointment;