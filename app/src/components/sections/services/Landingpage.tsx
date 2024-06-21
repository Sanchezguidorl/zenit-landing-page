import "../../../../styles/sections/OurServices.css";
import Image from "next/image";
import LandingpageImg from "/public/landingpage.webp";
function Landingpage() {
  return (
    <section
      className=" flex flex-col lg:flex-row-reverse flex-wrap items-center py-20"
      id="LandingPageService"
    >
      <h2 className="w-full text-center text-2xl sm:text-4xl font-semibold mb-4 sm:mb-6">
        Creación de landing pages
      </h2>
      <div className="w-full lg:w-1/2 flex justify-center p-4">
        <Image
          src={LandingpageImg}
          sizes="(max-width: 430px) 400px"
          loading="eager"
          id="DesignsImage"
          alt="Imagen de diseños de sitios web en diferentes dispositivos"
        />
      </div>
      <div className="lg:w-1/2 px-4 text-white">
        <div className="mb-8">
          <div className="gradient-mask-silver">
            <h3 className=" text-xl sm:text-3xl font-semibold mb-2">
              Diseños modernos
            </h3>
          </div>
          <p className="  text-sm sm: text-md font-semibold">
            Creamos diseños modernos que reflejan la esencia de tu marca y
            atraen la atención de tus clientes. Nuestros diseños no solo son
            estéticamente agradables, sino que también están pensados para
            maximizar la conversión
          </p>
        </div>
        <div className="mb-8">
          <div className="gradient-mask-silver">
            <h3 className=" text-xl sm:text-3xl font-semibold mb-2">
              Adaptación a Móviles
            </h3>
          </div>
          <p className="  text-sm sm: text-md font-semibold">
            Es esencial que tu landing page funcione perfectamente en todos los
            dispositivos, especialmente en móviles. Adaptamos nuestras páginas
            para que sean completamente responsivas, asegurando una experiencia
            fluida para tus clientes, sin importar el dispositivo que usen
          </p>
        </div>
        <div className="">
          <div className="gradient-mask-silver">
            <h3 className=" text-xl sm:text-3xl font-semibold mb-2">
              Ahorro en publicidad
            </h3>
          </div>
          <p className="  text-sm sm: text-md font-semibold">
            La velocidad de carga de tu sitio web es crucial para retener
            visitantes y mejorar tu posición en los motores de búsqueda.
            Nuestras landing pages están optimizadas para cargar rápidamente, lo
            que mejora la experiencia del usuario y es favorecido por Google y
            otros motores de búsqueda, ayudándote a obtener una mejor puntuación
            y más tráfico
          </p>
        </div>
      </div>
    </section>
  );
}

export default Landingpage;
