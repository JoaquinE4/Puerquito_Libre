import React from 'react'

export default function TresCategorias() {
  return (
    <div className='col-[1/8] gap-3 grid  h-[26rem] grid-col-9' >
        <div className='col-[1/4] w-full  flex flex-col   h-[24rem] bg-slate-50 shadow-lg  '>
            <h3 className='text-xl py-4 text-center'>GAMING</h3>
            <hr />
            <div className='h-4/6 bg-cover   bg-[url("https://http2.mlstatic.com/D_NQ_943797-MLA77377650985_072024-OO.webp")] bg-slate-400'></div>
{/*                 <img src="https://http2.mlstatic.com/D_NQ_943797-MLA77377650985_072024-OO.webp" className='' alt="" />
 */}            <div>

            <p className='text-sm text-center pt-6 text-gray-500 font-semibold'>Descripcion de lo que sea</p>
            </div>
         </div>
        <div className='col-[4/7] w-full  flex flex-col   h-[24rem] bg-slate-50 shadow-lg  '>
            <h3 className='text-xl  py-4 text-center'>JUEGOS Y JUGETES</h3>
            <hr />
            <div className='h-4/6 bg-cover bg-[url("https://http2.mlstatic.com/D_NQ_727544-MLA77377648579_072024-OO.webp")] bg-slate-400'></div>
            <div>

<p className='text-sm text-center pt-6 text-gray-500 font-semibold'>Descripcion de lo que sea</p>
</div>
         </div>
        <div className='col-[7/10] w-full flex flex-col    h-[24rem] bg-slate-50 shadow-lg  '>
            <h3 className='text-xl py-4 text-center'>HOGAR</h3>
            <hr />
            <div className='h-4/6 bg-cover bg-[url("https://http2.mlstatic.com/D_NQ_898079-MLA77377691247_072024-OO.webp")] bg-slate-400'></div>
            <div>

            <p className='text-sm text-center pt-6 text-gray-500 font-semibold'>Descripcion de lo que sea</p>
            </div>
         </div>
      
    </div>
  )
}
