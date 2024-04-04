import React from 'react'

function Contact() {
  return (
    <div className=' py-20 px-4 ' id='Contact'>
        <div className=' flex justify-center items-center mb-32 gap-1'>
            <div className='w-1/3 bg-gradient-contact-r h-1'></div>
            <div className='gradient-mask-silver uppercase' >
            <h3 className=' text-3xl'>Contáctanos</h3>
            </div>
            <div className='w-1/3 bg-gradient-contact-l h-1'></div>
        </div>
<form action="" className='flex w-full flex-wrap justify-center gap-4  sm:px-20'>
    <div className=' flex flex-col flex-1 '>
        <label className='mb-3' htmlFor="fullName">Nombre Completo</label>
        <input className=' rounded-sm h-10 px-2 bg-semitransparent' id='fullName' type="text" />
    </div>
    <div className=' flex flex-col flex-1 '>
        <label className='mb-3' htmlFor="phoneNumber">Número de Contacto</label>
        <input className=' rounded-sm h-10 px-2 bg-semitransparent' id='phoneNumber' type="tel" />
    </div>
    <div className=' flex flex-col flex-1 '>
        <label className='mb-3' htmlFor="phoneNumber">Correo Electrónico</label>
        <input className=' rounded-sm h-10 px-2 bg-semitransparent' id='phoneNumber' type="email" />
    </div>
    <div className=' flex flex-col w-full mt-10'>
        <label className='mb-3' htmlFor="details">Detalle de la Consulta</label>
<textarea className='rounded-sm h-32 bg-semitransparent p-2 resize-none' name="" id="details"></textarea>
    </div>
<div className='w-full flex justify-end mt-4'>
    
<input type="submit" />
</div>
</form>
    </div>
  )
}

export default Contact
