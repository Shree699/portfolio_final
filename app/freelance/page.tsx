'use client';

import { motion } from 'framer-motion';
import { Lock, ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

/* ─── Data ──────────────────────────────────────────────── */

const FREELANCE_PROJECTS = [
  {
    title: 'Solar Mill Power & Controller System',
    description:
      'A two-board solar power management and control system with STM32-based local monitoring and LCD display.',
    tags: ['Altium Designer', 'STM32', 'Power Electronics', 'PCB Layout'],
    color: '#00E5FF',
    images: [
      { src: '/freelance/solar-mill-power-board.png', caption: 'Power Board' },
      { src: '/freelance/solar-mill-controller-board.png', caption: 'Controller Board' },
    ],
  },
  {
    title: 'CAN Bus Display & Reset Interface',
    description:
      'A CAN bus interconnect and reset/bootloader switch board for a networked display system.',
    tags: ['CAN Bus', 'Transceiver IC', 'Altium Designer', 'PCB Layout'],
    color: '#9D4EDD',
    images: [
      { src: '/freelance/can-bus-display-board.png', caption: 'Display Interconnect' },
      { src: '/freelance/can-bus-reset-board.png', caption: 'Reset / Boot Switch' },
    ],
  },
  {
    title: 'Smart Gas Knob — WiFi Servo Control',
    description:
      'A compact WiFi-enabled controller board for automated, servo-actuated gas valve control.',
    tags: ['ESP-01', 'WiFi', 'IoT', 'Embedded Firmware'],
    color: '#00FF9C',
    images: [
      { src: '/freelance/smart-gas-knob-board.png', caption: '' },
    ],
  },
];

/* ─── Animation variants ────────────────────────────────── */

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
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

/* ─── PCB image slot ─────────────────────────────────────── */

/**
 * Renders a Next.js <Image> if the file exists (detected via onError),
 * otherwise falls back to a styled placeholder.  Either way the layout box
 * is identical so swapping in a real image requires zero CSS changes.
 */
function PCBImageSlot({
  src,
  caption,
  color,
}: {
  src: string;
  caption: string;
  color: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      {/* Image / placeholder box */}
      <div
        className="relative h-36 rounded-lg overflow-hidden group/img"
        style={{ background: 'rgba(5,5,5,0.7)' }}
      >
        {/* Corner bracket — top-left */}
        <div
          className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l z-10 pointer-events-none"
          style={{ borderColor: `${color}50` }}
        />
        {/* Corner bracket — bottom-right */}
        <div
          className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b border-r z-10 pointer-events-none"
          style={{ borderColor: `${color}50` }}
        />

        {failed ? (
          /* ── Placeholder ── */
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed"
            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
          >
            <ImageIcon size={20} className="text-white/25" />
            {caption && (
              <span className="font-mono text-[9px] text-white/25 tracking-widest uppercase text-center px-2">
                {caption}
              </span>
            )}
          </div>
        ) : (
          /* ── Real image ── */
          <div className="absolute inset-0 transition-transform duration-500 group-hover/img:scale-105">
            <Image
              src={src}
              alt={caption || 'PCB render'}
              fill
              sizes="(max-width: 768px) 100vw, 200px"
              className="object-contain"
              onError={() => setFailed(true)}
            />
          </div>
        )}
      </div>

      {/* Caption */}
      {caption && (
        <p className="text-center font-mono text-[9px] text-white/40 uppercase tracking-widest">
          {caption}
        </p>
      )}
    </div>
  );
}

/* ─── Image region (handles 1 or 2 images uniformly) ────── */

function CardImageRegion({
  images,
  color,
}: {
  images: typeof FREELANCE_PROJECTS[0]['images'];
  color: string;
}) {
  const isSingle = images.length === 1;

  return (
    /*
     * Fixed-height container (h-44) so all 3 cards have an identical
     * image-region footprint regardless of image count.
     */
    <div className="relative px-5 pt-5 pb-3 overflow-hidden">
      {/* Faint horizontal PCB-trace accent above image area */}
      <div
        className="absolute top-0 left-5 right-5 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}30, transparent)`,
        }}
      />

      <div
        className={`${isSingle ? 'flex justify-center' : 'grid grid-cols-2 gap-2'}`}
      >
        {isSingle ? (
          /* Single image: centred, same slot width as one cell in the 2-image grid */
          <div className="w-1/2 flex flex-col gap-1">
            <PCBImageSlot
              src={images[0].src}
              caption={images[0].caption}
              color={color}
            />
          </div>
        ) : (
          images.map((img) => (
            <PCBImageSlot key={img.src} src={img.src} caption={img.caption} color={color} />
          ))
        )}
      </div>
    </div>
  );
}

/* ─── Freelance card ─────────────────────────────────────── */

function FreelanceCard({
  title,
  description,
  tags,
  color,
  images,
}: {
  title: string;
  description: string;
  tags: string[];
  color: string;
  images: typeof FREELANCE_PROJECTS[0]['images'];
}) {
  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden border border-[#1C222B] bg-[#0B0F12] transition-colors duration-500 flex flex-col"
      variants={cardVariants}
      whileHover={{ borderColor: `${color}40` }}
    >
      {/* Top colour-accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}70, transparent)`,
        }}
      />

      {/* Corner bracket — top-right */}
      <div
        className="absolute top-3 right-3 w-4 h-4 border-t border-r opacity-40 group-hover:opacity-80 transition-opacity duration-300"
        style={{ borderColor: color }}
      />
      {/* Corner bracket — bottom-left */}
      <div
        className="absolute bottom-3 left-3 w-4 h-4 border-b border-l opacity-40 group-hover:opacity-80 transition-opacity duration-300"
        style={{ borderColor: color }}
      />

      {/* Solder-pad row */}
      <div className="absolute top-0 left-5 flex gap-2 -translate-y-px" aria-hidden>
        {[color, '#1C222B', color].map((c, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: c,
              boxShadow: i !== 1 ? `0 0 5px ${c}` : 'none',
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      {/* ── Image region (top of card) ── */}
      <CardImageRegion images={images} color={color} />

      {/* Thin separator between image region and card body */}
      <div
        className="mx-5 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${color}20, transparent)` }}
      />

      {/* ── Card body ── */}
      <div className="p-5 pt-4 flex flex-col flex-1">
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

        {/* Spacer pushes tags to bottom */}
        <div className="flex-1" />

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Radial hover glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${color}06, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */

export default function FreelancePage() {
  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      {/* Background layers */}
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

        {/* ── NDA notice ── */}
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

        {/*
          ── Cards layout:
          Mobile  → single column, all stacked
          Tablet+ → 4-column grid:
                      Row 1: Solar Mill (cols 1-2) | CAN Bus (cols 3-4)
                      Row 2: Smart Gas Knob (cols 2-3, centred)
        ──────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Row 1 — Solar Mill */}
          <motion.div className="md:col-span-2" variants={cardVariants}>
            <FreelanceCard {...FREELANCE_PROJECTS[0]} />
          </motion.div>

          {/* Row 1 — CAN Bus */}
          <motion.div className="md:col-span-2" variants={cardVariants}>
            <FreelanceCard {...FREELANCE_PROJECTS[1]} />
          </motion.div>

          {/* Row 2 — Smart Gas Knob, centred under the gap between the two above */}
          <motion.div className="md:col-start-2 md:col-span-2" variants={cardVariants}>
            <FreelanceCard {...FREELANCE_PROJECTS[2]} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
