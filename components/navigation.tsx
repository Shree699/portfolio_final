'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Cpu, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/theme-context';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Freelance', href: '/freelance' },
  { label: 'Research', href: '/research' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Contact', href: '/contact' },
];

/* ── Animated theme toggle pill ─────────────────────────── */
function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      className="relative flex items-center w-14 h-7 rounded-full border transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
      style={{
        background: isLight
          ? 'linear-gradient(135deg, #E0F2FE, #BAE6FD)'
          : 'linear-gradient(135deg, #0B0F12, #1a2030)',
        borderColor: isLight ? 'rgba(0,153,187,0.4)' : 'rgba(0,229,255,0.25)',
        boxShadow: isLight
          ? '0 0 12px rgba(0,153,187,0.2)'
          : '0 0 12px rgba(0,229,255,0.15)',
      }}
    >
      {/* Sliding thumb */}
      <span
        className="absolute flex items-center justify-center w-5 h-5 rounded-full transition-all duration-500"
        style={{
          left: isLight ? '26px' : '4px',
          background: isLight
            ? 'linear-gradient(135deg, #F59E0B, #FBBF24)'
            : 'linear-gradient(135deg, #00E5FF, #00b8cc)',
          boxShadow: isLight
            ? '0 0 8px rgba(251,191,36,0.6)'
            : '0 0 8px rgba(0,229,255,0.6)',
        }}
      >
        {isLight
          ? <Sun size={11} className="text-amber-900" />
          : <Moon size={11} className="text-[#050505]" />
        }
      </span>

      {/* Background icons (static) */}
      <Moon
        size={10}
        className="absolute left-1.5 transition-opacity duration-300"
        style={{ color: '#00E5FF', opacity: isLight ? 0.4 : 0 }}
      />
      <Sun
        size={10}
        className="absolute right-1.5 transition-opacity duration-300"
        style={{ color: '#0099BB', opacity: isLight ? 0 : 0.4 }}
      />
    </button>
  );
}

/* ── Navigation ─────────────────────────────────────────── */
export default function Navigation() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const isLight = theme === 'light';

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
        style={{ borderBottomColor: scrolled ? (isLight ? 'rgba(0,153,187,0.15)' : 'rgba(0,229,255,0.1)') : 'transparent' }}
      >
        {/* Bottom accent line */}
        {scrolled && (
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background: isLight
                ? 'linear-gradient(90deg, transparent, rgba(0,153,187,0.4), transparent)'
                : 'linear-gradient(90deg, transparent, rgba(0,229,255,0.4), rgba(0,255,156,0.2), transparent)',
            }}
          />
        )}

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded border border-cyan-400/50 group-hover:border-cyan-400 transition-colors" />
              <Cpu size={16} className="text-cyan-400" />
            </div>
            <span
              className="font-orbitron font-bold text-sm tracking-widest"
              style={{ color: isLight ? '#0F172A' : 'white' }}
            >
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

          {/* CTA + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/resume"
              className="btn-glow px-4 py-2 text-xs font-mono tracking-widest uppercase rounded"
            >
              <span>Resume</span>
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2"
              style={{ color: isLight ? '#0F172A' : 'white' }}
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <X size={20} className="text-cyan-400" />
                : <Menu size={20} />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: isLight ? 'rgba(240,244,248,0.97)' : 'rgba(5,5,5,0.97)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 pt-16">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`font-orbitron text-xl tracking-widest uppercase transition-colors ${
                pathname === item.href
                  ? 'text-cyan-400'
                  : isLight ? 'text-[#374151] hover:text-[#0F172A]' : 'text-[#BFC7D5] hover:text-white'
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
