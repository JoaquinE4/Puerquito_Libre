import React from "react";
import Card from "./Card.jsx";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

 
// import required modules
import { Navigation  } from 'swiper/modules';

export default function Masvendidos() {
  return (
    <div className="h-[25.5rem] flex flex-col bg-white shadow-lg  rounded-lg col-[1/8]">
      <div className="flex items-center pl-6 pt-3 py-3 h-[4rem] gap-4">
        <h2 className="font-semibold text-lg ">Mas vendidos</h2>

        <Link to={"#"} className="text-blue-500  hover:text-blue-800 pt-1 font-normal  text-sm">
          Mostrar más vendidos
        </Link>
      </div>

      <div className="  flex  flex-row gap-12 h-[20rem] px-8    rounded-lg">
      <Swiper 
           initialSlide={2}  // Index 3 corresponde a la slide 4

         className='mySwiper'
         centeredSlides={true}
         spaceBetween={5}
         breakpoints={{ 640: { slidesPerView: 6 }, 1000: { slidesPerView: 5 } }}
         navigation={{
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         }}
                 modules={[Navigation ]}>
         <SwiperSlide className=' h-[20rem]'><Card /></SwiperSlide>
         <SwiperSlide className=' h-[20rem]'><Card /></SwiperSlide>
         <SwiperSlide className='h-[20rem]'><Card /></SwiperSlide>
         <SwiperSlide className='h-[20rem]'><Card /></SwiperSlide>
         <SwiperSlide className='h-[20rem]'><Card /></SwiperSlide>
         <SwiperSlide className='h-[20rem]'><Card /></SwiperSlide>
         <SwiperSlide className='h-[20rem]'><Card /></SwiperSlide>
         <SwiperSlide className='h-[20rem]'><Card /></SwiperSlide>
         <SwiperSlide className='h-[20rem]'><Card /></SwiperSlide>
         <SwiperSlide className='h-[20rem]'><Card /></SwiperSlide>
         <SwiperSlide className='h-[20rem]'><Card /></SwiperSlide>
      <div className="bg-white p-8  rounded-s-full   swiper-button-next  "></div>
       <div className="bg-white p-8  rounded-e-full   swiper-button-prev "></div>
     </Swiper>
      </div>
    </div>
  );
}
