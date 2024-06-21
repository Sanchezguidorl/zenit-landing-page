"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import GymProject from "/public/gym.webp";
import NoterProject from "/public/noterApp.webp";
import BienesRaicesProject from "/public/bienesRaicesImage.webp";
import BarImage from "/public/barImage.webp";

interface Project {
  id: number;
  component: JSX.Element;
}

function CarrouselPagesDeploy() {
  const projectsDeployed: Project[] = [
    { id: 1, component: <Image alt="Gym project image" src={GymProject} loading="eager" className="h-full object-cover" /> },
    { id: 4, component: <Image alt="Bar project image" src={BarImage} loading="eager" className="h-full object-cover" /> },
    { id: 2, component: <Image alt="Noter app project image" loading="eager" className="h-full object-cover" src={NoterProject} /> },
    { id: 3, component: <Image alt="Bienes Raices project image" loading="eager" className="h-full object-cover" src={BienesRaicesProject} /> },
  ];
  const [indexSelected, setIndexSelected] = useState<number>(0);

  const handleNextSlide = () => {
    setIndexSelected((prevIndex) =>
      prevIndex === projectsDeployed.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 4000);
    return () => clearInterval(interval);
  }, [indexSelected]);

  return (
    <div className="relative h-96 md:h-[450px] w-full flex items-center justify-center overflow-hidden lg:overflow-visible px-2 sm:px-40 md:px-0 lg:px-12">
      <div className="flex justify-center px-2 md:px-2  max-w-96" style={{perspective: "1000px"}}>
        {projectsDeployed.map((project, index) => (
          <button
            key={project.id}
            onClick={() => setIndexSelected(index)}
            className={` relative max-h-full transition-all duration-300 fade-in border-4 border-blue-500 ${
              index === indexSelected ? "z-10 brightness-100 w-fit" : "image-perspective brightness-75 w-20"
            } `}
          >
            {project.component}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CarrouselPagesDeploy;
