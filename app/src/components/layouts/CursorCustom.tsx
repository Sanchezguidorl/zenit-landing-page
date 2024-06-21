"use client";
import { useEffect, useRef, useState } from 'react';

type CursorPositionType = {
  x: number;
  y: number;
};

function CursorCustom() {
  const [cursorPosition, setCursorPosition] = useState<CursorPositionType>({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const handleCursorPosition = (event: MouseEvent) => {
      setCursorPosition({ x: event.pageX, y: event.pageY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    if (!isTouchDevice() && window.innerWidth > 650) {
      console.log("Rendering cursor", cursorPosition, isHovering);
      document.addEventListener('mousemove', handleCursorPosition);

      const interactableElements = document.querySelectorAll('input, button, a, .linkToSection, textarea, .interactive');
      interactableElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        document.removeEventListener('mousemove', handleCursorPosition);
        interactableElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }
  }, []);


  return (
    <div
      ref={cursorRef}
      className={`aspect-square absolute z-50 rounded-full cursor-div ${isHovering ? 'w-16' : 'w-6'}`}
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid red',  // Asegúrate de que el cursor sea visible
        backgroundColor: 'rgba(255, 0, 0, 0.5)',  // Asegúrate de que el cursor sea visible
      }}
    ></div>
  );
}

export default CursorCustom;
