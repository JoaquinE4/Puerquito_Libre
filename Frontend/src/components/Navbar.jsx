import { Link } from "react-router-dom";
import { PiMapPinLight, PiShoppingCartThin , PiCaretDownThin , PiMagnifyingGlassLight   } from "react-icons/pi";

export default function Navbar() {
  return (<div className="w-full flex  pt-2  justify-center  bg-[#ffe600]">

    <div className="w-11/12 grid grid-cols-6 text-[.80rem] grid-rows-2 place-content-center items-center  bg-[#ffe600] h-[6rem]  ">
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
            <a href="#">Ofertas</a>
          </li>
          <li>
            <a href="#">Historial</a>
          </li>
          <li>
            <a href="#">Supermercado</a>
          </li>
          <li>
            <a href="#">Moda</a>
          </li>
          <li className=" text-xs ">
            <a  href="#">Mercado play</a>
          </li>
          <li>
            <a href="#">Vender</a>
          </li>
          <li>
            <a href="#">Ayuda</a>
          </li>
        </ul>
      </div>
        

      <div className="col-[5/7] row-span-2">
        <ul className="flex justify-center items-end gap-3">
          <li>
            <Link to={"/registro"}>Créa tu cuenta</Link>
          </li>
          <li>
            <Link>Ingresa</Link>
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