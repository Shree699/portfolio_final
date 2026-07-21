'use client';

import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const FREELANCE_PROJECTS = [
  {
    title: 'Solar Mill Power & Controller System',
    description:
      'A two-board solar power management and control system with STM32-based local monitoring and LCD display.',
    tags: ['Altium Designer', 'STM32', 'Power Electronics', 'PCB Layout'],
    color: '#00E5FF',
  },
  {
    title: 'Smart Gas Knob — WiFi Servo Control',
    description:
      'A compact WiFi-enabled controller board for automated, servo-actuated gas valve control.',
    tags: ['ESP-01', 'WiFi', 'IoT', 'Embedded Firmware'],
    color: '#00FF9C',
  },
  {
    title: 'CAN Bus Display & Reset Interface',
    description:
      'A CAN bus interconnect and reset/bootloader switch board for a networked display system.',
    tags: ['CAN Bus', 'Transceiver IC', 'Altium Designer', 'PCB Layout'],
    color: '#9D4EDD',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function FreelancePage() {
  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      {/* Background layers — identical to other pages */}
      <div className="fixed inset-0 z-0 bg-grid-fine opacity-40 pointer-events-none" />
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,229,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Page Header ── */}
        <motion.div
          className="mb-16"
          variants={headerVariants}
          initial="hidden"
          animate="show"
        >
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">
            Independent Work
          </p>
          <h1 className="font-orbitron text-4xl lg:text-5xl font-black text-white section-title mb-4">
            Freelance Work
          </h1>
          <p className="text-[#BFC7D5] font-ibm max-w-xl">
            Client PCB design projects delivered end-to-end — from schematic to
            fabrication-ready layout. Details are limited due to client confidentiality.
          </p>
        </motion.div>

        {/* ── Confidentiality notice ── */}
        <motion.div
          className="flex items-center gap-3 mb-10 px-4 py-3 rounded-lg border border-[#1C222B] bg-[#0B0F12] w-fit"
          variants={headerVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.15 }}
        >
          <Lock size={13} className="text-cyan-400 flex-shrink-0" />
          <span className="font-mono text-xs text-[#BFC7D5] tracking-wider">
            Client names and full specifications are withheld under NDA
          </span>
        </motion.div>

        {/* ── Project cards grid ── */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {FREELANCE_PROJECTS.map((project) => (
            <FreelanceCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function FreelanceCard({
  title,
  description,
  tags,
  color,
}: {
  title: string;
  description: string;
  tags: string[];
  color: string;
}) {
  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden border border-[#1C222B] bg-[#0B0F12] transition-all duration-500"
      variants={cardVariants}
      whileHover={{ borderColor: `${color}40` }}
    >
      {/* Top colour-accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${color}70, transparent)` }}
      />

      {/* Corner bracket decorations (PCB aesthetic) */}
      <div
        className="absolute top-3 right-3 w-4 h-4 border-t border-r opacity-40 transition-opacity duration-300 group-hover:opacity-80"
        style={{ borderColor: color }}
      />
      <div
        className="absolute bottom-3 left-3 w-4 h-4 border-b border-l opacity-40 transition-opacity duration-300 group-hover:opacity-80"
        style={{ borderColor: color }}
      />

      {/* Solder-pad accent row */}
      <div className="absolute top-0 left-5 flex gap-2 -translate-y-px">
        {[color, '#1C222B', color].map((c, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: c, boxShadow: i !== 1 ? `0 0 5px ${c}` : 'none', opacity: 0.5 }}
          />
        ))}
      </div>

      {/* Card body */}
      <div className="p-6 pt-7">
        {/* Lock badge */}
        <div className="flex items-center gap-2 mb-4">
          <span
            className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded flex items-center gap-1"
            style={{
              color,
              background: `${color}12`,
              border: `1px solid ${color}25`,
            }}
          >
            <Lock size={9} />
            Client Project
          </span>
        </div>

        {/* Title */}
        <h2 className="font-orbitron text-sm font-bold text-white mb-3 leading-snug">
          {title}
        </h2>

        {/* One-line description */}
        <p className="text-[#BFC7D5] text-xs font-ibm leading-relaxed mb-5">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle hover radial glow — no interactive affordance */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${color}06, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}
