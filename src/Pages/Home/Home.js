import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BlogPost from '../BlockPost/BlogPost';
import CardPrice from '../CardPrice/CardPrice';
import DoctorsIntroduce from '../DoctorsIntroduce/DoctorsIntroduce';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
            <About/>
            <Services/>
            <CardPrice/>
            <DoctorsIntroduce/>
            <BlogPost/>
        </div>
    );
};

export default Home;