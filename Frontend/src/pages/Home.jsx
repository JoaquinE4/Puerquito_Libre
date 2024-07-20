import CarouselDefault from "../components/CarouselDefault.jsx";
import Categorias from "../components/Categorias.jsx";
import Footer from "../components/Footer.jsx";
import Masvendidos from "../components/Masvendidos.jsx";
import Mercadopay from "../components/Mercadopay.jsx";
import Navbar from "../components/Navbar.jsx";
import OfertaDia from "../components/OfertaDia.jsx";
import Propaganda from "../components/Propaganda.jsx";
import SoloPorHoy from "../components/SoloPorHoy.jsx";
import Suscripcion from "../components/Suscripcion.jsx";
import TresCategorias from "../components/TresCategorias.jsx";

export default function Home() {
  return (
    <>
      <div className="compa">
        <Navbar />

        <div className="h-[28rem]  ">
          <CarouselDefault />
        </div>

        <div className="z-20 text-md grid grid-cols-6 px-20 gap-10 absolute top-[25.5rem] h-[100vh] position-relative">
          {" "}
          <Propaganda />
          <OfertaDia />
          <Suscripcion />
          <br />
          <Mercadopay />
          <br />
          <Masvendidos />
          <SoloPorHoy />
          <Masvendidos />
          <br />
          <TresCategorias />
          <Masvendidos />
          <br />
          <Categorias />
        </div>
        <div className=" absolute bg-white top-[calc(100vh+550vh)]">
          <div className="flex flex-col gap-6">


          <div className="grid h-[20rem] bg-white grid-cols-3 p-10 grid-rows-1 gap-4">
            <div className="flex flex-col h-[18rem] px-6 gap-5 items-center justify-center">
              <img className="h-[4rem]" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg" alt="" />
              <h4 className="text-gray-600 text-2xl">Elejucomo pagar</h4>
              <p className="text-gray-500 text-sm">Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito.</p>
            </div>
            <div className="flex flex-col h-[18rem] px-6 gap-5 items-center justify-center">
              <img className="h-[4rem]" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg" alt="" />
              <h4 className="text-gray-600 text-2xl">Envío gratis desde $ 23.000</h4>
              <p className="text-gray-500 text-sm">Solo por estar registrado en Mercado Libre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.</p>
            </div>
            <div className="flex flex-col h-[18rem] px-6 gap-5 items-center justify-center">
              <img className="h-[4rem]" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg" alt="" />
              <h4 className="text-gray-600 text-2xl">Seguridad, de principio a fin</h4>
              <p className="text-gray-500 text-sm">¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
            </div>
          </div>
                    
          <div className="grid h-[13rem] grid-cols-2 grid-rows-1 p-10 gap-4">
              <div className="border border-gray-300 rounded-lg flex flex-col items-center justify-center" >
                <h5 className="text-gray-600 font-semibold text-lg">Botón de arrepentimiento</h5>
                <p className="text-blue-600">Cancelar una compra</p>
                <p className="text-blue-600">Cancelar una suscripción</p>
                <p className="text-blue-600">Cancelar un seguro o garantía</p>
              </div>
              <div className="border border-gray-300 rounded-lg flex flex-col items-center justify-center" >
                <h5 className="text-gray-600 font-semibold text-lg">Conoce las normas que aplican cuando compras</h5>
                <p className="text-blue-600">Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor</p>
              </div>
          </div>
          
          <div className="grid grid-cols-3 grid-rows-1 gap-4">
              <div >1</div>
              <div className="col-span-2 px-6 flex items-center gap-3 justify-end">
              <h5 className="text-gray-500   text-lg">ayuda@puerquitolibre.com.ar</h5>
              <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/insurance/ssnlogo.svg" className="h-[3rem]" alt="" />
              <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/banner/usuario-financiero.svg" className="h-[3rem]" alt="" />
              <img src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/data_fiscal.png" className="h-[3.8rem]" alt="" />

              </div>
          </div>
              

          <br />
          <Footer />
          <br />
          </div>
        </div>
      </div>
    </>
  );
}
