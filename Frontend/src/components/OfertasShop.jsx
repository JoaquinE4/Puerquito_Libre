import React from "react";
import {Swiper, SwiperSlide } from "swiper/react";
 
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Card from "./Card.jsx";

export default function OfertasShop() {
  return (
    <>
      <div className="w-full bg-white h-[9rem] grid grid-col-7">
        <div className="col-[1/3] w-[20rem] flex flex-col items-center   justify-center  ">
          <h3 className="text-xl font-medium text-gray-800">Ofertas</h3>
          <p className="text-sm text-gray-800">
            ¡Econtrá precios increíbles cada día!
          </p>
        </div>
        <div className="col-[3/8] verflow-hidden w-[55rem]  ">
          <Swiper
            initialSlide={2}  
            className="mySwiper  "
            spaceBetween={3}
            centeredSlides={true}
             breakpoints={{
              640: { slidesPerView: 6 },
             1000: { slidesPerView: 5 },
            }}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            modules={[Navigation]}
          >
            <SwiperSlide>
                <div className=" border-b-4 rounded-sm border-blue-500 flex flex-col items-center justify-center h-full w-[9rem]">
                  <div className="h-[5rem]"></div>
                  <h3 className="text-sm ">Todas las <br /> Ofertas </h3>
                 </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=" border-b-4 rounded-sm border-blue-500 flex flex-col items-center justify-center h-full w-[9rem]">
            <div className="h-[5rem]"></div>
                     <h3 className="text-sm ">Ofertas <br /> Relampago</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=" border-b-4 rounded-sm border-blue-500 flex flex-col items-center justify-center h-full w-[9rem]">
            <div className="h-[5rem]"></div>
                    <h3 className="text-sm "> Martes de <br /> SUPLEMENTOS</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=" border-b-4 rounded-sm border-blue-500 flex flex-col items-center justify-center h-full w-[9rem]">
            <div className="h-[5rem]"></div>
                  <h3 className="text-sm ">Celulares</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=" border-b-4 rounded-sm border-blue-500 flex flex-col items-center justify-center h-full w-[9rem]">
            <div className="h-[5rem]"></div>
              <h3 className="text-sm ">Liquidacion</h3>
                </div>
            </SwiperSlide>
            <div className="swiper-next">{}</div>
            <div className="swiper-prev"></div>
          </Swiper>
        </div>
      </div>
      <div className="grid grid-col-4">
        <div className="col-[1/2] h-[90rem] w-[22rem] bg-slate- 00 "></div>
        <div className="col-[2/5] grid grid-col-3 gap-4 pt-10 px-6  h-[90rem] bg-slate-5  ">
            
            <div className="col-[1/2] rounded-md h-[26rem] w-[18rem] p-4 bg-white "><Card/></div>
            <div className="col-[2/3] rounded-md h-[26rem] w-[18rem] p-4 bg-white "><Card/></div>
            <div className="col-[3/4] rounded-md h-[26rem] w-[18rem] p-4 bg-white "><Card/></div>
            <div className="col-[1/2] rounded-md h-[26rem] w-[18rem] p-4 bg-white "><Card/></div>
            <div className="col-[2/3] rounded-md h-[26rem] w-[18rem] p-4 bg-white "><Card/></div>
            <div className="col-[3/4] rounded-md h-[26rem] w-[18rem] p-4 bg-white "><Card/></div>
            <div className="col-[1/2] rounded-md h-[26rem] w-[18rem] p-4 bg-white "><Card/></div>
            <div className="col-[2/3] rounded-md h-[26rem] w-[18rem] p-4 bg-white "><Card/></div>
            <div className="col-[3/4] rounded-md h-[26rem] w-[18rem] p-4 bg-white "><Card/></div>

        </div>

      </div>
    </>
  );
}
