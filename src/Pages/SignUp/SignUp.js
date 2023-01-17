import React, { useContext, useEffect, useState } from 'react';
import { useForm} from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';


const SignUp = () => {
    const { register,formState,reset,formState:{ errors }, handleSubmit } = useForm();  
    const {createUser,updateUser} = useContext(AuthContext)
    const [signupError, setSignupError] = useState('')
     const[createdUserEmail, setCreatedUserEmail] = useState('')
    const[token] = useToken(createdUserEmail)
    const navigate = useNavigate();


    if(token){
        navigate('/')
    }
    const handleLogout = data =>{
        console.log(data)
        setSignupError('')
        createUser(data.email,data.password)
        
        .then(result =>{    
           const user = result.user;
           console.log(user)
           toast.success('User Created Successfully')
           
           const userInfo ={
            displayName:data.name
           }
           updateUser(userInfo)
           .then(() =>{
            saveUser(data.name,data.email);
            
           })

           .catch(error=>console.error(error))
        })
        .catch(error =>{
            console.log(error)
            setSignupError(error.message)
        })
    }

    const saveUser =(name,email) =>{
        const user ={name, email};
        fetch('https://health-is-wealth-server.vercel.app/users',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data =>{
        setCreatedUserEmail(email) 
        // getUserToken(email) 
               
        }) 
    }

    




  
    useEffect( () =>{
        if(formState.isSubmitSuccessful){
            reset({
                name:'',
                email:'',
                password: '',

            });
        }
    }, [formState,reset])



    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleLogout)}>

                    
                    <div className="form-control">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text"
                        {...register("name", {
                            required: "Name is required"
                            })} 
                            placeholder="Your Name" className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-400' role="alert">{errors.name?.message}</p>}
                    </div>
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
                            minLength: {value:6, message:'Password must be 6 characters or longer'},
                            pattern:{value:/(?=.*[A-Z].*[A-Z])/, message:'At lest two Uppercase letter'}
                        })}
                         placeholder="Password" className="input input-bordered w-full " />
                         {errors.password && <p className='text-red-400' role="alert">{errors.password?.message}</p>}
                       
                    </div>
                    
                    <input type="submit" className='btn bg-gradient-to-r from-cyan-500 to-blue-500 w-full mb-2 mt-4' value="SignUp" />  
                    {
                            signupError && <p className='text-red-400'>{signupError}</p>
                        }
                </form>
                <p>Already have an account<Link to='/login'> Please <span className='text-accent'>Login</span></Link></p>
                <div className="divider ">OR</div>
                
            </div>
        </div>
    );
};

export default SignUp;