import img from "../assets/carouselHero.webp";
import { Swiper, SwiperSlide } from 'swiper/react';

 import 'swiper/css';
import 'swiper/css/navigation';

import '../index.css';

import { Navigation } from 'swiper/modules';

export default function CarouselDefault() {
  return (
    <>
      <div className="relative w-full h-[28rem]">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
        </Swiper>

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
