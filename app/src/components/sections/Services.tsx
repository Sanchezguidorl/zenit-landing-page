'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Migrations from './services/Migrations';
import Inventary from './services/Inventary';
import Landingpage from './services/Landingpage';
import SocialMediaManagement from './services/SocialMediaManagemet';

function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Generar componentes de servicio con claves únicas
  const services = [
    { component: <Landingpage />, key: 'ourService' },
    { component: <Inventary />, key: 'migrations1' },
    { component: <Migrations />, key: 'migrations2' },
    { component: <SocialMediaManagement />, key: 'migrations3' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % services.length);
    }, 6000); // Cambia el slide cada 6 segundos

    return () => clearInterval(interval);
  }, [services.length, currentSlide]);

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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {services.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full   bg-white transition-opacity duration-300 z-10 ${
              currentSlide === index ? ' opacity-100' : ' opacity-50'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Services;
