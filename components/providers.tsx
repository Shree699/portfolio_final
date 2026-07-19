'use client';

import { useState, useEffect } from 'react';
import CustomCursor from '@/components/custom-cursor';
import Loader from '@/components/loader';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
