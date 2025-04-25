import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg py-4 px-6 md:px-10 lg:px-20'>
      {/* ----------Left side -------------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        {/*       */}
        <p>
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div>
          <img src={assets.group_profiles} alt="" />
          <p>Simply browse through our extesive list of trusted doctors, <br /> schedul your appointment hassle-free.</p>
        </div>
        <a href="">
          Book appointment <img src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* ----------Right side -------------- */}
      <div>
        <img src={assets.header_img_1} alt="" />
      </div>
    </div>
  )
}

export default Header
