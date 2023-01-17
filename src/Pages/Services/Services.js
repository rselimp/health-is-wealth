import React from 'react';
import { FaAmbulance, FaMicroscope, FaPills, FaProcedures, FaStethoscope, FaUser} from "react-icons/fa";
import Service from './Service';
import userimage from '../../img/Sample_User_Icon.png'
import image2 from '../../img/images-removebg-preview.png';
import image3 from '../../img/46196.png';
import image4 from '../../img/25253.png';
import image5 from '../../img/downloadpill-removebg-preview.png';
import image6 from '../../img/161068.png';

const Services = () => {

    const serviceData =[
        {
            id: 1,
            name: 'Emergency Care',
            description:'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit',
            img: userimage,
        },
        {
            id: 2,
            name: 'Operation & Surgery',
            description:'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit',
            img:image2,
        },
        {
            id: 3,
            name: 'Outdoor Checkup',
            description:'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit',
            img:image3
        },
        {
            id: 4,
            name: 'Ambulance Service',
            description:'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit',
            img:image4
        },
        {
            id: 5,
            name: 'Medicine & Pharmacy',
            description:'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit',
            img:image5,
        },
        {
            id: 6,
            name: 'Emergency Care',
            description:'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit',
            img:image6,
        }
    ]

    return (
        <div className='mt-10'>
            <div className='text-center mb-14'>
                <h4 className='text-accent uppercase mb-4 font-bold underline underline-offset-8'>Services</h4>
                <h1 className='text-5xl font-bold'>Excellent Medical <br /> Services</h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service => <Service key={service.id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;