import "../../../styles/sections/ModernizaTuNegocio.css";
import Image from "next/image";
import ShipIcon from "/public/shipIcon.svg";
import PositioningBenefit from "./PositioningBenefit";

function Positioning() {
  return (
    <div className=" mt-10">
      <div className="flex flex-col mx-auto w-fit items-center mb-28 ">
        <Image
          src={ShipIcon}
          priority
          alt="Icono de nave espacial"
          className=" w-28 text-white"
        />
        <div className="stella rounded-xl h-[220px]"></div>
      </div>
      <div id="ModernizaTuNegocio" className="pt-10">
        <PositioningBenefit iconIndex={0} positionDiv="left">
          En el mundo actual, altamente competitivo, actualizar tu negocio con
          <strong className="highlight-text"> herramientas digitales </strong>
          es esencial para{" "}
          <strong className="highlight-text">
            simplificar tareas, reducir errores y mejorar la eficiencia
          </strong>
        </PositioningBenefit>
        <PositioningBenefit iconIndex={2} positionDiv="right">
          En Cygnus, nos enfocamos en ayudarte a <strong className="highlight-text">ahorrar tiempo</strong> y mejorar la
          <strong className="highlight-text"> productividad</strong> con soluciones digitales <strong className="highlight-text"> fáciles de usar </strong> que pueden
          aumentar tus ingresos.
        </PositioningBenefit>
        <PositioningBenefit iconIndex={1} positionDiv="left">
          Entendemos la importancia de <strong className="highlight-text">adaptar tu negocio</strong> al entorno digital.
          Por ese motivo, <strong className="highlight-text">elaboramos estrategias digitales</strong> que facilitan la
          gestión y fortalecen tu presencia en línea.
        </PositioningBenefit>
      </div>
    </div>
  );
}

export default Positioning;
