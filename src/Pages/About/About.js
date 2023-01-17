import React, { useEffect } from 'react'
import aboutImage from '../../img/about.jpg'   
import { FaAmbulance, FaMicroscope, FaProcedures, FaUserMd } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() =>{
        Aos.init({duration:2000, once:true, easing:"ease"})
},[])

    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
               <div data-aos="fade-right">
               <img src={aboutImage} className=" rounded-lg w-full shadow-2xl" alt='' />
               </div>
                <div data-aos="fade-left">
                <h4 className="text-xl font-bold text-accent uppercase">About Us</h4>
                    <h1 className="text-5xl font-bold">Best Medical Care For <br /> Yourself and Your Family</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4 justify-items-center content-evenly content-center mb-4'>
                        <div className='rounded-lg bg-sky-100 px-8 py-8 w-full'>
                            <FaUserMd className='text-accent text-5xl mx-auto'></FaUserMd>
                            <p><span className=''>Qualifired</span> <br /><span>Doctors</span></p>
                        </div>
                        <div className='rounded-lg bg-sky-100 px-8 py-8 w-full'>
                            <FaProcedures className='text-accent text-5xl mx-auto'></FaProcedures>
                        <p><span className=''>Emergency</span> <br /><span>Services</span></p>
                        </div>
                        <div className='rounded-lg bg-sky-100 px-8 py-8 w-full'>
                            <FaMicroscope className='text-accent text-5xl mx-auto'></FaMicroscope>
                        <p><span className=''>Accurate</span> <br /><span>Texting</span></p>
                        </div>
                        <div className='rounded-lg bg-sky-100 px-8 py-8 w-full'>
                      
                        <FaAmbulance className='text-accent text-5xl mx-auto'></FaAmbulance>
                        <p><span className='mx-auto'>Free</span> <br /><span>Ambulance</span></p>  
                                   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
