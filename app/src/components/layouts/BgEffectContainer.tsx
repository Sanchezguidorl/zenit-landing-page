import "../styles/layouts/BgEffectContainer.css"
function BgEffectContainer() {
  return (
    <div className="gradient-bg  z-10 max-w-full">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>

        </defs>
      </svg>
      <div className=" gradients-container">
        <div className="aspect-square g1" ></div>
        <div className="aspect-square g2" ></div>
        <div className="aspect-square g3" ></div>
        <div className="aspect-square g4" ></div>
        <div className="aspect-square g5" ></div>
        <div className="aspect-square g6" ></div>
      </div>
    </div>
  );
}

export default BgEffectContainer;
