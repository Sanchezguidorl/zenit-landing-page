import "../../../styles/sections/Presentation.css";
import PresentationContainer from "./../layouts/PresentationContainer";

function Presentation() {
  return (
    <section id="Presentation" className="uppercase">
      <PresentationContainer>
        <div className="gradient-mask-silver fadeIn">
          <p className="font-bold text-sm sm:text-xl lg:text-2xl ">
            ELEVA TU PRESENCIA ONLINE
          </p>
        </div>
        <div className="presentation-text">
          <p className=" relative text-2xl  sm:text-5xl lg:text-6xl font-bold presentation-text-1">
            DONDE LA EXCELENCIA SE
          </p>
        </div>
        <div className=" presentation-text">
          <p className="relative text-2xl sm:text-5xl lg:text-6xl font-bold presentation-text-2">
            POSICIONA Y EL DISEÑO SE
          </p>
        </div>
        <div className=" presentation-text">
          <p className="relative text-2xl  sm:text-5xl lg:text-6xl font-bold presentation-text-3">
            EXPERIMENTA
          </p>
        </div>
      </PresentationContainer>
    </section>
  );
}

export default Presentation;
