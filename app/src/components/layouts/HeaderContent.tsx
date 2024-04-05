"use client";

import Image from "next/image";

import ZenitLogo from "/public/zenitLogo.png";
import CloseIcon from "/public/closeIcon.svg";
import MenuIcon from "/public/menuIcon.svg";
import React, { useEffect, useRef, useState } from "react";
function HeaderContent() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean | null>(null);
  const responsiveNavRef = useRef<HTMLDivElement>(null);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 640) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };

    const handleClickOut = (event: MouseEvent) => {
      if (
        responsiveNavRef.current &&
        !responsiveNavRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    document.addEventListener("click", handleClickOut);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      document.removeEventListener("click", handleClickOut);
    };
  }, []);

  return (
    <div
    ref={responsiveNavRef}
    className="flex justify-center sm:justify-between w-full px-8 text-center text-xs sm:text-md container items-center mx-auto relative">
      <div>
        <Image src={ZenitLogo} className="aspect-square w-20" alt="" />
      </div>
      <div className="absolute right-10">
        {showMenu ? (
          isOpen ? (
            <Image
              className="w-12 cursor-pointer opacity-60 transition-opacity duration-200 hover:opacity-100"
              onClick={() => setIsOpen(false)}
              src={CloseIcon}
              alt=" Icono para cerrar el menú"
            />
          ) : (
            <Image
              className="w-12 cursor-pointer opacity-60 transition-opacity duration-200 hover:opacity-100"
              onClick={() => setIsOpen(true)}
              src={MenuIcon}
              alt=" Icono para abrir el menú"
            />
          )
        ) : (
          <div></div>
        )}
      </div>
      <nav

        className={`absolute top-full header-content-container  w-full  transition-all duration-300 sm:hidden overflow-hidden ${
          isOpen ? "py-3 max-h-[600px] border-b" : "max-h-0 py-0"
        }`}
      >
        <ul className="uppercase text-white sm:flex sm:justify-between gap-4">
          <li
            className="py-2 cursor-pointer"
            onClick={() => scrollToSection("Positioning")}
          >
            Posicionamiento
          </li>
          <li
            className="py-2 cursor-pointer"
            onClick={() => scrollToSection("OurService")}
          >
            NUESTRO SERVICIO
          </li>
          <li
            className="py-2 cursor-pointer"
            onClick={() => scrollToSection("Benefits")}
          >
            BENEFICIOS
          </li>
          <li
            className="py-2 cursor-pointer"
            onClick={() => scrollToSection("Contact")}
          >
            CONTACTO
          </li>
        </ul>
      </nav>
      <nav className="hidden sm:block">
        <ul className="uppercase text-white sm:flex sm:justify-between gap-4">
          <li
            className="cursor-pointer "
            onClick={() => scrollToSection("Positioning")}
          >
            Posicionamiento
          </li>
          <li
            className="cursor-pointer "
            onClick={() => scrollToSection("OurService")}
          >
            NUESTRO SERVICIO
          </li>
          <li
            className="cursor-pointer "
            onClick={() => scrollToSection("Benefits")}
          >
            BENEFICIOS
          </li>
          <li
            className="cursor-pointer "
            onClick={() => scrollToSection("Contact")}
          >
            CONTACTO
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderContent;
