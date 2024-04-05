
import PositioningBenefit from "./PositioningBenefit";
import ShipIcon from "/public/shipIcon.svg";
import Image from "next/image";

function Positioning() {
  return (
    <div id="Positioning" className=" mb-28">
      <div className="flex flex-col mx-auto w-fit items-center mb-28 ">
        <Image
          src={ShipIcon}
          alt="Icono de nave espacial"
          className=" w-28 text-white"
        />
        <div className="stella rounded-xl h-[220px]"></div>
      </div>

      <div>
      <PositioningBenefit iconIndex={0} positionDiv="left">
      En un mundo digital altamente competitivo, una landing page efectiva es esencial para cualquier negocio. Actuando como una puerta de entrada a tu negocio y siendo esta la primera impresión virtual
      </PositioningBenefit>
      <PositioningBenefit iconIndex={2} positionDiv="right">
      Una landing page bien diseñada puede capturar la atención de los visitantes y convertirlos en clientes potenciales
      </PositioningBenefit>
      <PositioningBenefit iconIndex={1} positionDiv="left">
      En Zenit, comprendemos la importancia de este primer contacto digital y nos dedicamos a crear landing pages que destaquen e impulsen el crecimiento de tu negocio en línea
      </PositioningBenefit>
      </div>
    </div>
  );
}

export default Positioning;
