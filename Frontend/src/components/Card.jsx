import React from "react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="h-[20rem] gap-1  grid grid-row-11 w-[16]">
      
      
    
    
      <div className="row-[1/8] hover:text-blue-500   mx-4 rounded-sm flex flex-col items-start justify-center ">
    <Link to={"/detalle"}>
        <img
          src="https://maschanclas.com/wp-content/uploads/2020/07/CLASSIC-PINK-Hombres-Sandalias-Chanclas-de-Cuero-Verano-Playa-Piscina.jpg"
          alt="as"
        
        />
    </Link>
      <Link to={"/detalle"}>

        <p className="text-base text-start ">Sandalias de cuero artesanal</p>
        </Link>
      </div>

      <div className="row-[8/9] pl-6 flex flex-col items-start justify-center  ">

        <h3 className="text-xl font-normal">
          $423.999 <span className="text-green-600">15% OFF</span>
        </h3>
      </div>
      <div className="row-[9/10] pl-6 flex flex-col items-start justify-center ">
        <span className="text-green-600 text-xs">
          Mismo precio en 3 cutas de $123.666{" "}
        </span>
        <span className="text-green-600  text-xs">Envio gratis </span>
      </div>

      
    </div>
  );
}
