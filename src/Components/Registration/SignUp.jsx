import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Home from '../assets/Home.png';



const SignUp = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        gender:'',
        age:'',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const registerUser = async (e) =>{
        e.preventDefault();
        
        const res = await fetch('http://localhost:8000/signUp', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data) 
        })

        if(res.status === 400){
            // Don't forget to use toaster instead
            alert('Invalid credentials')
        }else{
            const resData = await res.json()
            if(resData.token){
                localStorage.setItem('user:token', resData.token)
                localStorage.setItem('user:detail', JSON.stringify(resData.user))
                setData({});
                navigate('/');
            }
            
        }
        
    }


  return (
    <>
    <div className='flex bg-[#377D81] font-Inter relative'>
        <div className='w-[35%] h-screen text-white'>
            <div className='flex flex-col w-full h-[45%] item-strech'>
                <h1 className='text-6xl font-bold  text-center py-6 mt-10'>aspieByte</h1>
                <p className='text-xl font-bold px-10 max-w-[80%] mt-5'> Empowering Minds, Embracing Uniqueness: Your Journey, Your Pace, Our Adaptive Learning Space</p>
            </div>
        </div>    
        <div className='w-[65%] h-screen bg-[#303030] rounded-l-3xl'>
            <div className='flex flex-col h-full w-[95%] ml-12'>
                <form className='my-5 mx-10 p-5 text-[#E5E1DA]' onSubmit={registerUser}>
                    <h2 className='text-4xl font-bold py-4 ' >Create Account</h2>
                    <div className='flex py-4 justify-between'>
                        <input className ='rounded-lg p-2 w-[45%] bg-transparent border-[#CCCCCC]/[0.8] border ' type="text" value = {data.firstName} onChange={(e)=> setData({...data, firstName: e.target.value})}   placeholder = 'First Name'/>
                        <input className ='rounded-lg p-2 w-[45%] bg-transparent border-[#CCCCCC]/[0.8] border ' type="text" value = {data.lastName} onChange={(e)=> setData({...data, lastName: e.target.value})}   placeholder = 'Last Name'/>
                    </div>
                    <div className='flex py-2 justify-between'>
                        <select className ='rounded-lg p-2 w-[45%] bg-transparent border-[#CCCCCC]/[0.8] border' type="text" value = {data.gender} onChange={(e)=> setData({...data, gender: e.target.value})}   placeholder = 'Gender'>
                            <option className ='rounded-lg p-2 w-[45%] bg-[#303030] border-[#CCCCCC]/[0.8] border' value="">-- Select --</option>
                            <option className ='rounded-lg p-2 w-[45%] bg-[#303030] border-[#CCCCCC]/[0.8] border' value="male">Male</option>
                            <option className ='rounded-lg p-2 w-[45%] bg-[#303030] border-[#CCCCCC]/[0.8] border' value="female">Female</option>
                        </select>
                        <input className ='rounded-lg p-2 w-[45%] bg-transparent border-[#CCCCCC]/[0.8] border ' type="text" value = {data.age} onChange={(e)=> setData({...data, age: e.target.value})}   placeholder = 'Age'/>
                    </div>
                    <div className='py-3'>
                        <input className ='rounded-lg p-2 w-full bg-transparent border-[#CCCCCC]/[0.8] border ' type="text" value = {data.phoneNumber} onChange={(e)=> setData({...data, phoneNumber: e.target.value})}   placeholder = 'Phone Number'/>
                    </div>
                    <div className='py-3'>
                        <input className ='rounded-lg p-2 w-full bg-transparent border-[#CCCCCC]/[0.8] border ' type="email" value = {data.email} onChange={(e)=> setData({...data, email: e.target.value})}  placeholder = 'Email'/>
                    </div>
                    <div className='py-3'>
                        <input className ='rounded-lg p-2 w-full bg-transparent border-[#CCCCCC]/[0.8] border ' type="password" value = {data.password} onChange={(e)=> setData({...data, password: e.target.value})}  placeholder = 'Password'/>
                    </div>
                    <div className='py-3'>
                        <input className ='rounded-lg p-2 w-full bg-transparent border-[#CCCCCC]/[0.8] border ' type="password" value = {data.confirmPassword} onChange={(e)=> setData({...data, confirmPassword: e.target.value})}  placeholder = 'Confirm Password'/>    
                    </div>
                    <button className='rounded-md w-full mt-5 h-[50px] bg-[#377D81]' type = 'submit'>Create Account</button>
                    <div className='flex'>
                        <p className='px-1'>Already have an account?</p>
                        <Link><p className='text-[#377D81] underline'>Login</p></Link>
                    </div>
                    <div className='flex py-4 mt-1 justify-between'>
                        <div className='flex rounded-lg py-3 px-1 w-[45%] bg-transparent border-[#CCCCCC]/[0.8] border justify-center'>
                            <div className='px-3'><FaGoogle size={20}/></div> 
                            <input className ='border-none outline-none bg-transparent px-2' type="text"  placeholder = 'Sign up with Google'/>
                        </div>
                        <div className='flex rounded-lg py-3 w-[45%] bg-transparent border-[#CCCCCC]/[0.8] border justify-center '>
                            <div className='px-3'><FaApple size={20}/></div>  
                            <input className ='border-none outline-none bg-transparent px-2' type="text"  placeholder = 'Sign up with Apple'/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div className='w-full'>
        <img className = " w-[300px] h-[350px] absolute bottom-10 left-80" src={Home} alt="Home"/>
    </div>
    </>
  )
}

export default SignUp