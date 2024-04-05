import Image from 'next/image';
import UpIcon from '/public/upIcon.svg';

function Benefits() {
  return (
    <div id="Benefits" className=" py-32 flex flex-col-reverse sm:flex-row w-full">
      <div className="w-full sm:w-1/2 px-4 flex flex-col justify-center">
        <div className="">
          <div className="benefit-title">
            <h3 className=" text-2xl font-bold">Enfoque en resultados</h3>
          </div>
          <p className=" font-light mt-4">
            Nuestro historial de casos de éxito habla por sí mismo. Hemos
            ayudado a numerosos clientes a alcanzar sus objetivos en línea,
            desde aumentar la visibilidad hasta mejorar las conversiones y el
            compromiso del usuario
          </p>
        </div>
        <div className=" mt-8">
          <div className="benefit-title">
            <h3 className=" text-2xl font-bold">Soporte continuo</h3>
          </div>
          <p className=" font-light mt-4">
            Nos comprometemos a brindar un servicio de atención al cliente de
            calidad y un seguimiento constante después del lanzamiento del sitio
            web. Además, ofrecemos servicios de mantenimiento a precios
            accesibles para garantizar que tu sitio esté siempre actualizado y
            funcionando de manera óptima
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 relative flex items-center justify-center h-[400px] ">
        <Image src={UpIcon} alt="asdsad" className=' text-secondary absolute w-12'/>
        <div className=" border border-y-dark-blue h-52 w-52 rounded-full absolute  bg-transparent benefit" ></div>
        <div className=" border border-x-purple h-52 w-52 rounded-full absolute bg-transparent benefit-2" ></div>
      </div>
    </div>
  );
}

export default Benefits;
