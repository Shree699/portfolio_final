'use client';

import Link from 'next/link';
import { ExternalLink, Github, ArrowRight, Eye } from 'lucide-react';

const PROJECTS = [
  {
    slug: 'rescue-wings',
    title: 'Rescue Wings',
    subtitle: 'Autonomous Disaster Response Drone',
    description: 'MSME-registered startup project developing an autonomous UAV for disaster management. Integrates computer vision for victim detection, GPS-based navigation, and embedded control using Jetson Orin and ESP32.',
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Jetson Orin', 'YOLO', 'GPS', 'ESP32', 'Raspberry Pi', 'Computer Vision', 'Python'],
    status: 'In Progress',
    color: '#00E5FF',
    featured: true,
    year: '2024–Present',
    role: 'Founder & Lead Engineer',
  },
  {
    slug: 'anti-drone',
    title: 'Anti-Drone Detection System',
    subtitle: 'RF Sensing & Visual Detection',
    description: 'Drone detection system using RF sensing and computer vision. Features radar-concept-based signal monitoring, embedded controller for real-time detection, and an architecture designed for future jamming capability.',
    image: '/projects/anti-drone-detection.jpeg',
    tags: ['RF Detection', 'Computer Vision', 'Embedded Controller', 'Detection'],
    status: 'Prototype',
    color: '#00FF9C',
    featured: true,
    year: '2024',
    role: 'Embedded & Vision Engineer',
  },
  {
    slug: 'water-contamination',
    title: 'Water Contamination Detection',
    subtitle: 'Industrial IoT Sensing Platform',
    description: 'Multi-parameter industrial water monitoring system measuring pH, TDS, conductivity, turbidity, and UV sterilization status. Features automatic isolation valve control, IoT dashboard, and ESP32-based embedded control.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['ESP32', 'pH Sensor', 'TDS', 'Conductivity', 'Turbidity', 'IoT Dashboard'],
    status: 'Completed',
    color: '#1E88E5',
    featured: false,
    year: '2023',
    role: 'Embedded Systems Engineer',
  },
  {
    slug: 'laundry-management',
    title: 'Smart Laundry Management',
    subtitle: 'IoT-Based Hostel Automation',
    description: 'RFID-based laundry management system for hostels. Uses QR payment, SMS notifications, weight sensor for load detection, and ESP32 IoT integration for real-time slot monitoring.',
    image: '/projects/smart-laundry-management.jpg',
    tags: ['RFID', 'QR Payment', 'SMS', 'Weight Sensor', 'ESP32', 'IoT'],
    status: 'Completed',
    color: '#9D4EDD',
    featured: false,
    year: '2023',
    role: 'Embedded Engineer',
  },
  {
    slug: 'dac-pcb',
    title: 'Industrial DAC PCB',
    subtitle: 'Altium Designer — 50+ Components',
    description: 'Industrial-grade DAC PCB designed in Altium Designer featuring 50+ components. Includes full schematic capture, multilayer PCB layout, DFM review, signal routing, and power distribution for industrial sensor applications.',
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Altium Designer', 'PCB Routing', 'DFM', 'Schematic', 'Multilayer PCB'],
    status: 'Completed',
    color: '#00FF9C',
    featured: false,
    year: '2024',
    role: 'PCB Design Lead',
  },
  {
    slug: 'queueless-billing',
    title: 'Queueless Billing System',
    subtitle: 'Computer Vision Checkout',
    description: 'Computer vision-based retail checkout system using an overhead camera and object detection to automatically identify and bill items without barcode scanning. Research paper authored on this project.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Raspberry Pi', 'OpenCV', 'Python', 'Object Detection'],
    status: 'Research',
    color: '#00E5FF',
    featured: false,
    year: '2025',
    role: 'CV & Embedded Engineer',
  },
];

const STATUS_COLOR: Record<string, string> = {
  Completed: '#00FF9C',
  'In Progress': '#00E5FF',
  Prototype: '#9D4EDD',
  Research: '#1E88E5',
};

export default function ProjectsPage() {
  const featured = PROJECTS.filter(p => p.featured);
  const rest = PROJECTS.filter(p => !p.featured);

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <div className="fixed inset-0 z-0 bg-grid-fine opacity-40 pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,229,255,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">Portfolio</p>
          <h1 className="font-orbitron text-4xl lg:text-5xl font-black text-white section-title mb-4">Projects</h1>
          <p className="text-[#BFC7D5] font-ibm max-w-xl">
            Real engineering projects — hardware I built, firmware I wrote, and systems I shipped.
          </p>
        </div>

        {/* Featured row */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {featured.map(p => <FeaturedProjectCard key={p.slug} {...p} />)}
        </div>

        {/* Regular grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map(p => <ProjectCard key={p.slug} {...p} />)}
        </div>

      </div>
    </div>
  );
}

function FeaturedProjectCard(p: typeof PROJECTS[0]) {
  return (
    <div className="group relative rounded-xl overflow-hidden border border-[#1C222B] hover:border-cyan-400/30 transition-all duration-500 bg-[#0B0F12]">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, rgba(5,5,5,0.1), rgba(5,5,5,0.85))` }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${p.color}60, transparent)` }} />

        {/* Status & Year */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded" style={{ color: STATUS_COLOR[p.status], background: `${STATUS_COLOR[p.status]}15`, border: `1px solid ${STATUS_COLOR[p.status]}30` }}>
            {p.status}
          </span>
          <span className="font-mono text-[10px] text-[#BFC7D5] bg-black/40 px-2 py-1 rounded">{p.year}</span>
        </div>

        {/* Corner decoration */}
        <div className="absolute top-3 right-3 w-5 h-5 border-t border-r" style={{ borderColor: p.color + '60' }} />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <span className="font-mono text-[10px] text-[#BFC7D5] tracking-widest uppercase">{p.role}</span>
          <h3 className="font-orbitron text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mt-1">{p.title}</h3>
          <p className="font-mono text-xs mt-0.5" style={{ color: p.color }}>{p.subtitle}</p>
        </div>
        <p className="text-[#BFC7D5] text-sm font-ibm leading-relaxed mb-4 line-clamp-3">{p.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tags.slice(0, 5).map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
          {p.tags.length > 5 && <span className="tech-tag">+{p.tags.length - 5}</span>}
        </div>
        <div className="flex items-center gap-3">
          <Link href={`/projects/${p.slug}`} className="btn-glow flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-widest uppercase rounded">
            <span>View Details</span>
            <Eye size={12} />
          </Link>
          <a href="https://github.com/shreenivas-a" target="_blank" rel="noopener noreferrer" className="p-2 border border-[#1C222B] rounded hover:border-cyan-400/30 text-[#BFC7D5] hover:text-white transition-all">
            <Github size={14} />
          </a>
        </div>
      </div>

      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 0%, ${p.color}06, transparent 70%)` }} />
    </div>
  );
}

function ProjectCard(p: typeof PROJECTS[0]) {
  return (
    <div className="group relative rounded-xl overflow-hidden border border-[#1C222B] hover:border-cyan-400/30 transition-all duration-500 bg-[#0B0F12]">
      <div className="relative h-40 overflow-hidden">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,5,5,0.2), rgba(5,5,5,0.85))' }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${p.color}50, transparent)` }} />
        <div className="absolute top-3 left-3">
          <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded" style={{ color: STATUS_COLOR[p.status], background: `${STATUS_COLOR[p.status]}15`, border: `1px solid ${STATUS_COLOR[p.status]}30` }}>
            {p.status}
          </span>
        </div>
      </div>

      <div className="p-5">
        <span className="font-mono text-[10px] text-[#BFC7D5] tracking-widest uppercase">{p.year} · {p.role}</span>
        <h3 className="font-orbitron text-sm font-bold text-white group-hover:text-cyan-400 transition-colors mt-1 mb-1">{p.title}</h3>
        <p className="font-mono text-xs mb-2" style={{ color: p.color }}>{p.subtitle}</p>
        <p className="text-[#BFC7D5] text-xs font-ibm leading-relaxed mb-3 line-clamp-2">{p.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {p.tags.slice(0, 3).map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
          {p.tags.length > 3 && <span className="tech-tag">+{p.tags.length - 3}</span>}
        </div>
        <Link href={`/projects/${p.slug}`} className="flex items-center gap-1 font-mono text-xs transition-colors" style={{ color: p.color }}>
          <span>View Project</span>
          <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
