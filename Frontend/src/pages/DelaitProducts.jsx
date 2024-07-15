import React from "react";
import Navbar from "../components/Navbar.jsx";

export default function DelaitProducts() {
  return (
    <div className="items-center flex-col  flex w-full">
      <Navbar />
      <div className="h-[5rem]"> </div>

      <div className="w-11/12 h-[36rem] bg-white">
        <div className="w-full h-full  grid grid-col-7">
          <div className="col-[1/4] w-[30rem]  g-slate-400">
            <div className="w-full h-[34rem] grid grid-col-5">
              <div className="col-[1/2] flex flex-col items-center gap-3 justify-around h-[30] w-[8rem]  g-slate-200">
              
              <div className="w-10/12 h-[6.5rem] border-gray-400 border rounded-md "></div>
              <div className="w-10/12 h-[6.5rem] border-gray-400 border rounded-md "></div>
              <div className="w-10/12 h-[6.5rem] border-gray-400 border rounded-md "></div>
              <div className="w-10/12 h-[6.5rem] border-gray-400 border rounded-md "></div>
              
              </div>
              <div className="col-[2/6] flex justify-center items-center h-[30] w-[22rem]  ">
                <img
                  src="https://maschanclas.com/wp-content/uploads/2020/07/CLASSIC-PINK-Hombres-Sandalias-Chanclas-de-Cuero-Verano-Playa-Piscina.jpg"
                  alt="as"
                  className="h-[26rem] w-[rem] object-contain"
                />
              </div>
            </div>
          </div>

          <div className="col-[4/6]  w-[23rem]  ">
            <div className="     w-[23rem] h-[36rem]  border rounded-sm">
              <div className="h-[6rem]  border flex flex-col gap-5 pl-5 items-start justify-center">
                <p className="text-sm text-blue-500">
                    <button>

                  Visita tienda oficial de Exoarte
                    </button>
                </p>
                <p className="text-sm  text-gray-500">Nuevo | +5mil vendidos</p>
              </div>
              <div className="h-[15rem] border   pl-5 pt-6  flex flex-col items-centers">
                <h2 className="text-3xl">Sandalias de cuero artesanal</h2>
                <br />
                <p className="text-4xl font-thin">
                  $20.045{" "}
                  <span className="text-2xl text-green-500">15$ OFF</span>
                </p>
                <span className="text-sm text-blue-500 pt-5"><button>

                  Ver los medios de pago
                </button>
                </span>
              </div>
              <div className="h-[15rem] pl-5 pt-7 border flex flex-col items-centers">
                <p className="pb-3 font-medium">
                  Lo que tenes que saber de este producto
                </p>
                <ul className="pl-4 gap-2 flex font-light flex-col">
                  <li>Es comodo</li>
                  <li>Es canchero</li>
                  <li>No te hace traspirar</li>
                  <li>Es canchero</li>
                  <li>Fin</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col  col-[6/8] w-[23rem]  ">
            <div className="   w-[23rem]  h-[32rem] flex flex-col border-1 m-1 rounded-lx">
              <div className="flex flex-col h-[11rem] gap-3 p-5 w-[23rem]">
                <h3 className="text-base">Envios a todo el pais</h3>
                <span  className="text-sm text-gray-500">Conoce los tiempos y las formas de envpio.</span>
                <p className="text-sm text-blue-500">
                    <button>

                 Calcula cuando llega
                    </button>
                </p>
              </div>
                <hr />
              <div className="h-[9rem] flex-col gap-4 flex p-5 ">
                <h4 className="text-lg">Stock disponible</h4>
                <p>Cantidad:
                  <span className="font-semibold"> 1 unidad</span> <span className="text-sm text-gray-500">(+50 disponibles)</span>
                </p>
                <hr />
              </div>
              <div className="h-[12rem] flex flex-col items-center gap-6">
                <button className="px-4 py-2 w-10/12 bg-blue-200 h-[3.5rem] text-lg text-blue-600 rounded-md">
                  Comprar ahora
                </button>
                <button className="px-4 py-2 w-10/12 bg-[#3483fa] hover:bg-[#2968c8] h-[3.5rem] text-lg text-blue-200 rounded-md">
                  Agregar al carrito
                </button>
              </div>
            </div>
{/*             <div className=" g-slate-700 w-full h-[18rem] border rounded-sm"></div>
 */}          </div>
        </div>
        <br />
      </div>
      <br />
    </div>
  );
}
