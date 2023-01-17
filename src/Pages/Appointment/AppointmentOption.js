import React from 'react';

const AppointmentOption = ({ appointmentOption,setTreatment }) => {
    const { name,slots,price } = appointmentOption
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center mt-5">
                <h2 className=" font-bold text-2xl text-accent text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" :"space"}</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                    disabled ={slots.length === 0}
                    htmlFor="Booking-modal" onClick={() =>setTreatment(appointmentOption)}
                     className="btn bg-gradient-to-r from-cyan-500 to-blue-500 ">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;