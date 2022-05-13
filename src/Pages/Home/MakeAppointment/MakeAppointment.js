import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-115px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary py-3'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white py-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eos architecto
                    excepturi numquam, totam cumque doloribus quaerat corrupti, quis repudiandae
                    eligendi quae voluptas nihil corporis? Suscipit eveniet alias quibusdam impedit
                    necessitatibus omnis consequatur, obcaecati quos.</p>
                <PrimaryButton></PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;