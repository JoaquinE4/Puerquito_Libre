import React from 'react'

export default function Login() {
  return (
    <div className="h-[24rem] grid grid-cols-5 w-4/6 bg-slate-400">
    {/* Primer columna vacía */}
    <div className="col-span-2 bg-slate-50 flex flex-col items-center py-10">
        <div className='h-1/2'>
        <h2 className='font-bold text-3xl'>Ingresá tu e-mali,<br/>teléfono o usuario de <br />Puerquito Libre</h2>

        </div>
        <div className='h-1/2 w-3/4 '>

        <hr className='py-2' />

        <span className='text-xs text-black'>Reporar un problema</span>
        </div>



    </div>

    {/* Segunda columna con formulario */}
    <div className="col-span-3 bg-slate-50 flex py-14 justify-center">
      <form className="h-[12rem]  w-[25em] bg-white rounded-xl border flex flex-col items-center pl-5 justify-center">
       <div className='flex flex-col gap-2'>

        <label className=" ml-2 text-sm ">E-mail, teléfono o usuario</label>
        <input
          className="h-[2rem] w-[22rem] text-lg bg-slate-100 rounded-lg px-2"
          type="text"
          placeholder="Email o usuario"
        />
        <div className='flex  pt-4 gap-3'>

        <button className='bg-blue-500 rounded-lg   px-4 py-3 h-[3rem] w-[10rem] text-white'>Iniciar</button>
        <button className='bg-blue-500  rounded-lg text-white h-[3rem] w-[10rem] px-4 py-3'>Crear cuenta</button>
        </div>
       </div>
      </form>
    </div>
  </div>
  )
}
