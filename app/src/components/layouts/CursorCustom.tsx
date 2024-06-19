'use client';

import { useEffect, useRef, useState } from 'react';

type CursorPositionType = {
  x: number;
  y: number;
};

function CursorCustom() {
  const [cursorPosition, setCursorPosition] = useState<CursorPositionType>({
    x: -200,
    y: -200,
  });

  const [isHovering, setIsHovering] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };

    if (!isTouchDevice() && window.innerWidth > 650) {
      const handleCursorPosition = (event: MouseEvent) => {
        const x = event.pageX;
        const y = event.pageY;

        setCursorPosition({
          x,
          y,
        });
      };

      const handleMouseEnter = () => {
        setIsHovering(true);
      };

      const handleMouseLeave = () => {
        setIsHovering(false);
      };

      document.addEventListener('mousemove', handleCursorPosition);

      const interactableElements = document.querySelectorAll(
        'input, button, a, .linkToSection, textarea'
      );
      interactableElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        document.removeEventListener('mousemove', handleCursorPosition);
        interactableElements.forEach((el) => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`aspect-square absolute z-40 rounded-full cursor-div ${
        isHovering ? 'w-16' : 'w-6'
      }`}
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    ></div>
  );
}

export default CursorCustom;
