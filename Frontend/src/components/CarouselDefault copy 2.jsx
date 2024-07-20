import img from "../assets/carouselHero.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import puerquillo from '../assets/puerquillo.jpg'

import 'swiper/css';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

export default function CarouselDefault() {
  return (
    <>
      <div className="relative w-full h-[28rem]">
      <Swiper 
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }} modules={[Navigation, Autoplay]} className="mySwiper">
         <SwiperSlide>
            {" "}
            <img
              src={puerquillo}
              alt="imagen"
              className="w-full h-full object-cover z-0 relative"
              style={{
                top: "0px",
              }}
            />
          </SwiperSlide>
         <SwiperSlide>
            {" "}
            <img
              src={img}
              alt="imagen"
              className="w-full h-full object-cover z-0 relative"
              style={{
                top: "0px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={
                "https://http2.mlstatic.com/D_NQ_945740-MLA77695503589_072024-OO.webp"
              }
              alt="imagen"
              className="w-full h-full object-cover z-0 relative"
              style={{
                top: "0px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={
                "https://http2.mlstatic.com/D_NQ_763289-MLA77657237199_072024-OO.webp"
              }
              alt="imagen"
              className="w-full h-full object-cover z-0 relative"
              style={{
                top: "0px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={
                "https://http2.mlstatic.com/D_NQ_945740-MLA77695503589_072024-OO.webp"
              }
              alt="imagen"
              className="w-full h-full object-cover z-0 relative"
              style={{
                top: "0px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={
                "https://http2.mlstatic.com/D_NQ_941982-MLA77491681060_072024-OO.webp"
              }
              alt="imagen"
              className="w-full h-full object-cover z-0 relative"
              style={{
                top: "0px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={
                "https://http2.mlstatic.com/D_NQ_743661-MLA77492689046_072024-OO.webp"
              }
              alt="imagen"
              className="w-full h-full object-cover z-0 relative"
              style={{
                top: "0px",
              }}
            />
          </SwiperSlide>
      </Swiper>
      <div className="bg-white p-8  rounded-s-full   swiper-button-next z-20"></div>
      <div className="bg-white p-8  rounded-e-full   swiper-button-prev z-20"></div>
        <div
          className="h-[28rem] w-full absolute inset-0  z-10"
          style={{
            background:
              "linear-gradient(0deg, rgb(219,219,230) 6%, rgb(219,219,230) 27%, rgba(0,0,0,0) 52%)",
          }}
        ></div>
      </div>
    </>
  );
}
