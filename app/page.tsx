"use client"

import React, { useRef, useEffect } from 'react';

function MouseInteractive() {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const div = divRef.current;

        if (div !== null) {
            const handleMouseMove = (e: MouseEvent) => {
                div.style.left = e.clientX + 'px';
                div.style.top = e.clientY + 'px';
            };

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, []);

    return (
        <div className='w-full h-full bg-dark-blue relative'>
            <div ref={divRef} className='w-20 h-20 bg-secondary absolute'>
                Tu div que sigue al cursor
            </div>
        </div>
    );
}

export default MouseInteractive;