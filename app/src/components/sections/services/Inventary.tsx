import "../../../../styles/sections/OurServices.css";
import Image from "next/image";
import InventaryImg from "/public/gestionInventarioImage.webp";
function Inventary() {
  return (
    <section
      className=" flex flex-col lg:flex-row-reverse flex-wrap items-center py-20"
      id="InventaryService"
    >
      <h2 className="w-full text-center text-2xl sm:text-4xl font-semibold mb-4 sm:mb-6">
        Sistemas de gestión
      </h2>
      <div className="w-full lg:w-1/2 flex justify-center p-4">
        <Image
          src={InventaryImg}
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
              Sistemas de gestión de inventario
            </h3>
          </div>
          <p className="  text-sm sm: text-md font-semibold">
            Nuestra solución de gestión de inventario y punto de venta se adapta
            a las necesidades específicas de tu negocio. Simplifica tareas,
            optimiza tu inventario y reduce costos, asegurando siempre tener los
            productos que tus clientes desean
          </p>
        </div>
        <div className="mb-8">
          <div className="gradient-mask-silver">
            <h3 className=" text-xl sm:text-3xl font-semibold mb-2">
              Seguridad y control
            </h3>
          </div>
          <p className="  text-sm sm: text-md font-semibold">
            Incluimos un robusto sistema de roles que protege tu negocio. Asigna
            permisos específicos a cada empleado para mantener la seguridad y el
            control sobre las operaciones diarias
          </p>
        </div>
        <div className="">
          <div className="gradient-mask-silver">
            <h3 className=" text-xl sm:text-3xl font-semibold mb-2">
              Beneficios adicionales
            </h3>
          </div>
          <p className="  text-sm sm: text-md font-semibold">
            Mejora la eficiencia operativa de tu punto de venta con reportes
            detallados de cada transacción. Toma decisiones informadas y
            aprovecha nuestro asesoramiento para mantener tu negocio en su
            máximo rendimiento
          </p>
        </div>
      </div>
    </section>
  );
}

export default Inventary;
