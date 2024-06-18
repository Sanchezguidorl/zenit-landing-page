"use client";

// Use client
import { useState } from "react";
import Image from "next/image";
import GymProject from "/public/gym.webp";
import NoterProject from "/public/noterApp.webp";
import BienesRaicesProject from "/public/bienesRaicesImage.webp";

function CarrouselPagesDeploy() {
 /* const projectsDeployed = [
    <Image alt="Gym project image" src={GymProject} className=" h-96" />,
    <Image alt="Noter app project image" className="h-96" src={NoterProject} />,
    <Image alt="Bienes Raices project image" className=" h-96" src={BienesRaicesProject} />,
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
*/
  return (
    <div className="bg-black w-full p-4 relative h-96">
{    /*  <div className="flex justify-center mx-auto max-w-[500px] mt-10 " style={{perspective: "1000px"}}>
        {projectsDeployed.map((slide, index) => (
          <div
            key={index}
            onClick={() => setIndexSelected(index)}
            className={` relative  transition-all duration-200 w-20 fade-in border-4 border-blue-500 ${
              index === indexSelected ? " scale-110 z-10 brightness-100 w-60" : " image-perspective brightness-75 w-20 "
            } `}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className=" absolute w-full left-0 top-2/3 flex justify-between">
        <button className="bg-slate-500 p-4 text-xl text-dark bg-white rounded-full" onClick={handlePrevSlide}>
          prev
        </button>
        <button className="bg-slate-500 p-4 text-xl text-dark bg-white rounded-full" onClick={handleNextSlide}>
          next
        </button>
      </div>*/}
    </div>
  );
}

export default CarrouselPagesDeploy;

