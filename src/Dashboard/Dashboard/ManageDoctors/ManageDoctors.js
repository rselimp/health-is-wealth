import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../../Pages/Loading/Loading';
import ModalConfirmation from '../../../Sheard/ModalConfirmation/ModalConfirmation';

const ManageDoctors = () => {
    const[deletingDoctor, setDeletingDoctor] = useState(null)

    const closeModal =() =>{
        setDeletingDoctor(null)
    }

    
    const { data: doctors, isLoading,refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://health-is-wealth-server.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data


            }
            catch (error) {

            }
        }
    })

    const handleDeleteDoctor = doctor =>{
        fetch(`https://health-is-wealth-server.vercel.app/doctors/${doctor._id}`,{
            method: 'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.deletedCount >0){
            refetch();
            toast.success(`Doctor ${doctor.name} deleted successfully`)
            }
            
        })
    }








    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Specialty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctors?.map((doctor, i) => <tr key={doctor._id}>
                            <th>{i + 1}</th>
                            <td><div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={doctor.image} alt='' />
                                </div>
                            </div></td>
                            <td>{doctor.name}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.specialty}</td>
                            
                            <td><label onClick={() =>setDeletingDoctor(doctor)} htmlFor="my-modal" className="btn btn-sm btn-warning">Delete</label></td>
                        </tr>)
                    }

                </tbody>
            </table>
            
        </div>
        {
            deletingDoctor && <ModalConfirmation
            title={`Are you sure you want to delete?`}
            message={`If you delete ${deletingDoctor.name}.It cannot be undone`}
            closeModal ={closeModal}
            handleDeleteDoctor={handleDeleteDoctor}
            modalData ={deletingDoctor}
            >


            </ModalConfirmation>
        }
        </div>
    );
};

export default ManageDoctors;