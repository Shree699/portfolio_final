'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Github, Linkedin, Mail, ExternalLink, Cpu, Wifi, Bot, Layers } from 'lucide-react';
import AnimatedRoles from '@/components/animated-roles';

const PCBBackground = dynamic(() => import('@/components/pcb-background'), { ssr: false });
const HeroCanvas = dynamic(() => import('@/components/hero-canvas'), { ssr: false });

const SPECIALIZATIONS = [
  { icon: Cpu, label: 'Embedded Systems', color: '#00E5FF' },
  { icon: Layers, label: 'PCB Design', color: '#00FF9C' },
  { icon: Bot, label: 'UAV & AI', color: '#1E88E5' },
  { icon: Wifi, label: 'Industrial IoT', color: '#9D4EDD' },
];

const STATS = [
  { value: '20+', label: 'Engineering Projects' },
  { value: '3', label: 'Research Publications' },
  { value: '10+', label: 'Hackathons & Competitions' },
  { value: '1', label: 'Patent Filed' },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <PCBBackground />

      {/* Radial glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(0,229,255,0.07) 0%, transparent 70%)',
        }}
      />

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text content */}
            <div className="flex flex-col gap-6">

              {/* Status badge */}
              <div className="inline-flex items-center gap-2 self-start">
                <div className="w-2 h-2 rounded-full bg-[#00FF9C] animate-pulse" style={{ boxShadow: '0 0 8px #00FF9C' }} />
                <span className="font-mono text-xs text-[#00FF9C] tracking-widest uppercase">Available for Opportunities</span>
              </div>

              {/* Name */}
              <div>
                <p className="font-mono text-xs text-[#BFC7D5] tracking-[0.3em] uppercase mb-3">
                  Electronics & Communication Engineer
                </p>
                <h1 className="font-orbitron text-5xl xl:text-7xl font-black leading-none tracking-tight whitespace-nowrap text-white">
                  SHREENIVAS{' '}
                  <span style={{ color: '#00E5FF', textShadow: '0 0 30px rgba(0,229,255,0.4)' }}>A</span>
                </h1>
              </div>

              {/* Roles */}
              <div className="flex flex-col gap-1">
                <p className="font-mono text-xs text-[#BFC7D5] tracking-widest uppercase">Currently</p>
                <p className="font-sora text-xl text-white min-h-[1.75rem]">
                  <AnimatedRoles />
                </p>
              </div>

              {/* Sub-roles */}
              <div className="flex flex-wrap gap-2">
                {['PCB Designer', 'Drone Developer', 'Edge AI', 'ESP32', 'Jetson Orin', 'Altium Designer', 'YOLO', 'CAN Bus', 'OpenCV', 'KiCad', 'STM32', 'Python', 'Raspberry Pi'].map(tag => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>

              {/* Description */}
              <p className="text-[#BFC7D5] text-base leading-relaxed max-w-md font-ibm">
                Final-year ECE student combining embedded hardware and intelligent software — from industrial PCBs and embedded firmware to AI-powered disaster response drones.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-4">
                <Link
                  href="/projects"
                  className="btn-glow flex items-center gap-2 px-6 py-3 text-sm font-mono tracking-widest uppercase rounded"
                >
                  <span>View Projects</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-6 py-3 text-sm font-mono tracking-widest uppercase text-[#BFC7D5] hover:text-white border border-[#1C222B] hover:border-[#00E5FF]/30 rounded transition-all duration-300"
                >
                  <span>Contact Me</span>
                </Link>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4">
                {[
                  { icon: Github, href: 'https://github.com/Shree699', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/shreenivas-a-54178a272/', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:shreenivas699@gmail.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center border border-[#1C222B] hover:border-cyan-400/50 rounded transition-all duration-300 hover:bg-cyan-400/5 text-[#BFC7D5] hover:text-cyan-400"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: 3D Canvas */}
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 rounded-full border border-cyan-400/5 animate-spin-slow" />
                <div className="absolute w-96 h-96 rounded-full border border-cyan-400/5" style={{ animationDelay: '-5s', animation: 'spin-slow 30s linear infinite reverse' }} />
              </div>
              <HeroCanvas />

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-cyan-400/40" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-cyan-400/40" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-cyan-400/40" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-cyan-400/40" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-mono text-xs text-[#BFC7D5] tracking-widest">SCROLL</span>
          <ChevronDown size={16} className="text-cyan-400" />
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SPECIALIZATIONS.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="glass rounded-lg p-6 flex flex-col items-center gap-3 group hover:border-cyan-400/20 border border-[#1C222B] transition-all duration-300 hover:bg-white/[0.02]"
              >
                <div
                  className="w-12 h-12 rounded border flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ borderColor: `${color}30`, background: `${color}10` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <span className="font-mono text-xs text-center text-[#BFC7D5] tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="rounded-xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-8"
            style={{ background: 'rgba(11,15,18,0.6)', border: '1px solid #1C222B' }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.3), transparent)' }}
            />
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center relative">
                <span
                  className="font-orbitron text-4xl font-black"
                  style={{ color: '#00E5FF', textShadow: '0 0 20px rgba(0,229,255,0.4)' }}
                >
                  {value}
                </span>
                <span className="font-mono text-xs text-[#BFC7D5] tracking-widest uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS PREVIEW */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">Featured Work</p>
              <h2 className="font-orbitron text-3xl font-bold text-white section-title">Selected Projects</h2>
            </div>
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 font-mono text-xs text-cyan-400 hover:text-white transition-colors tracking-widest uppercase"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((project, i) => (
              <FeaturedCard key={i} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS PREVIEW */}
      <section className="relative z-10 py-20 bg-grid-fine">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">Expertise</p>
              <h2 className="font-orbitron text-3xl font-bold text-white section-title mb-6">Technical Arsenal</h2>
              <p className="text-[#BFC7D5] leading-relaxed mb-8 font-ibm">
                From bare-metal embedded C and industrial PCB design to Python computer vision pipelines —
                I operate across the full hardware-software stack. At home with an oscilloscope and a GPU alike.
              </p>
              <Link
                href="/skills"
                className="btn-glow flex items-center gap-2 w-fit px-6 py-3 text-sm font-mono tracking-widest uppercase rounded"
              >
                <span>Full Skills</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {SKILL_TAGS.map(({ name, color }) => (
                <div
                  key={name}
                  className="skill-chip"
                  style={{ borderColor: `${color}30` }}
                >
                  <span className="chip-dot" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className="rounded-2xl p-12 relative overflow-hidden"
            style={{ background: 'rgba(11,15,18,0.8)', border: '1px solid #1C222B' }}
          >
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.06) 0%, transparent 70%)' }}
            />
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">Let's Build Something</p>
            <h2 className="font-orbitron text-3xl lg:text-4xl font-bold text-white mb-4">
              Open to Full-Time Roles
            </h2>
            <p className="text-[#BFC7D5] mb-8 max-w-lg mx-auto font-ibm">
              Interested in Embedded Systems, PCB Design, Computer Vision, Edge AI, Industrial Automation,
              and UAV technologies. Let's build something real together.
            </p>
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center gap-2 px-8 py-4 text-sm font-mono tracking-widest uppercase rounded"
            >
              <span>Get In Touch</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const FEATURED_PROJECTS = [
  {
    title: 'Rescue Wings',
    subtitle: 'Autonomous Disaster Response Drone',
    tags: ['Jetson Orin', 'YOLO', 'GPS', 'ESP32'],
    color: '#00E5FF',
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/projects',
  },
  {
    title: 'Anti-Drone Detection',
    subtitle: 'RF & Vision Based Detection System',
    tags: ['RF Detection', 'Computer Vision', 'Embedded Controller'],
    color: '#00FF9C',
    image: '/projects/anti-drone-detection.jpeg',
    href: '/projects',
  },
  {
    title: 'Industrial DAC PCB',
    subtitle: 'Altium Designer — 50+ Components',
    tags: ['Altium Designer', 'PCB Routing', 'DFM'],
    color: '#1E88E5',
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/projects',
  },
];

const SKILL_TAGS = [
  { name: 'STM32 / ESP32', color: '#00E5FF' },
  { name: 'NVIDIA Jetson Orin', color: '#00FF9C' },
  { name: 'Altium Designer', color: '#9D4EDD' },
  { name: 'KiCad', color: '#00E5FF' },
  { name: 'Arduino / AVR', color: '#00FF9C' },
  { name: 'Raspberry Pi 5', color: '#1E88E5' },
  { name: 'YOLO / OpenCV', color: '#00E5FF' },
  { name: 'CAN / UART / SPI / I2C', color: '#9D4EDD' },
  { name: 'Python / C / C++', color: '#1E88E5' },
  { name: 'PCB Layout & Routing', color: '#00FF9C' },
  { name: 'Sensor Integration', color: '#00E5FF' },
  { name: 'ArduPilot / Pixhawk', color: '#9D4EDD' },
];

function FeaturedCard({
  title, subtitle, tags, color, image, href,
}: {
  title: string; subtitle: string; tags: string[]; color: string; image: string; href: string;
}) {
  return (
    <Link href={href} className="group block relative rounded-xl overflow-hidden border border-[#1C222B] hover:border-cyan-400/30 transition-all duration-500">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,5,5,0.2), rgba(5,5,5,0.8))' }} />
        {/* Color accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }}
        />
      </div>

      {/* Content */}
      <div className="p-5" style={{ background: 'rgba(11,15,18,0.9)' }}>
        <h3 className="font-orbitron text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-[#BFC7D5] text-xs font-ibm mb-3">{subtitle}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map(tag => (
            <span key={tag} className="tech-tag text-[10px]">{tag}</span>
          ))}
        </div>
        <div className="flex items-center gap-1 font-mono text-xs transition-all duration-300" style={{ color }}>
          <span>View Project</span>
          <ExternalLink size={10} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${color}08, transparent 70%)` }}
      />
    </Link>
  );
}
