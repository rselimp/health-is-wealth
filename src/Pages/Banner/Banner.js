import React from 'react';
import { Link } from 'react-router-dom';
import imag1 from '../../img/hero.jpg';
import imag2 from '../../img/price-3.jpg';
import imag3 from '../../img/price-4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={imag1} className="" alt='' />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-10 lg:left-20 top-1/4 pb-20">
      {/* <p className='text-xl'>Welcome to health is wealth <br /></p> */}
      <br />
      <h1 className=' text-sm text-accent underline underline-offset-8 decoration-4 uppercase font-bold lg:text-2xl'> 
      Welcome to Health is Wealth
      </h1>  
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-10 lg:left-20 top-1/3">
      {/* <p className='text-xl'>Welcome to health is wealth <br /></p> */}
      <br />
      <h1 className='lg:text-7xl text-white font-bold'>Best HealthCare <br />
      Solution In Your City
      </h1>  
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 left-10 lg:left-20 top-1/2 lg:mt-0 mt-10 lg:ml-0">
      {/* <p className='text-xl'>Welcome to health is wealth <br /></p> */}
     
      <Link to='/appointment'><button className="btn btn-outline btn-warning">Appointment</button> </Link>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={imag2} className="w-full" alt='' />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={imag3} className="w-full" alt=''/>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>  
    );
};

export default Banner;