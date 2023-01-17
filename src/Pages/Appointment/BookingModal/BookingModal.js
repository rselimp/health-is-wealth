import { stringify } from '@firebase/util';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment,refetch}) => {
    const { name:treatmentName, slots,price } = treatment;
    const date = format(selectedDate, 'PP')
    const {user} = useContext(AuthContext)

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking ={
            appointmentDate :date,
            treatment: treatmentName,
            patient:name,
            slot,
            email,
            phone,
            price

       

        }

        fetch('https://health-is-wealth-server.vercel.app/bookings',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                setTreatment(null)
                 toast.success('Booking Confirmed')  
                 refetch();
            
            }
            else{
                toast.error(data.message)
            }
            
           
        }) 

    }


    return (
        <>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-4'>
                        <input type="text" value={date} disabled className="input input-bordered w-full " />
                        <select name='slot' className="select select-bordered w-full">
                            
                            {   slots &&
                                slots.map((slot,index) =><option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" disabled defaultValue={user?.displayName} className="input input-bordered w-full " />
                        <input type="text" name='email' placeholder="Email Address" disabled defaultValue={user?.email} className="input input-bordered w-full " />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full " />
                        <br />
                        <input className='btn btn accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;