import React, { useState } from 'react';
import imageapp from '../../img/2-1.jpg';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
 
    return (
        <div className=''>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={imageapp} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='mr-4'>
                    <DayPicker 
                    mode='single'
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    
                    />

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;