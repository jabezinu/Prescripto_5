import React, { useState } from 'react';
import {assets, specialityData} from '../assets/assets'
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {

    const [speciality, setSpeciality] = useState('')

  return (
    <div id='speciality'>
        <h1> Find by speciality </h1>
        <p>Simpley browse through our extesive list of trusted doctors, schedule your appointment hassle-free</p>
        <div>
            {specialityData.map((item, index) => (
                <Link key={index} to={`/doctors/${item.speciality}`}>
                    <img src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu