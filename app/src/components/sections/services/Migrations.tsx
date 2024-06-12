import '../../../../styles/sections/OurServices.css';
import Image from "next/image";
import MigrationsImg from '/public/migration.png';
function Migrations() {
  return (
    <section className=" flex flex-col lg:flex-row-reverse flex-wrap items-center py-20" id="OurService">
      <div className="w-full lg:w-1/2 flex justify-center p-4">
        <Image src={MigrationsImg} sizes="(max-width: 430px) 400px" loading="lazy" id="DesignsImage" alt="Imagen de diseños de sitios web en diferentes dispositivos" />
      </div>
      <div className="lg:w-1/2 px-4 text-white">
        <div className="mb-8">
          <div className="gradient-mask-silver">
            <h2 className=" text-2xl sm:text-3xl font-semibold mb-4">Diseño a medida</h2>
          </div>
          <p className=" font-semibold">
            Nos especializamos en diseños únicos que capturan la esencia de tu
            negocio. Cada página está meticulosamente adaptada para reflejar tu
            identidad distintiva, creando una experiencia visual que cautiva
            desde el primer momento
          </p>
        </div>
        <div className="mb-8">
          <div className="gradient-mask-silver">
            <h2 className=" text-2xl sm:text-3xl font-semibold mb-4">
              Experiencia de usuario mejorada
            </h2>
          </div>
          <p className=" font-semibold">
            Priorizamos la comodidad del usuario. Creamos diseños intuitivos y
            atractivos que guían a tus visitantes de manera fluida a través de
            tu contenido, asegurando una experiencia sin fricciones y
            satisfactoria.
          </p>
        </div>
        <div className="">
          <div className="gradient-mask-silver">
            <h2 className=" text-2xl sm:text-3xl font-semibold mb-4">
              Optimización para SEO
            </h2>
          </div>
          <p className=" font-semibold">
            Con nuestro enfoque en SEO, tu landing page estará lista para
            destacar por encima de las páginas de tus competidores. Utilizamos
            tecnologías avanzadas para mejorar tu visibilidad online y atraer
            más tráfico a tu sitio
          </p>
        </div>
      </div>
    </section>
  );
}

export default Migrations;
