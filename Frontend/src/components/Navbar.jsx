import { Link } from "react-router-dom";
import { PiMapPinLight, PiShoppingCartThin , PiCaretDownThin , PiMagnifyingGlassLight   } from "react-icons/pi";

export default function Navbar() {
  return (<div className="w-full flex  pt-2  justify-center items-center h-[6.4rem]  bg-[#ffe600]">

    <div className="w-11/12 grid grid-cols-6 text-[.80rem] grid-rows-2 place-content-center items-center  bg-[#ffe600] h-[5rem]  ">
      <div className="col-[1/2] row-span-1 flex justify-center">
        <Link to={"/"}>
          <h3>
            puerquito <br /> libre
          </h3>
        </Link>
      </div>
      <div className="col-[2/5]   row-span-1">
    <form  className="w-[34.75rem]  shadow-md flex items-center">

        <input
          type="text"
          className="h-[2.4rem]  w-[33rem] text-start pl-5 text-opacity-5 placeholder-gray-400"
          placeholder="Busca tu productos, marcas y más..."
        />
        <button className="h-[2.4rem] w-7 text-lg bg-white "><PiMagnifyingGlassLight /></button>
    </form>
      </div>
      <div className="col-[5/7] row-span-1   ">
         <img className="h-[2.4rem]" src="https://http2.mlstatic.com/D_NQ_983407-MLA77032071380_062024-OO.webp" alt="sd" />
      </div>
      <div className="col-[1/2] items-center flex justify-center row-span-2">
      <PiMapPinLight  className="text-3xl pr-1 stroke-thin" />
      <button className="ronded-md flex flex-col ">
          <span className="text-gray-600 text-xs">Enviar a</span> <span>Capital Federal</span>
        </button>
      </div>
      <div className="col-[2/4]  row-span-2">
        <ul className="flex justify-start gap-6   items-end  ">
          <li >
            <a className="flex items-center gap-1" href="#">Categorias <PiCaretDownThin /> </a>
          </li>
          <li>
            <Link to="/ofertas">Ofertas</Link>
          </li>
          <li>
            <Link to="/historial">Historial</Link>
          </li>
          <li>
            <a href="/supermercado">Supermercado</a>
          </li>
          <li>
            <Link to="#">Moda</Link>
          </li>
          <li className=" text-xs ">
            <Link tof="#">Mercado play</Link>
          </li>
          <li>
            <Link to="#">Vender</Link>
          </li>
          <li>
            <Link to="#">Ayuda</Link>
          </li>
        </ul>
      </div>
        
    
      <div className="col-[5/7] row-span-2">
        <ul className="flex justify-center items-end gap-3">
          <li>
            <Link to={"/registro"}>Créa tu cuenta</Link>
          </li>
          <li>
            <Link to={"/login"}>Ingresa</Link>
          </li>
          <li>
            <Link>Mis compras</Link>
          </li>
          <li>
            <Link className="text-2xl"><PiShoppingCartThin/></Link>
          </li>
        </ul>
      </div>
     
     
    </div>
  </div>
  );
}
