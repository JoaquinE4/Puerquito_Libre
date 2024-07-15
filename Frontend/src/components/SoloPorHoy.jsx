import React from 'react'
import { Link } from 'react-router-dom'

export default function SoloPorHoy() {
  return (
    <div className='h-[16.5rem] rounded-md col-[1/8] grid items-center bg-black grid-col-5'>
        <div className='col-[1/2] bg-black  '>
        <img className=' h-[16.5rem] w-[1' src="https://http2.mlstatic.com/D_NQ_931902-MLA77524714099_072024-OO.jpg" alt="" />
        </div>
        <div className='col-[2/6] text-white gap-4 h-[16.5rem] flex flex-col justify-center bg-black'>
            <p className='text-sm'>PRODUCTOS INCREÍBLES</p>
            <h3 className='text-2xl'>APROVECHALOS <br/>SOLO POR HOY</h3>
            <Link><span className='text-lg'>IR A TIENDA {">"}</span></Link>

        </div>
      
    </div>
  )
}
