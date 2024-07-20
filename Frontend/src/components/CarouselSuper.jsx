import { Swiper, SwiperSlide } from 'swiper/react';

 import 'swiper/css';
import 'swiper/css/navigation';

import '../index.css';

import { Autoplay, Navigation } from 'swiper/modules';

export default function CarouselSuper() {
  return (
    <>
      <div className="relative w-full h-[21rem]">
      <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={true} className="mySwiper">
          <SwiperSlide>
            {" "}
            <img
              src={"https://http2.mlstatic.com/D_NQ_714734-MLA77658770211_072024-OO.webp"}
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
                "https://http2.mlstatic.com/D_NQ_785241-MLA77658908515_072024-OO.webp"
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
                "https://http2.mlstatic.com/D_NQ_855413-MLA77496028746_072024-OO.webp"
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
                "https://http2.mlstatic.com/D_NQ_875137-MLA77658862035_072024-OO.webp"
              }
              alt="imagen"
              className="w-full h-full object-cover z-0 relative"
              style={{
                top: "0px",
              }}
            />
          </SwiperSlide>
        </Swiper>

       
      </div>
    </>
  );
}
