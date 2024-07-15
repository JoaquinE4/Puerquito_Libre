import React, { useState } from 'react'

export default function Banner() {
    const [isOpen, setIsOpen] = useState(true);

    const handleCloseBanner = () => {
      setIsOpen(false);
    };
  return (<>
  
  {  isOpen && (<div    id="bottom-banner"  data-aos="fade-up"  tabIndex="-1" className="fixed border rounded-sm border-gray-300 h-[4rem] bottom-0 left-0 z-30 flex justify-around  w-full items-center py-3 px-4 shadow-2xl  bg-white  ">
        
        <h4 className='text-xs'>Usamos cookies para mejorar tu experiencia en Puerquito Libre. Consulta más en nuestro   <span className='text-blue-500'>Centro de Privacidad</span></h4>

        <div className=' flex gap-4'>
            <button onClick={handleCloseBanner} className='bg-blue-100 text-blue-500 rounded-md text-sm px-2 py-1 w-[9rem]'>Aceptar cookies</button>
            <button className='bg-blue-100 text-blue-500 rounded-md text-sm px-2 py-1 w-[9rem]'>Configurar cookies</button>
        </div>
    </div>)}
  </>
  )
}
