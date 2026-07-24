'use client';

import { useState } from 'react';

const SKILL_CATEGORIES = [
  {
    id: 'embedded',
    label: 'Embedded Systems',
    color: '#00E5FF',
    skills: [
      { name: 'ESP32 / ESP-IDF', level: 95, logo: 'https://cdn.simpleicons.org/espressif/E7352C' },
      { name: 'STM32', level: 95, logo: 'https://cdn.simpleicons.org/stmicroelectronics/03234B' },
      { name: 'Arduino / AVR', level: 95, logo: 'https://cdn.simpleicons.org/arduino/00878A' },
      { name: 'NVIDIA Jetson Orin', level: 75, logo: 'https://cdn.simpleicons.org/nvidia/76B900' },
      { name: 'Raspberry Pi 5', level: 75, logo: 'https://cdn.simpleicons.org/raspberrypi/A22846' },
      { name: 'Sensor Integration', level: 92, logo: null },
      { name: 'Embedded Firmware', level: 90, logo: null },
      { name: 'Bare Metal Programming', level: 88, logo: null },
    ],
  },
  {
    id: 'pcb',
    label: 'PCB Design',
    color: '#00994D',
    skills: [
      { name: 'Altium Designer', level: 90, logo: 'altium' },
      { name: 'KiCad', level: 88, logo: 'https://cdn.simpleicons.org/kicad/314CB0' },
      { name: 'Proteus', level: 82, logo: null },
      { name: 'Schematic Capture', level: 95, logo: null },
      { name: 'PCB Routing', level: 90, logo: null },
      { name: 'Component Placement', level: 90, logo: null },
      { name: 'Multilayer PCB', level: 85, logo: null },
      { name: 'DFM', level: 80, logo: null },
    ],
  },
  {
    id: 'programming',
    label: 'Programming',
    color: '#1E88E5',
    skills: [
      { name: 'Embedded C', level: 92, logo: null },
      { name: 'Python', level: 90, logo: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'C / C++', level: 90, logo: 'https://cdn.simpleicons.org/cplusplus/00599C' },
      { name: 'Bare Metal Programming', level: 88, logo: null },
      { name: 'Arduino Scripting', level: 93, logo: 'https://cdn.simpleicons.org/arduino/00878A' },
      { name: 'Bash / Shell', level: 75, logo: 'https://cdn.simpleicons.org/gnubash/4EAA25' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Computer Vision',
    color: '#9D4EDD',
    skills: [
      { name: 'YOLO / YOLO11', level: 88, logo: null },
      { name: 'OpenCV', level: 88, logo: 'https://cdn.simpleicons.org/opencv/5C3EE8' },
      { name: 'PyTorch', level: 80, logo: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
      { name: 'Computer Vision', level: 85, logo: null },
      { name: 'Object Detection', level: 88, logo: null },
      { name: 'Edge AI Deployment', level: 80, logo: 'https://cdn.simpleicons.org/nvidia/76B900' },
      { name: 'Image Processing', level: 85, logo: null },
    ],
  },
  {
    id: 'protocols',
    label: 'Protocols',
    color: '#00E5FF',
    skills: [
      { name: 'CAN Bus', level: 90, logo: null },
      { name: 'UART / USART', level: 95, logo: null },
      { name: 'I2C / SMBus', level: 95, logo: null },
      { name: 'SPI', level: 93, logo: null },
      { name: 'GPIO / ADC / PWM', level: 95, logo: null },
      { name: 'USB (Basic)', level: 72, logo: null },
    ],
  },
  {
    id: 'drone',
    label: 'Robotics & Drones',
    color: '#00FF9C',
    skills: [
      { name: 'Pixhawk / ArduPilot', level: 82, logo: null },
      { name: 'Mission Planner', level: 80, logo: null },
      { name: 'GPS Integration', level: 85, logo: null },
      { name: 'Computer Vision on UAV', level: 80, logo: null },
      { name: 'Autonomous Navigation', level: 78, logo: null },
      { name: 'ESP32 Integration', level: 90, logo: 'https://cdn.simpleicons.org/espressif/E7352C' },
      { name: 'Sensor Fusion', level: 78, logo: null },
      { name: 'Drone Communication', level: 80, logo: null },
    ],
  },
];

const ALL_CHIPS = [
  { name: 'ESP32', category: 'Embedded', color: '#00E5FF' },
  { name: 'STM32', category: 'Embedded', color: '#00E5FF' },
  { name: 'Arduino UNO/Nano', category: 'Embedded', color: '#00E5FF' },
  { name: 'NVIDIA Jetson Orin', category: 'AI Hardware', color: '#00FF9C' },
  { name: 'Raspberry Pi 5', category: 'SBC', color: '#00FF9C' },
  { name: 'Altium Designer', category: 'PCB', color: '#00994D' },
  { name: 'KiCad', category: 'PCB', color: '#00994D' },
  { name: 'YOLO / YOLO11', category: 'AI', color: '#9D4EDD' },
  { name: 'OpenCV', category: 'CV', color: '#9D4EDD' },
  { name: 'PyTorch', category: 'AI', color: '#9D4EDD' },
  { name: 'ArduPilot', category: 'Drones', color: '#00E5FF' },
  { name: 'Pixhawk', category: 'Drones', color: '#00FF9C' },
  { name: 'CAN Bus', category: 'Protocol', color: '#00E5FF' },
  { name: 'MPU6050', category: 'Sensor', color: '#1E88E5' },
  { name: 'MAX30102', category: 'Sensor', color: '#1E88E5' },
  { name: 'TFMini LiDAR', category: 'Sensor', color: '#1E88E5' },
  { name: 'DS18B20', category: 'Sensor', color: '#1E88E5' },
  { name: 'HC-SR04', category: 'Sensor', color: '#1E88E5' },
  { name: 'LTSpice', category: 'Simulation', color: '#9D4EDD' },
  { name: 'Proteus', category: 'Simulation', color: '#9D4EDD' },
  { name: 'Python 3', category: 'Language', color: '#1E88E5' },
  { name: 'VS Code / PlatformIO', category: 'Tools', color: '#00FF9C' },
  { name: 'Git / GitHub', category: 'Tools', color: '#1E88E5' },
  { name: 'Linux / Ubuntu', category: 'OS', color: '#00FF9C' },
];

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('embedded');
  const active = SKILL_CATEGORIES.find(c => c.id === activeCategory)!;

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <div className="fixed inset-0 z-0 bg-grid-fine opacity-40 pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,229,255,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">Technical Expertise</p>
          <h1 className="font-orbitron text-4xl lg:text-5xl font-black text-white section-title mb-4">Skills &amp; Tools</h1>
          <p className="text-[#BFC7D5] font-ibm max-w-lg">
            A living dashboard of my technical capabilities — from bare-metal firmware to edge AI deployment on embedded hardware.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {SKILL_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-4 py-2 rounded font-mono text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: activeCategory === cat.id ? cat.color : '#1C222B',
                background: activeCategory === cat.id ? `${cat.color}15` : 'transparent',
                color: activeCategory === cat.id ? cat.color : '#BFC7D5',
                boxShadow: activeCategory === cat.id ? `0 0 15px ${cat.color}20` : 'none',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {active.skills.map(skill => (
            <SkillCard key={skill.name} name={skill.name} level={skill.level} color={active.color} logo={skill.logo ?? null} />
          ))}
        </div>

        {/* All chips section */}
        <div className="mb-16">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-6">Full Technology Arsenal</p>
          <div className="flex flex-wrap gap-2.5">
            {ALL_CHIPS.map(chip => (
              <div
                key={chip.name}
                className="skill-chip group"
                style={{ borderColor: `${chip.color}25` }}
              >
                <span
                  className="chip-dot"
                  style={{ background: chip.color, boxShadow: `0 0 6px ${chip.color}` }}
                />
                <span>{chip.name}</span>
                <span
                  className="text-[10px] tracking-widest hidden group-hover:inline"
                  style={{ color: chip.color }}
                >
                  · {chip.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Software */}
        <div>
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-6">Development Environment</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'IDEs & Editors', items: ['Arduino IDE', 'VS Code', 'PlatformIO', 'STM32CubeIDE', 'Jupyter Lab'] },
              { title: 'Lab Equipment', items: ['Digital Oscilloscope', 'Logic Analyzer', 'Soldering Station', 'PCB Reflow', 'Multimeter', 'Function Generator'] },
              { title: 'Tools & Platforms', items: ['Git / GitHub', 'Linux / Ubuntu', 'NVIDIA JetPack', 'LTSpice', 'Proteus', 'Mission Planner'] },
            ].map(({ title, items }) => (
              <div key={title} className="p-6 rounded-xl border border-[#1C222B] bg-[#0B0F12]">
                <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">{title}</p>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="flex items-center gap-2 font-mono text-xs text-[#BFC7D5]">
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
    </div>
  );
}

function SkillCard({ name, level, color, logo }: { name: string; level: number; color: string; logo: string | null }) {
  return (
    <div
      className="p-4 rounded-xl border bg-[#0B0F12] group hover:bg-[#0d1318] transition-all duration-300"
      style={{ borderColor: '#1C222B' }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${color}40`;
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 15px ${color}10`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = '#1C222B';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5 min-w-0">
          {logo === 'altium' ? (
            /* Custom Altium Designer SVG logo */
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 opacity-90">
              <path d="M12 2L2 19.5h4.5L12 8.5l5.5 11H22L12 2z" fill="#A5915F"/>
              <path d="M7.5 19.5h9L12 11l-4.5 8.5z" fill="#C4A96B" opacity="0.7"/>
            </svg>
          ) : logo ? (
            <img
              src={logo}
              alt=""
              width={14}
              height={14}
              className="flex-shrink-0 opacity-80"
              style={{ filter: 'brightness(1.15)' }}
            />
          ) : null}
          <span className="font-mono text-xs text-white truncate">{name}</span>
        </div>
        <span className="font-mono text-xs flex-shrink-0 ml-2" style={{ color }}>{level}%</span>
      </div>
      {/* Progress bar */}
      <div className="h-px bg-[#1C222B] relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full transition-all duration-700"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            boxShadow: `0 0 6px ${color}`,
          }}
        />
      </div>
      {/* Indicator dots */}
      <div className="flex gap-1 mt-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full transition-all"
            style={{
              background: i < Math.floor(level / 10) ? color : '#1C222B',
              opacity: i < Math.floor(level / 10) ? 0.7 : 1,
            }}
          />
        ))}
      </div>
    </div>
  );
}
