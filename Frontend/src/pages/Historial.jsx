import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function Historial() {
  return (
    <div className='h-screen  flex flex-col items-center'>
    <Navbar/>
    <div className='w-10/12  flex flex-col   ' >
      <div className='flex  h-[8rem] items-center justify-between'>
        <h3 className='text-2xl font-semibold'>Tu historial</h3>
        <p className='text-blue-500'>Administrar</p>
      </div >
      <div className='w-full h-[44rem] bg-white'></div>
    <br />
      <Footer/>
      <br />
    </div>
    </div>
  )
}
