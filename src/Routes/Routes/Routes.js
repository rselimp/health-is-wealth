import { Children } from "react"
import { createBrowserRouter } from "react-router-dom"
import AllUsers from "../../Dashboard/AllUsers/AllUsers"
import AddDoctor from "../../Dashboard/Dashboard/AddDoctor/AddDoctor"
import ManageDoctors from "../../Dashboard/Dashboard/ManageDoctors/ManageDoctors"
import Payment from "../../Dashboard/Payment/Payment"
import CardPrice from "../../Pages/CardPrice/CardPrice"


import DashboardLayout from "../../layouts/DashboradLayout/DashboardLayout"
import Main from "../../layouts/Main/Main"
import Appointment from "../../Pages/Appointment/Appointment"
import Home from "../../Pages/Home/Home"
import Login from "../../Pages/Login/Login"
import MyAppointment from "../../Pages/MyAppointments/MyAppointment"


import SignUp from "../../Pages/SignUp/SignUp"
import AdminRoute from "../AdminRoute/AdminRoute"

import PrivateRoute from "../PrivateRoute/PrivateRoute"
import Services from "../../Pages/Services/Services"

const router =createBrowserRouter([

    {
        path:'/',
        element: <Main/>,
        children:[
            {
                path:'/',
                element:<Home/>            
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<SignUp/>

            },
            {
                path:'/appointment',
                element:<Appointment/>
            },
            {
                path:'/cardprice',
                element:<CardPrice></CardPrice>
            },
            {
                path:'/services',
                element:<Services></Services>
            }
            
        ]
        
    }
    ,
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyAppointment/>
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/adddoctor',
                element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path:'/dashboard/managedoctors',
                element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader: ({params}) => fetch(`https://health-is-wealth-server.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])

export default router;