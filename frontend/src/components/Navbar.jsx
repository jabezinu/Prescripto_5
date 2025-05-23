import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    // cosnt [showMenu, setShowMenu] = useState(true);
    const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to="/">
                <li className='py-1 hover:text-primary'>HOME</li>
                <hr className='mb-1 border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden'/>
                <hr className='border-none outline-none h-0.5 bg-primary w-1/5 m-auto hidden'/>
            </NavLink>
            <NavLink to="/doctors">
                <li className='py-1 hover:text-primary'>ALL DOCTORS</li>
                <hr className='mb-1 border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                <hr className='border-none outline-none h-0.5 bg-primary w-1/5 m-auto hidden'/>
            </NavLink>
            <NavLink to="/about">
                <li className='py-1 hover:text-primary'>ABOUT</li>
                <hr className='mb-1 border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                <hr className='border-none outline-none h-0.5 bg-primary w-1/5 m-auto hidden'/>
            </NavLink>
            <NavLink to="/contact">
                <li className='py-1 hover:text-primary'>CONTACT</li>
                <hr className='mb-1 border-none outline-none h-0.5 w-3/5 m-auto hidden bg-primary'/>
                <hr className='border-none outline-none h-0.5 w-1/5 m-auto hidden bg-primary'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
          {
            token 
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5 ' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-200 rounded flex flex-col gap-4 p-4'>
                  <p onClick={()=> navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={()=> navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointment</p>
                  <p onClick={()=> setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full hidden md:block font-light'>Create Account</button>
          }
            
        </div>
    </div>
  )
}

export default Navbar
