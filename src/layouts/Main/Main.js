import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../../Pages/Banner/Banner';
import Footer from '../../Sheard/Footer/Footer';
import Header from '../../Sheard/Header/Header';
import Navbar from '../../Sheard/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Header/>
          <Navbar/>
          <Outlet/>
          <Footer/>  
        </div>
    );
};

export default Main;