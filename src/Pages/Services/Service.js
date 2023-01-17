import React from 'react';

const Service = ({service}) => {
    const {name, img,description} =service
    return (
        <div className="card bg-sky-100 shadow-xl">
            <figure className="px-10 pt-10">
                
            <img src={img} alt="" className="w-40 h-40" />
               
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default Service;