'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowUp, Cpu } from 'lucide-react';

const FOOTER_LINKS = [
  { section: 'Portfolio', links: [{ label: 'Projects', href: '/projects' }, { label: 'Skills', href: '/skills' }, { label: 'Experience', href: '/experience' }] },
  { section: 'Research', links: [{ label: 'Publications', href: '/research' }] },
  { section: 'Connect', links: [{ label: 'Contact', href: '/contact' }, { label: 'Resume', href: '/resume' }, { label: 'Achievements', href: '/achievements' }] },
];

function FooterPCB() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = svg.querySelectorAll('.trace');
    paths.forEach((p, i) => {
      const path = p as SVGPathElement;
      const len = path.getTotalLength();
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = String(len);
      path.style.animation = `trace-flow ${3 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`;
    });
  }, []);

  return (
    <svg ref={svgRef} className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path className="trace" d="M0,60 H200 L220,40 H400 L420,60 H600" stroke="#00E5FF" strokeWidth="1" fill="none" />
      <path className="trace" d="M600,60 H800 L820,80 H1000 L1020,60 H1200" stroke="#00E5FF" strokeWidth="1" fill="none" />
      <path className="trace" d="M0,80 H100 L120,60 H300 L320,80 H500" stroke="#00FF9C" strokeWidth="0.5" fill="none" />
      <path className="trace" d="M700,40 H900 L920,60 H1100 L1120,40 H1200" stroke="#00FF9C" strokeWidth="0.5" fill="none" />
      {[100, 250, 420, 600, 750, 900, 1100].map(x => (
        <circle key={x} cx={x} cy={60} r="3" fill="#00E5FF" opacity="0.6" />
      ))}
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-[#1C222B] bg-[#050505] overflow-hidden">
      {/* PCB traces */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FooterPCB />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded border border-cyan-400/50" />
                <Cpu size={16} className="text-cyan-400" />
              </div>
              <span className="font-orbitron font-bold text-sm tracking-widest">
                SHREE<span className="text-cyan-400">.</span>PORTFOLIO
              </span>
            </Link>
            <p className="text-[#BFC7D5] text-xs font-ibm leading-relaxed mb-4">
              Electronics & Communication Engineer specializing in embedded systems, PCB design, robotics, and edge AI.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: 'https://github.com/shreenivas-a', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/shreenivas-a', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:shreenivas699@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center border border-[#1C222B] hover:border-cyan-400/40 rounded transition-all text-[#BFC7D5] hover:text-cyan-400"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map(({ section, links }) => (
            <div key={section}>
              <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">{section}</p>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="font-ibm text-sm text-[#BFC7D5] hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      <span className="w-0 h-px bg-cyan-400 transition-all group-hover:w-3" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1C222B] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[#BFC7D5]">
            © 2025 Shreenivas A · Built with{' '}
            <span className="text-cyan-400">Next.js + Three.js</span>
          </p>

          {/* Status indicators */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-pulse" style={{ boxShadow: '0 0 4px #00FF9C' }} />
              <span className="font-mono text-[10px] text-[#BFC7D5]">Systems Online</span>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 font-mono text-xs text-[#BFC7D5] hover:text-cyan-400 transition-colors group"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
