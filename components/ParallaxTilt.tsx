'use client'

import React, { useEffect, useRef, useState } from 'react';

interface ParallaxTiltProps {
    children: React.ReactNode;
}

const ParallaxTilt: React.FC<ParallaxTiltProps> = ({ children }) => {
    const tiltRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ mouseX: 0, mouseY: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            console.log('Mouse move event triggered');
            const { left, top, width, height } = tiltRef.current?.getBoundingClientRect() || { left: 0, top: 0, width: 1, height: 1 };
            const mouseX = (event.clientX - left) / width - 0.5;
            const mouseY = (event.clientY - top) / height - 0.5;
            setTilt({ mouseX, mouseY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const tiltStyle = {
        transform: `translateZ(1px) rotateX(${tilt.mouseY * 10}deg) rotateY(${tilt.mouseX * 10}deg)`,
    };

    return (
        <div ref={tiltRef} style={{ perspective: '1000px', transformStyle: 'preserve-3d'}}>
            <div style={tiltStyle}>{children}</div>
        </div>
    );
};

export default ParallaxTilt;