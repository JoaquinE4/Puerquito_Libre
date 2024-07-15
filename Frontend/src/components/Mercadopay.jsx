import React from 'react'
import ReactPlayer from  'react-player'

export default function Mercadopay() {
  return (
    <div className='col-[1/7] grid-col-6 grid   h-[24rem] rounded-lg pay'>
        <div className='col-[1/3]   h-full'>
            <h3 className='text-blue-900 bg-[#ffe600] pl-6 font-semibold mt-20 ml-8 px-3 py-2 rounded-3xl w-[7rem] '>Puerquito pay</h3>
            <div className='flex flex-col items-start pl-8 gap-8 justify-center h-2/3 '>
              <h3 className='text-white text-2xl'>Ahora podés ver <br />series y peliculas</h3>
              <span className='text-white w-[3.5rem] px-2 bg-green-500 py-1 rounded-2xl text-xs font-normal'>GRATIS</span>

              <button className='text-gray-300 bg-gray-500 text-sm px-2 py-1 rounded-lg'>Ir a Mercado Pay</button>
            </div>

        </div>
        <div className='col-[3/7]   flex items-center justify-end  h-full'>
            <ReactPlayer muted={true} loop={true} controls={false} playing url='https://www.youtube.com/watch?v=WCtJ_EZQQBM&pp=ygUKdHJhaWxlciA0aw%3D%3D' className='h-3/4  w-3/4'></ReactPlayer>
        </div>

    </div>
  )
}
