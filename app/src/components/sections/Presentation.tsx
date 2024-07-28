import "../../../styles/sections/Presentation.css";
import CallToActionInput from "../layouts/buttons/CallToActionInput";
import PresentationContainer from "./../layouts/PresentationContainer";

function Presentation() {
  return (
    <section id="Presentation" className="">
      <PresentationContainer>
        <div className="gradient-mask-silver fadeIn">
          <h3 className="font-bold text-sm sm:text-xl lg:text-2xl uppercase ">
            Presencia online <span className="highlight-text-headers">real</span> con ayuda de{" "}
            <span className="highlight-text-headers">expertos</span>
          </h3>
        </div>
        <div className="presentation-text">
          <h2 className=" relative text-2xl  sm:text-5xl lg:text-6xl font-bold presentation-text-1">
            AUTOMATIZAMOS TU NEGOCIO
          </h2>
        </div>
        <div className=" presentation-text">
          <h2 className="relative text-2xl sm:text-5xl lg:text-6xl font-bold presentation-text-2">
            PRIORIZANDO LA PRODUCTIVIDAD
          </h2>
        </div>
        <div className=" presentation-text">
          <h2 className="relative text-2xl  sm:text-5xl lg:text-6xl font-bold presentation-text-3">
            CON HERRAMIENTAS EFECTIVAS
          </h2>
        </div>
      </PresentationContainer>
<CallToActionInput/>
    </section>
  );
}

export default Presentation;
