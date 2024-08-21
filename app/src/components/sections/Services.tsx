'use client';

import { useState, useEffect } from 'react';
import Migrations from './services/Migrations';
import Inventary from './services/Inventary';
import Landingpage from './services/Landingpage';

function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [keepSlideShow, setKeepSlideShow]= useState<boolean>(false)
  // Generar componentes de servicio con claves únicas
  const services = [
    { component: <Landingpage />, key: 'ourService' },
    { component: <Inventary />, key: 'migrations1' },
    { component: <Migrations />, key: 'migrations2' }
  ];

  useEffect(() => {
    if (keepSlideShow) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % services.length);
    }, 7000); // Cambia el slide cada 6 segundos

    return () => clearInterval(interval);
  }, [services.length, currentSlide, keepSlideShow]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden w-full relative">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {services.map(({ component, key }, index) => (
          <div key={key} className={`min-w-full box-border transition-all duration-700 ${currentSlide===index? "opacity-100":"opacity-0 blur-2xl"}`}>
            {component}
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 w-full flex flex-col items-center gap-3 z-10">
      <div onClick={()=>setKeepSlideShow(!keepSlideShow)} className=' interactive  text-no-dark border-2 px-2 py-1 rounded-full bg-white bg-opacity-10 opacity-40 hover:opacity-90'>{!keepSlideShow?"Mantener imagen":"Continuar secuencia"}</div>
      <div className=' flex gap-3'>
        {services.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full   bg-white transition-opacity duration-300 interactive ${
              currentSlide === index ? ' opacity-100' : ' opacity-50'
            }`}
          ></div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
