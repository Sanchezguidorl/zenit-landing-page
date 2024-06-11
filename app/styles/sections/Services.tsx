/* 
'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Carga dinámica del componente OurService
const OurService = dynamic(() => import('@/app/src/components/sections/OurService'), { ssr: false });

function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Lista de servicios a renderizar
  const services = [<OurService />, <OurService />, <OurService />, <OurService />, <OurService />];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % services.length);
    }, 6000); // Cambia el slide cada 6 segundos

    return () => clearInterval(interval);
  }, [services.length,currentSlide]);

  const handleDotClick = (index:number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden w-full relative">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {services.length>0 && services.map((service, index) => (
          <div key={index+ Math.random()*100} className="min-w-full box-border">
            {service}
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {services.map((_, index) => (
          <div
            key={index+ Math.random()*100}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-opacity duration-300 z-10 ${
              currentSlide === index ? ' bg-white opacity-100' : 'bg-white opacity-50'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Services;
*/