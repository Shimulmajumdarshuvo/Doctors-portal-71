import React from 'react';

const ServicePart = ({ service, setTreatment }) => {
    const { name, slots } = service;
    console.log(slots.length);
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another date.</span>
                }</p>

                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default ServicePart;