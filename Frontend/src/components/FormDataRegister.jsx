import { MdOutlinePhoneIphone, MdAlternateEmail, MdPerson , MdPassword   } from "react-icons/md";

export default function FormDataRegister() {
  return (
    <div className="h-[30rem] w-[34rem] py-7 grid grid-col-2 grid-rows-13 shadow-lg rounded-xl bg-white">
      <div className="col-[1/2] flex items-center justify-center py-6 row-[1/3]">
        <h2 className="text-center text-2xl">
          Completá los datos para crear tu cuenta
        </h2>
      </div>
      <div className="px-10  grid grid-col-2 col-[1/2] row-[4/13] gap-3 grid-rows-9">
        <div className="col-[1/2] items-center grid grid-col-8  shadow-md pl-7  row-[1/3]">
          <div className="col-[1/7] flex items-center gap-5 ">
          <MdAlternateEmail  className="rounded-full border text-4xl p-1"/>
             <div>

            <h3 className="text-md">Agregá tu e-mail</h3>
            <span className="text-xs text-gray-600">
              Reciviras informacion de tu cuenta
            </span>{" "}
    </div>
          </div>
          <div className="col-[7/8] flex items-center justify-center">
            <button className="px-3 bg-blue-500 rounded-md py-2 text-white text-sm">
              Agregar
            </button>
          </div>
        </div>
        <div className="col-[1/2] items-center grid grid-col-8  pl-7 row-[3/5]  ">
          <div className="col-[1/7] flex items-center gap-5  ">
          <MdPerson  className="rounded-full border text-4xl p-1"/>
    <div>

            <h3 className="text-md">Elegí tu nombre</h3>
            <span className="text-xs text-gray-600">
             Contanos có querés que te llamemos.
            </span>
    </div>
          </div>
          <div className="col-[7/8] flex items-center justify-center">
            <button className="px-3 hidden bg-blue-500 rounded-md py-2 text-white text-sm">
              Agregar
            </button>
          </div>
        </div>
        <div className="col-[1/2]  items-center grid grid-col-8 pl-7  row-[5/7] ">
          <div className="col-[1/7] flex items-center gap-5  ">
          <MdOutlinePhoneIphone className="rounded-full border text-4xl p-1"/>
          <div>

            <h3 className="text-md">Valida tu telefono </h3>
            <span className="text-xs text-gray-600">
                Prodrás usarlo para indresar a tu cuenta.
            </span>
          </div>
          </div>
          <div className="col-[7/8] flex items-center justify-center">
            <button className=" px-3 hidden bg-blue-500 rounded-md py-2 text-white text-sm">
              Agregar
            </button>
          </div>
        </div>
        <div className="col-[1/2]  items-center grid grid-col-8  pl-7 row-[7/9]  ">
          <div className="col-[1/7] flex items-center gap-5 ">
          <MdPassword   className="rounded-full border text-4xl p-1"/>
        <div>

            <h3 className="text-md">Crea tu contraseña</h3>
            <span className="text-xs text-gray-600">
              mantendrás tu cuenta prodegida.
            </span>{" "}
        </div>
          </div>
          <div className="col-[7/8] flex items-center justify-center">
            <button className="px-3 hidden bg-blue-500 rounded-md py-2 text-white text-sm">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
