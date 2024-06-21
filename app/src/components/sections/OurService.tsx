import '../../../styles/sections/OurServices.css';
import Image from "next/image";
import DesignsImg from "/public/responsiveDesign.webp";
function OurService() {
  return (
    <section className=" flex flex-col lg:flex-row flex-wrap items-center py-20 border-b border-b-no-dark border-t border-t-no-dark" id="OurService">
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image src={DesignsImg} sizes="(max-width: 430px) 400px" loading="lazy" id="DesignsImage" alt="Imagen de diseños de sitios web en diferentes dispositivos" />
      </div>
      <div className="lg:w-1/2 px-4 text-white">
        <div className="mb-8">
          <div className="gradient-mask-silver">
            <h2 className=" text-2xl sm:text-3xl font-semibold mb-2">Diseño a medida</h2>
          </div>
          <p className=" font-semibold">
          Nos especializamos en <strong className="highlight-text">diseños únicos</strong> que capturan la esencia de tu negocio. Cada página está meticulosamente adaptada para reflejar tu identidad distintiva, creando una experiencia visual que cautiva desde el primer momento
          </p>
        </div>
        <div className="mb-8">
          <div className="gradient-mask-silver">
            <h2 className=" text-2xl sm:text-3xl font-semibold mb-2">
              Experiencia de usuario mejorada
            </h2>
          </div>
          <p className=" font-semibold">
          Priorizamos la <strong className="highlight-text">comodidad de quien va a usar el sistema</strong>. Creamos diseños intuitivos y atractivos que guían a tus usuarios de manera fluida a través de tu contenido, asegurando una experiencia sin fricciones y satisfactoria
          </p>
        </div>
        <div className="">
          <div className="gradient-mask-silver">
            <h2 className=" text-2xl sm:text-3xl font-semibold mb-2">
              Optimización para SEO
            </h2>
          </div>
          <p className=" font-semibold">
          Con nuestro enfoque en SEO, tu landing page estará lista para destacar por encima de las páginas de tus competidores. Utilizamos tecnologías avanzadas para <strong className="highlight-text">mejorar tu visibilidad online</strong> y atraer más tráfico a tu sitio
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurService;
