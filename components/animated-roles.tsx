'use client';

import { useEffect, useRef, useState } from 'react';

const ROLES = [
  'Building Intelligent Embedded Systems',
  'Designing Industrial PCB Solutions',
  'Developing Autonomous UAV Systems',
  'Engineering AI at the Edge',
  'Turning Ideas into Real Hardware',
];

export default function AnimatedRoles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex(i => (i + 1) % ROLES.length);
        }
      }
    }, isDeleting ? 40 : 70);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <span className="type-cursor" style={{ color: '#00E5FF', textShadow: '0 0 20px rgba(0,229,255,0.5)' }}>
      {displayText}
    </span>
  );
}
