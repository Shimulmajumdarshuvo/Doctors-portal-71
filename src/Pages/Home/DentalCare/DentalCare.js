import React from 'react';
import dental from '../../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';

const DentalCare = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={dental} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-4xl font-bold">Exceptional Dental Care,on Your Terms!</h1>
                        <p class="py-6">Dental Cosmetics Treatments In Los Angeles. Dental cosmetics
                            are the application of scientific technology to improve our dental health, the
                            functionality of our teeth, and oral aesthetics, translating into the improvement
                            of the beauty of our smile. The dentist who specializes in this type of treatment
                            is often known as a cosmetic dentist.</p>
                        <PrimaryButton></PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;