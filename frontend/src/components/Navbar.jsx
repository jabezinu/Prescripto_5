import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to="/">
                {/* <hr className='border-none outline-none h-0.5 bg-primary w-1/5 m-auto hidden'/> */}
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden'/>
            </NavLink>
            <NavLink to="/doctors">
                {/* <hr className='border-none outline-none h-0.5 bg-primary w-1/5 m-auto hidden'/> */}
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to="/about">
                {/* <hr className='border-none outline-none h-0.5 bg-primary w-1/5 m-auto hidden'/> */}
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to="/contact">
                {/* <hr className='border-none outline-none h-0.5 w-1/5 m-auto hidden bg-primary'/> */}
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-primary'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full hidden md:block font-light'>Create Account</button>
        </div>
    </div>
  )
}

export default Navbar