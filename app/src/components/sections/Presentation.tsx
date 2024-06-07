import ShadowTextEffectContainer from "./ShadowTextEffectContainer";

function Presentation() {
  return (
    <section id="Presentation" className="uppercase">
      <h1 className="mx-auto gradient-mask-container py-20 pt-60 px-4">
        <div className="gradient-mask-silver fadeIn">
          <p className="font-bold text-sm sm:text-xl lg:text-2xl ">
            ELEVA TU PRESENCIA ONLINE
          </p>
        </div>
        <ShadowTextEffectContainer>
          <div className="presentation-text-container">
            <p className=" relative text-2xl  sm:text-5xl lg:text-6xl font-bold words-presentation presentation-text-1">
              DONDE LA EXCELENCIA SE
            </p>
          </div>
          <div className=" presentation-text-container">
            <p className="relative text-2xl sm:text-5xl lg:text-6xl font-bold presentation-text-2">
              POSICIONA Y EL DISEÑO SE
            </p>
          </div>
          <div className=" presentation-text-container">
            <p className="relative text-2xl  sm:text-5xl lg:text-6xl font-bold presentation-text-3">
              EXPERIMENTA
            </p>
          </div>
          </ShadowTextEffectContainer>
      </h1>
    </section>
  );
}

export default Presentation;
