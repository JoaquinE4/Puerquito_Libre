import React from "react";
import CarouselSuper from "../components/CarouselSuper.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Supermercado() {
  return (
    <div>
      <Navbar />
      <CarouselSuper />
      <div className="  text-md grid grid-cols-6 px-20 gap-10     ">
        <div className="col-[1/7]  slate-400 h-[16rem] items-center justify-center flex flex-col">
          <h3 className="py-6 text-lg font-medium">COMPRÁ POR CATEGORÍA</h3>
          <div className="h-[11rem]  gap-14 items-center flex flex-row">
            <div className="flex  gap-3 flex-col items-center justify-center">
              <div className="h-[7rem] rounded-full p-1 bg-white w-[7rem]">
                <img
                  className="rounded-full"
                  src="https://http2.mlstatic.com/D_Q_NP_637139-MLA54381687603_032023-G.webp"
                  alt=""
                />
              </div>
              <p className=" text-xs">CUIDADO PERSONAL</p>
            </div>
            <div className="flex  gap-3 flex-col items-center justify-center">
              <div className="h-[7rem] rounded-full p-1 bg-white w-[7rem]">
                <img
                  className="rounded-full"
                  src="https://http2.mlstatic.com/D_Q_NP_873890-MLA72092946143_102023-G.webp"
                  alt=""
                />
              </div>
              <p className=" text-xs">BEBËS</p>
            </div>
            <div className="flex  gap-3 flex-col items-center justify-center">
              <div className="h-[7rem] rounded-full p-1 bg-white w-[7rem]">
                <img
                  className="rounded-full"
                  src="https://http2.mlstatic.com/D_Q_NP_742704-MLA54383412286_032023-G.webp"
                  alt=""
                />
              </div>
              <p className=" text-xs">LIMPIEZA</p>
            </div>
            <div className="flex  gap-3 flex-col items-center justify-center">
              <div className="h-[7rem] rounded-full p-1 bg-white w-[7rem]">
                <img
                  className="rounded-full"
                  src="https://http2.mlstatic.com/D_Q_NP_817721-MLA54381934061_032023-G.webp"
                  alt=""
                />
              </div>
              <p className=" text-xs">BEBIDAS</p>
            </div>
            <div className="flex  gap-3 flex-col items-center justify-center">
              <div className="h-[7rem] rounded-full p-1 bg-white w-[7rem]">
                <img
                  className="rounded-full"
                  src="https://http2.mlstatic.com/D_Q_NP_777324-MLA54381822603_032023-G.webp"
                  alt=""
                />
              </div>
              <p className=" text-xs">ALMACEN</p>
            </div>
            <div className="flex  gap-3 flex-col items-center justify-center">
              <div className="h-[7rem] rounded-full p-1 bg-white w-[7rem]">
                <img
                  className="rounded-full"
                  src="https://http2.mlstatic.com/D_Q_NP_704322-MLA54383412346_032023-G.webp"
                  alt=""
                />
              </div>
              <p className=" text-xs">MASCOTAS</p>
            </div>
          </div>
        </div>

        <div className="col-[1/7] h-[12rem] object-contain  ">
          <img
            className=" hover:shadow-xl transition-all delay-100 "
            src="https://http2.mlstatic.com/D_NQ_NP_838670-MLA77657288399_072024-OO.webp"
            alt="dia amigo"
          />
        </div>

        <div className="col-[1/7] gap-5 h-[32rem] w-full grid grid-col-4 grid-rows-2">
          <div className=" col-[1/3] hover:shadow-xl transition-all delay-100  w-[38em] flex flex-row row-[1/2]">
            <div className="h-[15.4rem] flex items-center justify-center bg-white w-[18em]">
              <img
                src="https://http2.mlstatic.com/D_Q_NP_902251-MLU76106723101_042024-N.webp"
                alt=""
              />
            </div>
            <div className="bg-white flex flex-col px-4 items-enter justify-center w-[23rem]">
              <p className="text-sm text-gray-500">
                ACONDICIONADOR TRESEMME <br /> BRILLO LAMELAR 500 ML{" "}
              </p>
              <h4 className="text-gray-600 text-3xl font-semibold">$30.000</h4>
              <p className="text-xl text-gray-500 font-light">ANTES $50.000</p>
            </div>
          </div>
          <div className=" col-[3/5]   hover:shadow-xl transition-shadow delay-100   w-[38em] row-[1/2]">
            <div className="col-[1/3] bg- w-full flex flex-row row-[1/2]">
              <div className="col-[1/3]   w-full flex flex-row row-[1/2]">
                <div className="h-[15.4rem] flex items-center justify-center bg-white  w-[23rem]">
                  <img
                    src="https://http2.mlstatic.com/D_Q_NP_937469-MLA50608264473_072022-N.webp"
                    alt=""
                  />
                </div>
                <div className="bg-white flex flex-col   px-4 items-enter justify-center w-2/4">
                  <p className="text-sm text-gray-500">
                    ACONDICIONADOR TRESEMME <br /> BRILLO LAMELAR 500 ML{" "}
                  </p>
                  <h4 className="text-gray-600 text-3xl font-semibold">
                    $30.000
                  </h4>
                  <p className="text-xl text-gray-500 font-light">
                    ANTES $50.000
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className=" col-[1/3]  hover:shadow-xl transition-shadow delay-100  w-[38em]   row-[2/3]">
            <div className="col-[1/3] bg-sl w-full flex flex-row row-[1/2]">
              <div className="h-[15.4rem] flex items-center justify-center bg-white w-[18em]">
                <img
                  src="https://http2.mlstatic.com/D_Q_NP_753868-MLA47764755607_102021-N.webp"
                  alt=""
                />
              </div>
              <div className="bg-white flex flex-col px-4 items-enter justify-center  w-[23rem]">
                <p className="text-sm text-gray-500">
                  ACONDICIONADOR TRESEMME <br /> BRILLO LAMELAR 500 ML{" "}
                </p>
                <h4 className="text-gray-600 text-3xl font-semibold">
                  $30.000
                </h4>
                <p className="text-xl text-gray-500 font-light">
                  ANTES $50.000
                </p>
              </div>
            </div>{" "}
          </div>
          <div className=" col-[3/5]  hover:shadow-xl transition-shadow delay-100   w-[38em] row-[2/3]">
            <div className="col-[1/3]  0 w-full flex flex-row row-[1/2]">
              <div className="h-[15.4rem] flex items-center justify-center bg-white w-[18em]">
                <img
                  src="https://http2.mlstatic.com/D_Q_NP_716402-MLA69756533443_062023-N.webp"
                  alt=""
                />
              </div>
              <div className="bg-white flex flex-col px-4 items-enter justify-center  w-[23rem]">
                <p className="text-sm text-gray-500">
                  ACONDICIONADOR TRESEMME <br /> BRILLO LAMELAR 500 ML{" "}
                </p>
                <h4 className="text-gray-600 text-3xl font-semibold">
                  $30.000
                </h4>
                <p className="text-xl text-gray-500 font-light">
                  ANTES $50.000
                </p>
              </div>
            </div>{" "}
          </div>
        </div>

        <div className="col-[1/7] flex flex-col">
          <h3 className="py-8 text-xl text-center">CONOCE MÁS</h3>
          <div className=" gap-5 h-[34rem] grid grid-col-4 grid-rows-2">
            <div className="hover:shadow-xl transition-all delay-100 order rounded-md col-[1/3] w-[38rem] flex flex-col bg-slate-500 row-[1/2]">
              <div className="h-[13.4rem] w-[38rem]">
                <img
                  className="object-cover h-[13.4rem] w-[38rem]"
                  src="https://http2.mlstatic.com/D_NQ_NP835997-MLA54382755603_032023-B.webp"
                  alt="ss"
                />
              </div>
              <div className="flex items-center justify-center h-[3rem] bg-slate-50">
                <h3 className="text-gray-700 p-2 text-sm font-semibold">
                  BEBIDAS
                </h3>
              </div>
            </div>
            <div className="hover:shadow-xl transition-all delay-100 order rounded-md col-[3/5] w-[38rem] bg-slate-500 row-[1/2]">
              <div className="h-[13.4rem] w-[38rem]">
                <img
                  className="object-cover h-[13.4rem] w-[38rem]"
                  src="https://http2.mlstatic.com/D_NQ_NP957309-MLA69834198075_062023-B.webp"
                  alt="ss"
                />
              </div>
              <div className="flex items-center justify-center h-[3rem] bg-slate-50">
                <h3 className="text-gray-700 p-2 text-sm font-semibold">
                  MASCOTAS
                </h3>
              </div>{" "}
            </div>
            <div className="hover:shadow-xl transition-all delay-100 order rounded-md col-[1/3] bg-slate-500 w-[38rem] row-[2/3]">
              <div className="h-[13.4rem] w-[38rem]">
                <img
                  className="object-cover h-[13.4rem] w-[38rem]"
                  src="https://http2.mlstatic.com/D_NQ_NP679669-MLA54384337278_032023-B.webp"
                  alt="ss"
                />
              </div>
              <div className="flex items-center justify-center h-[3rem] bg-slate-50">
                <h3 className="text-gray-700 p-2 text-sm font-semibold">
                  CUIDADO PERSONAL
                </h3>
              </div>
            </div>
            <div className="hover:shadow-xl transition-all delay-100 order rounded-md col-[3/5] bg-slate-500 w-[38rem] row-[2/3]">
              <div className="h-[13.4rem] w-[38rem]">
                <img
                  className="object-cover h-[13.4rem] w-[38rem]"
                  src="https://http2.mlstatic.com/D_NQ_NP732151-MLA69859908925_062023-B.webp"
                  alt="ss"
                />
              </div>
              <div className="flex items-center justify-center h-[3rem] bg-slate-50">
                <h3 className="text-gray-700 p-2 text-sm font-semibold">
                  INFUCIONES
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-center justify-evenly col-[1/7]">
          <h3 className="text-xl text-center py-9">SEGUI DESCUBRIENDO</h3>
          <div className=" gap-8 items-center justify-center pl-6   h-[36rem] grid grid-col-6 grid-rows-2">
            <div className="hover:shadow-xl transition-all delay-100 col-[1/3] w-[25rem]  bg-slate-500 row-[1  ] rounded-md">
              <div className="h-[13.9rem] ">
                <img
                  className=" h-[13.9rem] w-[32rem] "
                  src="https://http2.mlstatic.com/D_NQ_NP890888-MLA72943633917_112023-B.webp"
                  alt=""
                />
              </div>
              <div className="h-[3.5rem] flex  items-center justify-center rounded-b-md bg-slate-50">
                <h3 className="text-gray-600">FESTEJOS</h3>
              </div>
            </div>
            <div className="hover:shadow-xl transition-all delay-100 col-[3/5] w-[25rem] bg-slate-500 row-[1]  rounded-md">
              <div className="h-[13.9rem] ">
                <img
                  className="h-[13.9rem] w-[32rem] "
                  src="https://http2.mlstatic.com/D_NQ_NP805023-MLA54516954159_032023-B.webp"
                  alt=""
                />
              </div>
              <div className="h-[3.5rem] flex  items-center justify-center rounded-b-md bg-slate-50">
                <h3 className="text-gray-600">BEBES</h3>
              </div>
            </div>
            <div className="hover:shadow-xl transition-all delay-100 col-[5/7] w-[25rem] bg-slate-500 row-[1]  rounded-md">
              <div className="h-[13.9rem] ">
                <img
                  className="h-[13.9rem] w-[32rem] "
                  src="https://http2.mlstatic.com/D_NQ_NP646528-MLA54516910247_032023-B.webp"
                  alt=""
                />
              </div>
              <div className="h-[3.5rem] flex  items-center justify-center rounded-b-md bg-slate-50">
                <h3 className="text-gray-600">DESPENSA</h3>
              </div>
            </div>
            <div className="hover:shadow-xl transition-all delay-100 col-[1/3] w-[25rem] bg-slate-500 row-[2]  rounded-md">
              <div className="h-[13.9rem] ">
                <img
                  className="h-[13.9rem] w-[32rem] "
                  src="https://http2.mlstatic.com/D_NQ_NP992236-MLA54516910267_032023-B.webp"
                  alt=""
                />
              </div>
              <div className="h-[3.5rem] flex  items-center justify-center rounded-b-md bg-slate-50">
                <h3 className="text-gray-600">DESECHABLES</h3>
              </div>
            </div>
            <div className="hover:shadow-xl transition-all delay-100 col-[3/5] w-[25rem] bg-slate-500 row-[2]  rounded-md">
              <div className="h-[13.9rem] ">
                <img
                  className="h-[13.9rem] w-[32rem] "
                  src="https://http2.mlstatic.com/D_NQ_NP871883-MLA54516828291_032023-B.webp"
                  alt=""
                />
              </div>
              <div className="h-[3.5rem] flex  items-center justify-center rounded-b-md bg-slate-50">
                <h3 className="text-gray-600">INCONTINENCIA</h3>
              </div>
            </div>
            <div className="hover:shadow-xl transition-all delay-100 col-[5/7] w-[25rem] bg-slate-500 row-[2]  rounded-md">
              <div className="h-[13.9rem] ">
                <img
                  className="h-[13.9rem] w-[32rem] "
                  src="https://http2.mlstatic.com/D_NQ_NP629586-MLA54516966159_032023-B.webp"
                  alt=""
                />
              </div>
              <div className="h-[3.5rem] flex  items-center justify-center rounded-b-md bg-slate-50">
                <h3 className="text-gray-600">LIMPIEZA Y DESINFECCION</h3>
              </div>
            </div>
          </div>
        </div>

        <br />
        <Footer />
      </div>
    </div>
  );
}
