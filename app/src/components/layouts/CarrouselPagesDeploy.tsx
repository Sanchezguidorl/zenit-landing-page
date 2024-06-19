"use client";
import { useState } from "react";
import Image from "next/image";
import GymProject from "/public/gym.webp";
import NoterProject from "/public/noterApp.webp";
import BienesRaicesProject from "/public/bienesRaicesImage.webp";

interface Project {
  id: number;
  component: JSX.Element;
}

function CarrouselPagesDeploy() {
  const projectsDeployed: Project[] = [
    { id: 1, component: <Image alt="Gym project image" src={GymProject} className=" h-72 sm:h-80" /> },
    { id: 2, component: <Image alt="Noter app project image" className=" h-72 sm:h-80" src={NoterProject} /> },
    { id: 3, component: <Image alt="Bienes Raices project image" className=" h-72 sm:h-80" src={BienesRaicesProject} /> },
  ];
  const [indexSelected, setIndexSelected] = useState<number>(0);

  const handleNextSlide = () => {
    setIndexSelected((prevIndex) =>
      prevIndex === projectsDeployed.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setIndexSelected((prevIndex) => (prevIndex === 0 ? projectsDeployed.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative h-96 py-10">
      <div className="flex justify-center w-full px-2 sm:px-10 " style={{perspective: "1000px"}}>
        {projectsDeployed.map((project, index) => (
          <div
            key={project.id}
            onClick={() => setIndexSelected(index)}
            className={` relative  transition-all duration-200  w-20 fade-in border-4 border-blue-500 ${
              index === indexSelected ? " scale-110 z-10 brightness-100 w-2/5 sm:w-2/4" : " image-perspective brightness-75 w-20 "
            } `}
          >
            {project.component}
          </div>
        ))}
      </div>
      <div className=" flex-1">
{/*        <button className="bg-slate-500 p-4 text-xl text-dark bg-white rounded-full" onClick={handlePrevSlide}>
          prev
        </button>
        <button className="bg-slate-500 p-4 text-xl text-dark bg-white rounded-full" onClick={handleNextSlide}>
          next 
        </button>*/}
      </div>
    </div>
  );
}

export default CarrouselPagesDeploy;

