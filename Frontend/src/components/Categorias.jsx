import React from "react";
import { Link } from "react-router-dom";

export default function Categorias() {
  return (
    <div className="h-[26rem] flex flex-col items-center justify-center col-[1/8] px-8 py-2 bg-slate-50 rounded-lg">
      <div className="w-full flex items-center justify-start gap-5 h-[4rem]">
        {" "}
        <h3 className="text-lg font-normal">Categorias</h3>{" "}
        <span>
          <Link to={"#"} className="text-blue-500 hover:text-blue-800 text-sm">
            Mostrar todas las categorias
          </Link>
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1 grid-rows-6 w-full h-[20rem] bg-gray-70">
        {/* Primer bloque */}
        <div className="col-span-1 row-span-2   hover:text-blue-500 flex items-center justify-start pl-4  bg-gra-500">
          <div className="border border-gray-300 rounded-sm w-full">

          <div className="grid  grid-col-3">
            <div className="rounded-sm flex items-center p-2 justify-center h-[5.3rem] w-[5.3rem] bg-gray-300 col-[1/2] ">
                <img className=" transition hover:scale-105" src="https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_car-front-new-category.webp" alt="" />
            </div>
            <div className="col-[2/4] flex items-center pl-8">
              <Link to={"#"} ><span className="">Autos, Motos y <br /> Otros</span></Link>
            </div>
          </div>
          </div>
        </div>
        <div className="col-span-1 row-span-2  hover:text-blue-500 flex items-center justify-start pl-4 ">

        <div className="border border-gray-300 rounded-sm w-full">
        <div className="grid grid-col-3">

            <div className="rounded-sm flex items-center justify-center h-[5.3rem] w-[5.3rem] bg-gray-300 col-[1/2] ">
            <img className=" transition hover:scale-105"   src="https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_mobile-button-category.webp" alt="" />

            </div>
            <div className="col-[2/4] flex items-center pl-8">
              <Link to={"#"} ><span className="">Celulares y <br />Telefonos</span></Link>
            </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-2  hover:text-blue-500 flex items-center justify-start pl-4  ">
        <div className="border border-gray-300 rounded-sm w-full">

        <div className="grid grid-col-3">
            <div className="rounded-sm flex items-center justify-center h-[5.3rem] w-[5.3rem] p-2 bg-gray-300 col-[1/2] ">
            <img className=" transition hover:scale-105" src="https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_oven-category.webp" alt="" />
            </div>
            <div className="col-[2/4] flex items-center pl-8">
              <Link to={"#"} ><span className="">Electrodomesticos <br /> y Aiter Ac.</span></Link>
            </div>
            </div>
          </div>
        </div>

        {/* Segundo bloque */}
        <div className="col-span-1 row-span-2  hover:text-blue-500 flex items-center justify-start pl-4  ">
        <div className="border border-gray-300 rounded-sm w-full">

        <div className="grid grid-col-3">
            <div className="rounded-sm flex items-center justify-center h-[5.3rem] w-[5.3rem] bg-gray-300 col-[1/2] p-2 ">
  <img className=" transition hover:scale-105" src="https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_steering-wheel-category.webp" alt="" />
            </div>
            <div className="col-[2/4] flex items-center pl-8">
              <Link to={"#"} ><span className="">Accesorio para veiculos</span></Link>
            </div>
            </div>
          </div>
        </div>
        <div className="col-span-1  hover:text-blue-500 row-span-2 flex items-center justify-start pl-4 ">
        <div className="border border-gray-300 rounded-sm w-full">

        <div className="grid grid-col-3">
            <div className="rounded-sm flex items-center justify-center p-2 h-[5.3rem] w-[5.3rem] bg-gray-300 col-[1/2] ">
            <img className=" transition hover:scale-105" src="https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_ball-soccer-category.webp" alt="" />
            </div>
            <div className="col-[2/4] flex items-center pl-8">
              <Link to={"#"} ><span className="">Deportes y <br />Fitness</span></Link>
            </div>
            </div>
          </div>
        </div>
        <div className="col-span-1  hover:text-blue-500 row-span-2 flex items-center justify-start pl-4 ">
        <div className="border border-gray-300 rounded-sm w-full">

        <div className="grid grid-col-3">
            <div className="rounded-sm flex items-center justify-center h-[5.3rem] w-[5.3rem] bg-gray-300 col-[1/2] p-2 ">
            <img className=" transition hover:scale-105" src="https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_settings-tool-67-category.webp" alt="" />
            </div>
            <div className="col-[2/4] flex items-center pl-8">
              <Link to={"#"} ><span className="">Herramientas</span></Link>
            </div>
            </div>
          </div>
        </div>

        {/* Tercer bloque */}
        <div className="col-span-1  hover:text-blue-500 row-span-3 flex items-center justify-start pl-4 b ">
        <div className="border border-gray-300 rounded-sm w-full">

        <div className="grid grid-col-3">
            <div className="rounded-sm flex items-center justify-center p-2 h-[5.3rem] w-[5.3rem] bg-gray-300 col-[1/2] ">
            <img className=" transition hover:scale-105" src="https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_armchair_blue-category.webp" alt="" />

            </div>
            <div className="col-[2/4] flex items-center pl-8">
              <Link to={"#"} ><span className="">Hogar, Muebles y <br /> Jardion</span></Link>
            </div>
            </div>
          </div>
        </div>
        <div className="col-span-1  hover:text-blue-500 row-span-3 flex items-center justify-start pl-4  ">
        <div className="border border-gray-300 rounded-sm w-full">

        <div className="grid grid-col-3">
            <div className="rounded-sm flex items-center justify-center h-[5.3rem] w-[5.3rem] p-2 bg-gray-300 col-[1/2] ">
            <img className=" transition hover:scale-105" src="https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_tv-2-category.webp" alt="" />
            </div>
            <div className="col-[2/4] flex items-center pl-8">
              <Link to={"#"} ><span className="">Computacion</span></Link>
            </div>
            </div>
          </div>
        </div>
        <div className="col-span-1  hover:text-blue-500 row-span-3 flex items-center justify-start pl-4  ">
        <div className="border border-gray-300 rounded-sm w-full">

        <div className="grid grid-col-3"> 
            <div className="rounded-sm flex items-center justify-center h-[5.3rem] w-[5.3rem] bg-gray-300 col-[1/2] p-2 ">
            <img className=" transition hover:scale-105" src="https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_style_winter-6-category.webp" alt="" />

            </div>
            <div className="col-[2/4] flex items-center pl-8">
              <Link to={"#"} ><span className="">Ropa y <br />Accesorios</span></Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
