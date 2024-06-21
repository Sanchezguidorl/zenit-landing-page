import "../../../styles/sections/Benefits.css";
import CarrouselPagesDeploy from "../layouts/CarrouselPagesDeploy";

function Benefits() {
  return (
    <div
      id="Benefits"
      className=" py-32 flex flex-col-reverse md:flex-row w-full"
    >
      <div className="flex-1 px-4 flex flex-col justify-center">
        <div className="">
          <div className="benefit-title">
            <h3 className=" text-2xl font-bold">Enfoque en resultados</h3>
          </div>
          <p className=" font-semibold mt-4">
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
          <p className=" font-semibold mt-4">
            Nos comprometemos a brindar un servicio de atención al cliente de
            calidad y un seguimiento constante después del lanzamiento del sitio
            web. Además, ofrecemos servicios de mantenimiento a precios
            accesibles para garantizar que tu sitio esté siempre actualizado y
            funcionando de manera óptima
          </p>
        </div>
      </div>
      <div className=" flex-1">
      <CarrouselPagesDeploy/>
      </div>
    </div>
  );
}

export default Benefits;
