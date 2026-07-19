'use client';

import { useEffect, useState } from 'react';

const BOOT_STEPS = [
  { label: 'Initializing AI Core...', percent: 15 },
  { label: 'Loading Embedded Systems...', percent: 30 },
  { label: 'Loading PCB Engine...', percent: 50 },
  { label: 'Loading Drone Navigation...', percent: 65 },
  { label: 'Calibrating Sensor Arrays...', percent: 78 },
  { label: 'Loading Neural Interface...', percent: 90 },
  { label: 'System Ready.', percent: 100 },
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (step >= BOOT_STEPS.length) {
      setTimeout(() => { setFading(true); setTimeout(onComplete, 700); }, 400);
      return;
    }
    const target = BOOT_STEPS[step].percent;
    let current = step === 0 ? 0 : BOOT_STEPS[step - 1].percent;
    const interval = setInterval(() => {
      current += 1;
      setProgress(current);
      if (current >= target) {
        clearInterval(interval);
        setTimeout(() => setStep(s => s + 1), 200);
      }
    }, 12);
    return () => clearInterval(interval);
  }, [step, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center transition-opacity duration-700 ${fading ? 'opacity-0' : 'opacity-100'}`}
      style={{ background: '#050505' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.4), transparent)',
          animation: 'scan 3s linear infinite',
          top: 0,
        }}
      />

      {/* Central content */}
      <div className="relative flex flex-col items-center gap-8 w-full max-w-md px-8">
        {/* Processor icon */}
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 96 96" className="w-full h-full" fill="none">
            <rect x="24" y="24" width="48" height="48" rx="4" stroke="#00E5FF" strokeWidth="1.5" />
            <rect x="32" y="32" width="32" height="32" rx="2" stroke="#00E5FF" strokeWidth="1" opacity="0.5" />
            {[36, 48, 60].map(y => (
              <g key={y}>
                <line x1="0" y1={y} x2="22" y2={y} stroke="#00E5FF" strokeWidth="1" opacity="0.5" />
                <line x1="74" y1={y} x2="96" y2={y} stroke="#00E5FF" strokeWidth="1" opacity="0.5" />
              </g>
            ))}
            {[36, 48, 60].map(x => (
              <g key={x}>
                <line x1={x} y1="0" x2={x} y2="22" stroke="#00E5FF" strokeWidth="1" opacity="0.5" />
                <line x1={x} y1="74" x2={x} y2="96" stroke="#00E5FF" strokeWidth="1" opacity="0.5" />
              </g>
            ))}
            <rect x="38" y="38" width="20" height="20" rx="2" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" strokeWidth="1" />
            <text x="48" y="52" textAnchor="middle" fill="#00E5FF" fontSize="8" fontFamily="JetBrains Mono" fontWeight="700">AI</text>
          </svg>
          <div className="absolute inset-0 rounded-full animate-ping" style={{ border: '1px solid rgba(0,229,255,0.15)' }} />
        </div>

        {/* Name */}
        <div className="text-center">
          <p className="font-orbitron text-xs tracking-[0.4em] text-cyan-400 uppercase mb-2">ECE Portfolio</p>
          <p className="font-mono text-xs text-[#BFC7D5] tracking-widest">v2.4.1 NEURAL EDITION</p>
        </div>

        {/* Boot log */}
        <div className="w-full space-y-1 min-h-[120px]">
          {BOOT_STEPS.slice(0, step + 1).map((s, i) => (
            <div key={i} className="flex items-center gap-3 font-mono text-xs">
              <span className="text-[#00FF9C]">[OK]</span>
              <span className={i === step ? 'text-white' : 'text-[#BFC7D5] opacity-60'}>{s.label}</span>
            </div>
          ))}
          {step < BOOT_STEPS.length && (
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="text-cyan-400 animate-pulse">[ ..]</span>
              <span className="text-cyan-400">{BOOT_STEPS[step]?.label}</span>
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="w-full space-y-2">
          <div className="flex justify-between font-mono text-xs">
            <span className="text-[#BFC7D5]">LOADING</span>
            <span className="text-cyan-400">{progress}%</span>
          </div>
          <div className="h-px w-full bg-[#1C222B] relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #00E5FF, #00FF9C)',
                boxShadow: '0 0 8px #00E5FF',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
