import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

import About from '../../Pages/About/About';
import Footer from '../../Sheard/Footer/Footer';
import Header from '../../Sheard/Header/Header';
import Navbar from '../../Sheard/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Navbar />
            <div className='hidden lg:block'>
            <About/>
            </div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                        <Outlet/>
                
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                      
                        <li><Link to='/dashboard'>My Appointments</Link></li>

                       {
                        isAdmin && <>
                        <li><Link to='/dashboard/allusers'>All users</Link></li>
                        <li><Link to='/dashboard/adddoctor'>Add Doctor</Link></li>
                        <li><Link to='/dashboard/managedoctors'>Manage Doctor</Link></li>
                        </>
                       }
                        
                    </ul>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;