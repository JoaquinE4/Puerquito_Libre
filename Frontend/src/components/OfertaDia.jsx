import React from 'react'
import Card from './Card.jsx'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

 
// import required modules
import { Navigation  } from 'swiper/modules';

export default function OfertaDia() {
  return (
    <>
    <div className='col-[1/3] h-[28rem] p-2 bg-white shadow-lg   rounded-lg'>
    <h2 className="font-semibold text-lg pl-4 pt-3">Oferta del día</h2>

    <Card/></div>

    <div className='col-[3/8] flex  flex-col gap-1 h-[28rem]  bg-white shadow-lg   rounded-lg'>
           <div className='flex items-center pl-6 pt-3 gap-4'>

            <h2 className="font-semibold text-lg ">Oferta </h2> 
            
          <Link to={"/ofertas"} className="text-blue-500  hover:text-blue-800 pt-1 font-normal  text-sm">
            Mostrar más ofertas
          </Link>
        
    
           </div>
           <div className='flex bg-slate-5  items-center justify-center w-full h-full'>
    <Swiper 
                    initialSlide={1}  // Index 3 corresponde a la slide 4

        className='mySwiper'
        centeredSlides={true}
        spaceBetween={5}
        breakpoints={{ 640: { slidesPerView: 3 }, 1000: { slidesPerView: 3 } }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
                modules={[Navigation ]}>
        <SwiperSlide className=' h-[24rem]'><Card /></SwiperSlide>
        <SwiperSlide className=' h-[24rem]'><Card /></SwiperSlide>
        <SwiperSlide className='h-[24rem]'><Card /></SwiperSlide>
        <SwiperSlide className='h-[24rem]'><Card /></SwiperSlide>
        <SwiperSlide className='h-[24rem]'><Card /></SwiperSlide>
        <SwiperSlide className='h-[24rem]'><Card /></SwiperSlide>
     <div className="bg-white p-8  rounded-s-full   swiper-button-next  "></div>
      <div className="bg-white p-8  rounded-e-full   swiper-button-prev "></div>
    </Swiper>
</div>
    </div>
      
    </>
  )
}
