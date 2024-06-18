import "../../../styles/sections/Presentation.css";
import CallToActionInput from "../layouts/buttons/CallToActionInput";
import PresentationContainer from "./../layouts/PresentationContainer";

function Presentation() {
  return (
    <section id="Presentation" className="">
      <PresentationContainer>
        <div className="gradient-mask-silver fadeIn">
          <p className="font-bold text-sm sm:text-xl lg:text-2xl uppercase ">
            Presencia online <span className="invert ">real</span> con ayuda de{" "}
            <span className=" invert">expertos</span>
          </p>
        </div>
        <div className="presentation-text">
          <p className=" relative text-2xl  sm:text-5xl lg:text-6xl font-bold presentation-text-1">
            AUTOMATIZAMOS TU NEGOCIO
          </p>
        </div>
        <div className=" presentation-text">
          <p className="relative text-2xl sm:text-5xl lg:text-6xl font-bold presentation-text-2">
            PRIORIZANDO LA PRODUCTIVIDAD
          </p>
        </div>
        <div className=" presentation-text">
          <p className="relative text-2xl  sm:text-5xl lg:text-6xl font-bold presentation-text-3">
            CON HERRAMIENTAS EFECTIVAS
          </p>
        </div>
      </PresentationContainer>
<CallToActionInput/>
    </section>
  );
}

export default Presentation;
