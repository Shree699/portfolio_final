'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, Mail, Phone, Download } from 'lucide-react';

const TIMELINE = [
  {
    year: '2021 – Present',
    type: 'Education',
    title: 'B.E Electronics and Communication Engineering',
    org: 'Chennai Institute of Technology',
    desc: 'CGPA 8.19. Relevant Coursework: Embedded Systems, Microprocessors, Digital Electronics, Communication Systems, PCB Design.',
    tags: ['Embedded Systems', 'Microprocessors', 'PCB Design', 'Digital Electronics'],
    color: '#00E5FF',
  },
  {
    year: 'Nov 2024 – Jan 2025',
    type: 'Internship',
    title: 'PCB Designer & Embedded Systems Engineer',
    org: 'ADHVX Industries',
    desc: 'Designed industrial PCBs in Altium Designer and developed embedded hardware for sensor-based automation systems. Worked on schematic capture, layout routing, DFM review, and firmware integration.',
    tags: ['Altium Designer', 'PCB Design', 'Embedded Firmware', 'Sensor Automation'],
    color: '#00FF9C',
  },
  {
    year: 'May 2024 – Jun 2024',
    type: 'Internship',
    title: 'Engineering Trainee',
    org: 'Woory Automotive Pvt Ltd',
    desc: 'Gained hands-on exposure to SMT manufacturing processes, PCB assembly workflows, AOI inspection, and production line analysis used in automotive electronics.',
    tags: ['SMT Process', 'PCB Assembly', 'AOI Inspection', 'Automotive Electronics'],
    color: '#1E88E5',
  },
  {
    year: 'May 2025 – Jun 2025',
    type: 'Research',
    title: 'Research Author — Queueless Billing System',
    org: 'Academic Research',
    desc: 'Authored research paper on a computer vision-based queueless billing system. Designed and tested the embedded hardware pipeline and vision inference architecture.',
    tags: ['Computer Vision', 'OpenCV', 'Raspberry Pi', 'Research'],
    color: '#9D4EDD',
  },
  {
    year: 'MSME Registered',
    type: 'Startup',
    title: 'Founder — Rescue Wings',
    org: 'MSME Registered Startup',
    desc: 'Founded and leading development of an autonomous disaster response UAV platform integrating computer vision, embedded systems, GPS navigation, and intelligent victim detection for emergency rescue applications.',
    tags: ['Jetson Orin', 'YOLO', 'GPS', 'Autonomous UAV', 'MSME'],
    color: '#00E5FF',
  },
];

const PHILOSOPHY = [
  {
    num: '01',
    title: 'Hardware First',
    desc: 'Software becomes meaningful only when reliable hardware exists beneath it. Good engineering starts with robust electronics, thoughtful PCB design, and efficient embedded firmware.',
  },
  {
    num: '02',
    title: 'Build for Reliability',
    desc: "Every embedded system should be dependable in real-world conditions. From industrial sensors to autonomous drones, reliability matters more than unnecessary complexity.",
  },
  {
    num: '03',
    title: 'Intelligence at the Edge',
    desc: 'AI should operate where data is generated. My focus is building edge intelligence using embedded systems, computer vision, and autonomous UAV platforms — without depending entirely on cloud infrastructure.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      {/* Background */}
      <div className="fixed inset-0 z-0 bg-grid-fine opacity-40 pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,229,255,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">Who I Am</p>
          <h1 className="font-orbitron text-4xl lg:text-5xl font-black text-white section-title">About Me</h1>
        </div>

        {/* Hero split */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">

          {/* Left: Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-xl overflow-hidden">
              <img
                src="/about/shreenivas.jpg"
                alt="Shreenivas A"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(5,5,5,0.6))' }}
              />

              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl" style={{
                background: 'linear-gradient(135deg, rgba(0,229,255,0.3), transparent 50%, rgba(0,255,156,0.2) 100%)',
                padding: '1px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }} />

              {/* Corner frames */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />

              {/* Status overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-lg p-3 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00FF9C] animate-pulse" style={{ boxShadow: '0 0 6px #00FF9C' }} />
                  <div>
                    <p className="font-mono text-xs text-white">Shreenivas A</p>
                    <p className="font-mono text-[10px] text-[#BFC7D5]">ECE Engineer · Chennai, IN</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -right-4 top-8 hidden lg:block">
              <div className="glass rounded-lg p-4 border border-[#1C222B]">
                <p className="font-orbitron text-2xl font-black text-cyan-400">8.19</p>
                <p className="font-mono text-[10px] text-[#BFC7D5]">CGPA</p>
              </div>
            </div>
            <div className="absolute -right-4 top-36 hidden lg:block">
              <div className="glass rounded-lg p-4 border border-[#1C222B]">
                <p className="font-orbitron text-2xl font-black" style={{ color: '#00FF9C' }}>20+</p>
                <p className="font-mono text-[10px] text-[#BFC7D5]">Projects</p>
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="space-y-6">
            <div>
              <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
                ECE Engineer Building
                <br />
                <span className="text-cyan-400">Hardware That Thinks.</span>
              </h2>
              <div className="space-y-4 text-[#BFC7D5] font-ibm leading-relaxed">
                <p>
                  I am a final-year Electronics and Communication Engineering student at Chennai Institute of Technology
                  with a strong interest in Embedded Systems, PCB Design, Industrial IoT, Computer Vision, and
                  Autonomous UAVs. My work combines hardware design with intelligent software — ranging from
                  industrial sensor PCBs and embedded firmware to AI-powered disaster response drones.
                </p>
                <p>
                  During my internship at ADHVX Industries, I designed industrial PCBs in Altium Designer and worked
                  on embedded hardware for sensor-based automation systems. At Woory Automotive, I gained hands-on
                  exposure to SMT manufacturing, PCB assembly, and production workflows used in automotive electronics.
                </p>
                <p>
                  I am also the founder of Rescue Wings, an MSME-registered startup developing autonomous UAV solutions
                  for disaster management. I enjoy transforming concepts into production-ready hardware — whether that
                  means routing a PCB, optimizing embedded firmware, integrating sensors, or deploying AI models on
                  NVIDIA Jetson platforms.
                </p>
              </div>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Location', value: 'Chennai, Tamil Nadu', icon: MapPin },
                { label: 'Email', value: 'shreenivas699@gmail.com', icon: Mail },
                { label: 'Specialization', value: 'Embedded Systems · PCB Design · UAVs', icon: null },
                { label: 'Status', value: 'Available for Full-Time Roles', icon: null },
                { label: 'CGPA', value: '8.19 / 10', icon: null },
                { label: 'Projects', value: '20+', icon: null },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="p-3 rounded-lg border border-[#1C222B] bg-[#0B0F12]">
                  <p className="font-mono text-[10px] text-[#BFC7D5] tracking-widest uppercase mb-1">{label}</p>
                  <p className="font-ibm text-sm text-white flex items-center gap-1">
                    {Icon && <Icon size={12} className="text-cyan-400" />}
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <Link href="/resume" className="btn-glow flex items-center gap-2 px-5 py-2.5 text-xs font-mono tracking-widest uppercase rounded">
                <span>Download Resume</span>
                <Download size={12} />
              </Link>
              <Link href="/projects" className="flex items-center gap-2 px-5 py-2.5 text-xs font-mono tracking-widest uppercase text-[#BFC7D5] hover:text-white border border-[#1C222B] hover:border-cyan-400/30 rounded transition-all">
                <span>See Projects</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* Engineering Philosophy */}
        <section className="mb-24">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">Engineering Principles</p>
          <h2 className="font-orbitron text-2xl font-bold text-white section-title mb-10">Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PHILOSOPHY.map(({ num, title, desc }) => (
              <div key={num} className="p-6 rounded-xl border border-[#1C222B] bg-[#0B0F12] relative group hover:border-cyan-400/20 transition-all">
                <span className="font-orbitron text-5xl font-black text-white/5 absolute top-4 right-4">{num}</span>
                <p className="font-mono text-xs text-cyan-400 mb-2">{num}</p>
                <h3 className="font-orbitron text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-[#BFC7D5] text-sm font-ibm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">Journey</p>
          <h2 className="font-orbitron text-2xl font-bold text-white section-title mb-12">Education & Experience</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px timeline-line hidden md:block" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div key={i} className="group relative md:pl-16">
                  {/* Node */}
                  <div
                    className="absolute left-4 top-5 w-5 h-5 rounded-full border-2 hidden md:flex items-center justify-center -translate-x-1/2 transition-all duration-300 group-hover:scale-125"
                    style={{ borderColor: item.color, background: '#050505', boxShadow: `0 0 10px ${item.color}40` }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                  </div>

                  <div className="p-6 rounded-xl border border-[#1C222B] bg-[#0B0F12] group-hover:border-cyan-400/20 transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded"
                            style={{ color: item.color, background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                          >
                            {item.type}
                          </span>
                          <span className="font-mono text-xs text-[#BFC7D5]">{item.year}</span>
                        </div>
                        <h3 className="font-orbitron text-sm font-bold text-white">{item.title}</h3>
                        <p className="font-mono text-xs text-cyan-400">{item.org}</p>
                      </div>
                    </div>
                    <p className="text-[#BFC7D5] text-sm font-ibm leading-relaxed mb-3">{item.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(tag => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
