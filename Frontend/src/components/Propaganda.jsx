import React from "react";

export default function Propaganda() {
  return (
    <>
      <div className="bg-slate-50 shadow-lg  shadown-sm text-center   h-[18rem] rounded-2xl items-center   grid grid-row-8  w-[12rem] col-[1/2] ">
        <div className="row-[1/5]  flex items-center flex-col  ">
          <h3 className="font-semibold">Ingresa tu cuenta</h3>
        <img decoding="sync" src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/registration-da.svg" className="h-[8rem] " fetchpriority="high" alt="Ingresá a tu cuenta"></img>
        </div>
        <div className="row-[5/6]   ">
          <span>Disfruta de ofertas y compra sin limites</span>
        </div>
        <div className="row-[6/8]  ">
          <button className="px-3 py-1 text-sm bg-blue-400 text-white rounded-lg">
            Ingresa a tu cuenta
          </button>
        </div>
      </div>
      <div className="bg-slate-50 shadow-lg   shadown-sm items-center   grid grid-row-8 text-center h-[18rem] rounded-2xl  col-[2/3] w-[12rem]">
      <div className="row-[1/5]  flex items-center flex-col  ">
      <h3 className="font-semibold">Ingresa tu ubicacion</h3>
          <img decoding="sync" src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/location.svg" className="h-[8rem] " fetchpriority="high" alt="Ingresá a tu cuenta"></img>
        </div>
        <div className="row-[5/6]   ">
          <span>Consultacostos y tiempos de entrega</span>
        </div>
        <div className="row-[6/8]  ">
          <button className="px-3 py-1 text-sm bg-blue-400 text-white rounded-lg">
            Ingresar ubicacion
          </button>
        </div>
      </div>
      <div className="bg-slate-50 shadow-lg   shadown-sm items-center   grid grid-row-8 text-center h-[18rem] rounded-2xl  col-[3/4] w-[12rem]">
      <div className="row-[1/5]  flex items-center flex-col  ">
      <h3 className="font-semibold">Medios de pago</h3>
          <img decoding="sync" src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/payment-methods.svg" className="h-[8rem] " fetchpriority="high" alt="Ingresá a tu cuenta"></img>
        </div>
        <div className="row-[5/6]   ">
          <span>Pagá tus compras de forma rapida y segura</span>
        </div>
        <div className="row-[6/8]  ">
          <button className="px-2 py-2 text-sm bg-blue-400 text-white rounded-lg">
            Conocer medios de pago
          </button>
        </div>
      </div>
      <div className="bg-slate-50 shadow-lg   shadown-sm items-center   grid grid-row-8 text-center h-[18rem] rounded-2xl  col-[4/5] w-[12rem]">
      <div className="row-[1/5]  flex items-center flex-col  ">
      <h3 className="font-semibold">
            Menos de <span>$20.000</span>
          </h3>
          <img decoding="sync" src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/low-price-product.svg" className="h-[8rem] " fetchpriority="high" alt="Ingresá a tu cuenta"></img>
        </div>
        <div className="row-[5/6]   ">
          <span>Descubri productos con precios bajos</span>
        </div>
        <div className="row-[6/8]  ">
          <button className="px-3 text-sm py-1 bg-blue-400 text-white rounded-lg">
            Mostrar productos
          </button>
        </div>
      </div>
      <div className="bg-slate-50 shadow-lg     items-center   grid grid-row-8 text-center h-[18rem] rounded-2xl  col-[5/6] w-[12rem]">
      <div className="row-[1/5]  flex items-center flex-col  ">
      <h3 className="font-semibold">Mas vendidos</h3>
          <img decoding="sync" src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/top-sale.svg" className="h-[8rem] " fetchpriority="high" alt="Ingresá a tu cuenta"></img>
        </div>
        <div className="row-[5/6]   ">
          <span>Explora los productos que son tendencia</span>
        </div>
        <div className="row-[6/8]  ">
          <button className="px-3 py-1 text-sm bg-blue-400 text-white rounded-lg">
            ir a Mas vendidos
          </button>
        </div>
      </div>
      <div className="bg-slate-50 shadow-lg   items-center   grid grid-row-8 text-center h-[18rem] rounded-2xl  col-[6/7] w-[12rem]">
      <div className="row-[1/5]  flex items-center flex-col  ">
      <h3 className="font-semibold">Compra protegida</h3>
          <img decoding="sync" src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/buy-protected.svg" className="h-[8rem] " fetchpriority="high" alt="Ingresá a tu cuenta"></img>
        </div>
        <div className="row-[5/6]   ">
          <span>Podés devolver tu compra gratis</span>
        </div>
        <div className="row-[6/8]  ">
          <button className="px-3 py-1 text-sm bg-blue-400 text-white rounded-lg">
            Cómo funciona
          </button>
        </div>
      </div>
    </>
  );
}
