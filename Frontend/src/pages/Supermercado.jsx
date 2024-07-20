import React from "react";
import CarouselSuper from "../components/CarouselSuper.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Supermercado() {
  return (
    <div>
      <Navbar />
      <CarouselSuper />
      <div className="text-md grid grid-cols-6 px-20 gap-10">
        <div className="col-span-6 slate-400 h-64 flex flex-col items-center justify-center">
          <h3 className="py-6 text-lg font-medium">COMPRÁ POR CATEGORÍA</h3>
          <div className="h-44 flex flex-row items-center gap-14">
            {[
              { src: "https://http2.mlstatic.com/D_Q_NP_637139-MLA54381687603_032023-G.webp", text: "CUIDADO PERSONAL" },
              { src: "https://http2.mlstatic.com/D_Q_NP_873890-MLA72092946143_102023-G.webp", text: "BEBÉS" },
              { src: "https://http2.mlstatic.com/D_Q_NP_742704-MLA54383412286_032023-G.webp", text: "LIMPIEZA" },
              { src: "https://http2.mlstatic.com/D_Q_NP_817721-MLA54381934061_032023-G.webp", text: "BEBIDAS" },
              { src: "https://http2.mlstatic.com/D_Q_NP_777324-MLA54381822603_032023-G.webp", text: "ALMACEN" },
              { src: "https://http2.mlstatic.com/D_Q_NP_704322-MLA54383412346_032023-G.webp", text: "MASCOTAS" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-3">
                <div className="h-28 w-28 rounded-full p-1 bg-white">
                  <img className="rounded-full" src={item.src} alt={item.text} />
                </div>
                <p className="text-xs">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-6 h-48 flex justify-center">
          <img className="hover:shadow-xl transition-all delay-100 object-contain" src="https://http2.mlstatic.com/D_NQ_NP_838670-MLA77657288399_072024-OO.webp" alt="dia amigo" />
        </div>

        <div className="col-span-6 gap-5 h grid  h-[32rem] grid-cols-2 grid-rows-2">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="h-[15rem]  hover:shadow-xl transition-all delay-100 w-full flex flex-row bg-white">
              <div className="h-60 w-[25rem] py-1 flex items-center justify-center">
                <img className="h-[14rem] w-[16rem]" src="https://http2.mlstatic.com/D_Q_NP_902251-MLU76106723101_042024-N.webp" alt="" />
              </div>
              <div className="flex flex-col px-4 items-center justify-center w-full">
                <p className="text-sm text-gray-500">
                  ACONDICIONADOR TRESEMME <br /> BRILLO LAMELAR 500 ML
                </p>
                <h4 className="text-gray-600 text-3xl font-semibold">$30.000</h4>
                <p className="text-xl text-gray-500 font-light">ANTES $50.000</p>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-6 flex flex-col h-[38rem]  items-center">
          <h3 className="py-8 text-xl text-center">CONOCE MÁS</h3>
          <div className="gap-5 h-[32rem] grid grid-cols-2 grid-rows-2">
            {[
              { src: "https://http2.mlstatic.com/D_NQ_NP835997-MLA54382755603_032023-B.webp", text: "BEBIDAS" },
              { src: "https://http2.mlstatic.com/D_NQ_NP957309-MLA69834198075_062023-B.webp", text: "MASCOTAS" },
              { src: "https://http2.mlstatic.com/D_NQ_NP679669-MLA54384337278_032023-B.webp", text: "CUIDADO PERSONAL" },
              { src: "https://http2.mlstatic.com/D_NQ_NP732151-MLA69859908925_062023-B.webp", text: "INFUSIONES" },
            ].map((item, index) => (
              <div key={index} className="hover:shadow-xl transition-all delay-100 rounded-md w-full flex flex-col bg-slate-500">
                <div className="h-52 w-full">
                  <img className="object-cover h-full w-full" src={item.src} alt={item.text} />
                </div>
                <div className="flex items-center justify-center h-12 bg-slate-50">
                  <h3 className="text-gray-700 p-2 text-sm font-semibold">{item.text}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-6 h-[44rem] flex flex-col items-center">
          <h3 className="text-xl text-center py-9">SEGUI DESCUBRIENDO</h3>
          <div className="gap-8 items-center justify-center h-96 grid grid-cols-3">
            {[
              { src: "https://http2.mlstatic.com/D_NQ_NP890888-MLA72943633917_112023-B.webp", text: "FESTEJOS" },
              { src: "https://http2.mlstatic.com/D_NQ_NP805023-MLA54516954159_032023-B.webp", text: "BEBES" },
              { src: "https://http2.mlstatic.com/D_NQ_NP646528-MLA54516910247_032023-B.webp", text: "DESPENSA" },
              { src: "https://http2.mlstatic.com/D_NQ_NP992236-MLA54516910267_032023-B.webp", text: "DESECHABLES" },
              { src: "https://http2.mlstatic.com/D_NQ_NP871883-MLA54516828291_032023-B.webp", text: "INCONTINENCIA" },
              { src: "https://http2.mlstatic.com/D_NQ_NP629586-MLA54516966159_032023-B.webp", text: "LIMPIEZA Y DESINFECCION" },
            ].map((item, index) => (
              <div key={index} className="hover:shadow-xl transition-all delay-100 w-full bg-slate-500 rounded-md">
                <div className="h-56 w-full">
                  <img className="h-full w-full object-cover" src={item.src} alt={item.text} />
                </div>
                <div className="h-14 flex items-center justify-center bg-slate-50 rounded-b-md">
                  <h3 className="text-gray-600">{item.text}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
