import React from "react";

export default function Suscripcion() {
  return (
    <div className="h-[17rem] grid grid-row-3 shadow-lg rounded-xl  bg-white col-[1/7]">
      <div className="row-[1/2] suscripHeader flex items-center justify-between  px-8">
        <h3 className="text-white text-xl px-4  font-bold">
          Suscribite al nivel 6 por $ 3.999/mes
        </h3>
        <button className="px-4 py-1   border-none bg-violet-400 text-white font-semibold rounded-lg ">Suscribite</button>
      </div>
      <div className="row-[2/4]     ">
      <h3 className="text-black text-xl px-4 pt-2 font-bold">
          Consegui mejores beneficios en Puerquito libre
        </h3>
        <div
        className="flex  px-14 items-end  h-[7.3rem] justify-between">
            <div className="flex items-center gap-4">
                <img className="h-20 border rounded-md" src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/widget-l6/dplus@2x.png" alt="disney+" />
                <p className="text-xs">Disney+ incluido</p>
            </div>
            <div className="flex items-center gap-4">
                <img className="h-20 border rounded-md" src="https://http2.mlstatic.com/resources/frontend/statics/loyal/v2/truckgiftv4@2x.png" alt="disney+" />
            <p className="  text-xs">Envios gratis rápidos desde $ 23.000 y 45% OFF <br />en evíos de menos de $23.000</p>
            </div>
        </div>
      </div>
    </div>
  );
}
