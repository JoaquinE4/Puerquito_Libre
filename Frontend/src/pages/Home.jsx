import CarouselDefault from "../components/CarouselDefault.jsx";
import Categorias from "../components/Categorias.jsx";
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

       <div className="z-20  text-md grid grid-cols-6 px-20 gap-10 absolute top-[27rem] h-[21rem]  ">
        <Propaganda/>
        <OfertaDia/>
        <Suscripcion/>
        <br />
        <Mercadopay/>
        <br />
        <Masvendidos/>

         <SoloPorHoy/> 

        <Masvendidos/>
        <br />
        <TresCategorias/>
 
        <Masvendidos/>
        <br />
        <Categorias/>
       
         
        <br />
      </div>
    </div>
    </>
  );
}
