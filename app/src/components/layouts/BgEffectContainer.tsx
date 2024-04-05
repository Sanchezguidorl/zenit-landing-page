
function BgEffectContainer() {
  return (
    <div className="gradient-bg  z-10 max-w-full">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
              />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
              />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className=" gradients-container">
        <div className="g1" >1</div>
        <div className="g2" >2</div>
        <div className="g3" >3</div>
        <div className="g4" >4</div>
        <div className="g5" >5</div>
        <div className="g6" >6</div>
      </div>
    </div>
  );
}

export default BgEffectContainer;
