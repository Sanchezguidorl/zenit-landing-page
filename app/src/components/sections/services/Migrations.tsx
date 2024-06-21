import "../../../../styles/sections/OurServices.css";
import Image from "next/image";
import MigrationsImg from "/public/migration.webp";
function Migrations() {
  return (
    <section
      className=" flex flex-col lg:flex-row-reverse flex-wrap items-center py-20"
      id="MigrationServie"
    >
      <h2 className="w-full text-center text-2xl sm:text-4xl font-semibold mb-4 sm:mb-6">
       Migración de sistemas antiguos
      </h2>
      <div className="w-full lg:w-1/2 flex justify-center p-4 px-8">
        <Image
          src={MigrationsImg}
          sizes="(max-width: 430px) 400px"
          loading="lazy"
          id="DesignsImage"
          alt="Imagen de diseños de sitios web en diferentes dispositivos"
        />
      </div>
      <div className="lg:w-1/2 px-4 text-white">
        <div className="mb-8">
          <div className="gradient-mask-silver">
            <h3 className=" text-xl sm:text-3xl font-semibold mb-2">
              Sin pérdida de funcionalidades
            </h3>
          </div>
          <p className="  text-sm sm:text-md font-semibold">
            Migramos tus sistemas antiguos a una plataforma web moderna sin
            perder las funciones que necesitas. Mantenemos todo lo que tu
            negocio ya utiliza, asegurando una transición fluida y sin
            interrupciones
          </p>
        </div>
        <div className="mb-8">
          <div className="gradient-mask-silver">
            <h3 className=" text-xl sm:text-3xl font-semibold mb-2">
              Reducción del tiempo de capacitación
            </h3>
          </div>
          <p className="  text-sm sm:text-md font-semibold">
            Nuestro nuevo sistema es intuitivo y fácil de aprender, diseñado
            para que tu equipo se adapte rápidamente. Ofrecemos una interfaz
            clara que simplifica las tareas diarias y mejora la eficiencia
            operativa
          </p>
        </div>
        <div className="">
          <div className="gradient-mask-silver">
            <h3 className=" text-xl sm:text-3xl font-semibold mb-2">
              Alojamiento seguro en la web
            </h3>
          </div>
          <p className="  text-sm sm:text-md font-semibold">
            Tu nuevo sistema estará alojado de manera segura en la web,
            accesible desde cualquier lugar y dispositivo. Garantizamos la
            protección de tus datos con medidas de seguridad avanzadas y soporte
            técnico continuo
          </p>
        </div>
      </div>
    </section>
  );
}

export default Migrations;
