'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="fixed inset-0 z-0 bg-grid-fine opacity-40 pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        {/* 404 */}
        <div className="relative mb-8">
          <span className="font-orbitron text-[180px] font-black leading-none text-white/[0.03] select-none">404</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-orbitron text-6xl font-black" style={{ color: '#00E5FF', textShadow: '0 0 40px rgba(0,229,255,0.4)' }}>404</span>
          </div>
        </div>

        <p className="font-mono text-xs text-[#BFC7D5] tracking-widest uppercase mb-3">Signal Lost</p>
        <h1 className="font-orbitron text-2xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-[#BFC7D5] font-ibm mb-8 max-w-sm mx-auto">
          This circuit path doesn't exist. The page you're looking for has been decommissioned or relocated.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link href="/" className="btn-glow flex items-center gap-2 px-6 py-3 text-sm font-mono tracking-widest uppercase rounded">
            <Home size={14} />
            <span>Return Home</span>
          </Link>
          <Link href="/projects" className="flex items-center gap-2 px-6 py-3 text-sm font-mono tracking-widest uppercase text-[#BFC7D5] hover:text-white border border-[#1C222B] hover:border-cyan-400/30 rounded transition-all">
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
