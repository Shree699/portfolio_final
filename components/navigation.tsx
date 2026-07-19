'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Cpu } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Research', href: '/research' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong border-b' : 'bg-transparent'
        }`}
        style={{ borderBottomColor: scrolled ? 'rgba(0,229,255,0.1)' : 'transparent' }}
      >
        {/* Neon bottom border */}
        {scrolled && (
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.4), rgba(0,255,156,0.2), transparent)' }}
          />
        )}

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded border border-cyan-400/50 group-hover:border-cyan-400 transition-colors" />
              <Cpu size={16} className="text-cyan-400" />
            </div>
            <span className="font-orbitron font-bold text-sm tracking-widest text-white">
              SHREE<span className="text-cyan-400">.</span>PORTFOLIO
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-xs tracking-widest uppercase ${pathname === item.href ? 'active text-cyan-400' : ''}`}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(-1)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/resume"
              className="btn-glow px-4 py-2 text-xs font-mono tracking-widest uppercase rounded"
            >
              <span>Resume</span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} className="text-cyan-400" /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(5,5,5,0.97)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 pt-16">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`font-orbitron text-xl tracking-widest uppercase transition-colors ${
                pathname === item.href ? 'text-cyan-400' : 'text-[#BFC7D5] hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/resume"
            onClick={() => setMobileOpen(false)}
            className="mt-4 btn-glow px-8 py-3 text-sm font-mono tracking-widest uppercase rounded"
          >
            <span>Resume</span>
          </Link>
        </div>
      </div>
    </>
  );
}
