// Use client directive to mark the component as client-side only
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

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = () => {
      return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0);
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

      document.addEventListener('mousemove', handleCursorPosition);

      return () => {
        document.removeEventListener('mousemove', handleCursorPosition);
      };
    }
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`aspect-square w-12 absolute z-40 rounded-full cursor-div`}
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
    </div>
  );
}

export default CursorCustom;
