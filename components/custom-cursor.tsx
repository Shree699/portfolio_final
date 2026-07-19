'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let outerX = 0, outerY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (innerRef.current) {
        innerRef.current.style.left = mouseX + 'px';
        innerRef.current.style.top = mouseY + 'px';
      }
    };

    const animate = () => {
      outerX += (mouseX - outerX) * 0.12;
      outerY += (mouseY - outerY) * 0.12;
      if (outerRef.current) {
        outerRef.current.style.left = outerX + 'px';
        outerRef.current.style.top = outerY + 'px';
      }
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-cursor="hover"]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    rafId = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={outerRef}
        className="cursor-outer hidden md:block"
        style={{ scale: isHovering ? '1.8' : '1', borderColor: isHovering ? '#00E5FF' : 'rgba(0,229,255,0.5)' }}
      />
      <div ref={innerRef} className="cursor-inner hidden md:block" />
    </>
  );
}
