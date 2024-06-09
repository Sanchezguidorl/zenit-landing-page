"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MenuHeader from "./buttons/MenuHeader";
import CygnusLogo from "/public/cygnusLogo.svg";
function HeaderContent() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const responsiveNavRef = useRef<HTMLDivElement>(null);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleClickOut = (event: MouseEvent) => {
      if (
        responsiveNavRef.current &&
        !responsiveNavRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleClickOut);

    return () => {
      document.removeEventListener("click", handleClickOut);
    };
  }, []);

  return (
    <div
      ref={responsiveNavRef}
      className="flex justify-center sm:justify-between flex-wrap sm:flex-nowrap w-full px-8 text-center text-xs sm:text-md container items-center mx-auto relative"
    >
      <div className="w-20">
        <Image
          src={CygnusLogo}
          className="aspect-square"
          alt="Logo del sitio"
        />
      </div>
      <div className="top-full w-full">
        <div
          className="w-full px-6 py-4 flex justify-end opacity-80 hover:opacity-100 sm:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          <MenuHeader isActive={showMenu} />
        </div>
      </div>
      <nav
        className={`absolute top-full header-content-container transition-all duration-300 sm:hidden overflow-hidden ${
          showMenu ? "py-3 max-h-[600px] border-b" : "max-h-0 py-0"
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
      <nav className="hidden sm:block text-nowrap">
        <ul className="uppercase text-white flex sm:justify-between gap-4">
          <li
            className="cursor-pointer "
            onClick={() => scrollToSection("Positioning")}
          >
            Posicionamiento
          </li>
          <li
            className="cursor-pointer"
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
