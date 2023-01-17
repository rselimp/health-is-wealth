import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';

import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal/BookingModal';
import Loading from '../../Pages/Loading/Loading';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);   
    const date = format(selectedDate, 'PP')
    const {data: appointmentOptions =[], refetch,isLoading } = useQuery ({
        queryKey:['appointmentOptions',date],
        queryFn: async () =>{
            const res =await fetch(`https://health-is-wealth-server.vercel.app/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading/>
    }

    return (
        <div className='my-16'>
            <p className='text-center font-bold'>Available Appointments on {format(selectedDate,'PP')}</p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {
                appointmentOptions.map(appointmentOption =><AppointmentOption key={appointmentOption._id}
                    
                    appointmentOption={appointmentOption}
                    setTreatment={setTreatment}
                    
                    />)
            }
        </div>
        { treatment &&
            <BookingModal treatment={treatment} 
            setTreatment={setTreatment}
            refetch={refetch}
            selectedDate={selectedDate}
            
            /> }
        </div>
    );
};

export default AvailableAppointments;