import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M6GGgLEil00zfkwukAhfa8j8lqqgbeofFJm0jbG6Co65ZTcGKww02SZFu4FEVr0gMGCO3eJoYbrdIcsEKT2J2tE00aef6UXL8')
console.log(stripePromise)

const Payment = () => {
    const booking = useLoaderData()
    const { treatment, price, appointmentDate, slot } = booking

    return (
        <div>
            <h2 className='text-2xl'>Payment for{treatment}</h2>
            <p className='text-xl'>Please pay{price} for your appointment on {appointmentDate} at {slot}</p>

            <div className='w-96 py-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    booking ={booking}
                    
                    />

                </Elements>
            </div>
        </div>
    );
};

export default Payment;