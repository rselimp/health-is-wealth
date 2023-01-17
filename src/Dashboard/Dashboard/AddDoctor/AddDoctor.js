import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Pages/Loading/Loading';

const AddDoctor = () => {
    const { register, formState, reset, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey)
    const navigate = useNavigate()

    const {data: specialties, isLoading} = useQuery({
        queryKey: ['specialty'],
        queryFn: async() =>{
          const res= await  fetch('https://health-is-wealth-server.vercel.app/appointmentSpecialty');
          const data = await res.json()
          return data
        }
    })
    const handleAddDoctor = data => {
        console.log(data)
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method : 'POST',
            body: formData
        })
        .then(res =>res.json())
        .then(imageData =>{
            if(imageData.success){
                console.log(imageData.data.url)
                const doctor ={
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imageData.data.url
                }
                fetch('https://health-is-wealth-server.vercel.app/doctors',{
                    method: 'POST',
                    headers:{
                        'content-type' : 'application/json',
                        authorization:  `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(doctor)
                })
                .then(res =>res.json())
                .then(result =>{
                    console.log(result)
                    toast.success(`${data.name} is added successfully`)
                    navigate('/dashboard/managedoctors')
                })
            }

        })
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h1 className='text-3xl'>Add Doctor</h1>

            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className="form-control">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text"
                        {...register("name", {
                            required: "Name is required"
                        })}
                        placeholder="Your Name" className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-400' role="alert">{errors.name?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="text"
                        {...register("email", {
                            required: "Email Address is required"
                        })}
                        placeholder="Your email" className="input input-bordered w-full " />
                    {errors.email && <p className='text-red-400' role="alert">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Specialty</span></label>
                    <select 
                    {...register('specialty')}
                    className="select select-bordered w-full max-w-xs">

                        {
                            specialties.map(specialty =><option
                            key={specialty._id}
                            value={specialty.name}
                            
                            >{specialty.name}</option>)
                        }
                        
                        
                    </select>
                </div>
                 <div className="form-control">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="file"
                        {...register("image", {
                            required: "Photo is required"
                        })}
                        placeholder="Your Name" className="input input-bordered w-full " />
                    {errors.img && <p className='text-red-400' role="alert">{errors.img?.message}</p>}
                </div>       
                <input type="submit" className='btn bg-gradient-to-r from-cyan-500 to-blue-500 w-full mb-2 mt-4' value="Add Doctor" />


            </form>
        </div>
    );
};

export default AddDoctor;