import React, { useEffect } from 'react'
import planilla from '../assets/planilla.png'
import { useAuth } from '../context/AuthContex.jsx'

export default function FormRegister({ onClick }) {
 
 
  return (
    <div className='h-[32rem] w-[34rem] grid grid-col-2 grid-rows-7 shadow-lg rounded-xl bg-white'>
        <div className='col-[1/2] mt-8 flex items-start justify-center row-[1/3]'>
            <img src={planilla} alt="Planilla" />
        </div>
        <div className='col-[1/2] flex flex-col  gap-5 text-center row-[4/5]'>
            <h2 className='text-3xl '>Para crear tu cuenta te pediremos algunos datos</h2>
            <p>Solo te tomará unos minutos.</p>

        </div>
        <div className='col-[1/2] flex flex-col items-center gap-4 row-[6/7]'>

            <button onClick={onClick} className='rounded-md px-4 w-[14rem] py-3 text-white hover:bg-blue-200 hover:text-blue-500 bg-blue-500 '>Soy persona fisica</button>
            <button className='rounded-md px-4 w-[14rem] py-3 text-blue-700 bg-blue-200 hover:bg-blue-700 hover:text-blue-200 '>Soy persona juridica</button>

        </div>

    </div>
  )
}
