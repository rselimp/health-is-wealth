import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { register,formState,reset,formState:{ errors }, handleSubmit } = useForm();

    const [loginError, setLoginError]  = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)
    const {singIn} = useContext(AuthContext)

   const from = location.state?.from?.pathname || '/'

    if(token){
        navigate(from,{replace:true});
    }

    const handleLogin = data =>{
        console.log(data)
        setLoginError('')
        singIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            setLoginUserEmail(data.email)
            
        })
        .catch(error =>{
            console.log(error)
            setLoginError(error.message)
            
        
        })

    }

    useEffect( () =>{
        if(formState.isSubmitSuccessful){
            reset({
                email: '',
                password: ''
            })
        }
    },[formState,reset])

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    
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
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                        {...register("password",{
                            required:"Password is required",
                            minLength: {value:6, message:'Password must be 6 characters or longer'}

                        })}
                         placeholder="Password" className="input input-bordered w-full " />
                         {errors.password && <p className='text-red-400' role="alert">{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password</span></label>
                    </div>
                    <div>
                        {
                            loginError && <p className='text-red-400'>{loginError}</p>
                        }
                    </div>
                    <input type="submit" className='btn bg-gradient-to-r from-cyan-500 to-blue-500 w-full mb-2' value="Login" />  
                </form>
                <p>New to Health is Wealth <Link to='/signup'><span className='text-accent'>Create an Account</span></Link></p>
                <div className="divider ">OR</div>
                <button className='btn btn-outline w-full '>CONTINUE WITH GOOGLE</button>
            </div>
        </div>



    );
};

export default Login;