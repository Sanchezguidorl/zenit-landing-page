"use client"

import React, { useRef, useEffect } from 'react';



function MouseInteractive() {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interBubble = divRef.current;
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        function move() {
            if(interBubble){
            curX += (tgX - curX - interBubble.offsetWidth / 2) / 20;
            curY += (tgY - curY - interBubble.offsetHeight / 2) / 20;
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            }
            requestAnimationFrame(move);
        }

        const handleMouseMove = (event: MouseEvent) => {
            tgX = event.clientX;
            tgY = event.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        move();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={divRef} className='interactive'>
        </div>
    );
}

export default MouseInteractive;