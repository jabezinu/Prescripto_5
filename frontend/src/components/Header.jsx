import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg  px-6 md:px-10 lg:px-20'>
      {/* ----------Left side -------------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img src={assets.group_profiles} alt="" />
          <p>Simply browse through our extesive list of trusted doctors, <br /> schedul your appointment hassle-free.</p>
        </div>
        <a href="">
          Book appointment <img src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* ----------Right side -------------- */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rouded-lg' src={assets.header_img_1} alt="" />
      </div>
    </div>
  )
}

export default Header
