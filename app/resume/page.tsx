'use client';

import { Download, FileText, ExternalLink } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <div className="fixed inset-0 z-0 bg-grid-fine opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">Documents</p>
          <h1 className="font-orbitron text-4xl font-black text-white section-title mb-4">Resume</h1>
        </div>

        <div className="p-8 rounded-xl border border-[#1C222B] bg-[#0B0F12] mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.3)' }}>
              <FileText size={20} className="text-cyan-400" />
            </div>
            <div>
              <h2 className="font-orbitron text-lg font-bold text-white">Shreenivas A — CV</h2>
              <p className="font-mono text-xs text-[#BFC7D5]">Electronics & Communication Engineer · Updated June 2026</p>
            </div>
          </div>

          <p className="text-[#BFC7D5] font-ibm mb-6 leading-relaxed">
            My resume covers my complete professional background including embedded systems engineering experience,
            PCB design portfolio, AI/robotics projects, research publications, and academic achievements.
          </p>

          <div className="flex gap-3">
            <a
              href="/resume.pdf"
              download="Shreenivas-A-Resume.pdf"
              className="btn-glow flex items-center gap-2 px-6 py-3 text-sm font-mono tracking-widest uppercase rounded"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-sm font-mono tracking-widest uppercase text-[#BFC7D5] hover:text-white border border-[#1C222B] hover:border-cyan-400/30 rounded transition-all"
            >
              <ExternalLink size={14} />
              <span>View Online</span>
            </a>
          </div>
        </div>

        {/* Quick summary sections */}
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: 'Education',
              items: ['B.Tech Electronics & Communication Engineering', 'CGPA: 8.9 / 10', 'Institute of Technology, 2020–2024'],
            },
            {
              title: 'Core Skills',
              items: ['Embedded C / C++ / Python', 'STM32, ESP32, NVIDIA Jetson', 'Altium Designer / KiCad PCB Design'],
            },
            {
              title: 'Key Projects',
              items: ['Rescue Wings — Autonomous Drone', 'Anti-Drone Detection System', 'Water Contamination IoT Platform'],
            },
            {
              title: 'Publications',
              items: ['IEEE ICETEMS 2024 — Edge AI Optimization', 'IEEE Sensors Journal (Under Review)', 'ICED 2023 — IoT Water Monitoring'],
            },
          ].map(({ title, items }) => (
            <div key={title} className="p-5 rounded-xl border border-[#1C222B] bg-[#0B0F12]">
              <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">{title}</p>
              <ul className="space-y-1.5">
                {items.map(item => (
                  <li key={item} className="flex items-center gap-2 font-ibm text-xs text-[#BFC7D5]">
                    <span className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
