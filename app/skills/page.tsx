'use client';

import { useState } from 'react';

const SKILL_CATEGORIES = [
  {
    id: 'embedded',
    label: 'Embedded Systems',
    color: '#00E5FF',
    skills: [
      { name: 'ESP32 / ESP-IDF', level: 95 },
      { name: 'STM32', level: 95 },
      { name: 'Arduino / AVR', level: 95 },
      { name: 'NVIDIA Jetson Orin', level: 75 },
      { name: 'Raspberry Pi 5', level: 75 },
      { name: 'Sensor Integration', level: 92 },
      { name: 'Embedded Firmware', level: 90 },
      { name: 'Bare Metal Programming', level: 88 },
    ],
  },
  {
    id: 'pcb',
    label: 'PCB Design',
    color: '#00FF9C',
    skills: [
      { name: 'Altium Designer', level: 90 },
      { name: 'KiCad', level: 88 },
      { name: 'Proteus', level: 82 },
      { name: 'Schematic Capture', level: 95 },
      { name: 'PCB Routing', level: 90 },
      { name: 'Component Placement', level: 90 },
      { name: 'Multilayer PCB', level: 85 },
      { name: 'DFM', level: 80 },
    ],
  },
  {
    id: 'programming',
    label: 'Programming',
    color: '#1E88E5',
    skills: [
      { name: 'Embedded C', level: 92 },
      { name: 'Python', level: 90 },
      { name: 'C / C++', level: 90 },
      { name: 'Bare Metal Programming', level: 88 },
      { name: 'Arduino Scripting', level: 93 },
      { name: 'Bash / Shell', level: 75 },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Computer Vision',
    color: '#9D4EDD',
    skills: [
      { name: 'YOLO / YOLO11', level: 88 },
      { name: 'OpenCV', level: 88 },
      { name: 'PyTorch', level: 80 },
      { name: 'Computer Vision', level: 85 },
      { name: 'Object Detection', level: 88 },
      { name: 'Edge AI Deployment', level: 80 },
      { name: 'Image Processing', level: 85 },
    ],
  },
  {
    id: 'protocols',
    label: 'Protocols',
    color: '#00E5FF',
    skills: [
      { name: 'CAN Bus', level: 90 },
      { name: 'UART / USART', level: 95 },
      { name: 'I2C / SMBus', level: 95 },
      { name: 'SPI', level: 93 },
      { name: 'GPIO / ADC / PWM', level: 95 },
      { name: 'USB (Basic)', level: 72 },
    ],
  },
  {
    id: 'drone',
    label: 'Robotics & Drones',
    color: '#00FF9C',
    skills: [
      { name: 'Pixhawk / ArduPilot', level: 82 },
      { name: 'Mission Planner', level: 80 },
      { name: 'GPS Integration', level: 85 },
      { name: 'Computer Vision on UAV', level: 80 },
      { name: 'Autonomous Navigation', level: 78 },
      { name: 'ESP32 Integration', level: 90 },
      { name: 'Sensor Fusion', level: 78 },
      { name: 'Drone Communication', level: 80 },
    ],
  },
];

const ALL_CHIPS = [
  { name: 'ESP32', category: 'Embedded', color: '#00E5FF' },
  { name: 'STM32', category: 'Embedded', color: '#00E5FF' },
  { name: 'Arduino UNO/Nano', category: 'Embedded', color: '#00E5FF' },
  { name: 'NVIDIA Jetson Orin', category: 'AI Hardware', color: '#00FF9C' },
  { name: 'Raspberry Pi 5', category: 'SBC', color: '#00FF9C' },
  { name: 'Altium Designer', category: 'PCB', color: '#00FF9C' },
  { name: 'KiCad', category: 'PCB', color: '#00FF9C' },
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
          <h1 className="font-orbitron text-4xl lg:text-5xl font-black text-white section-title mb-4">Skills & Tools</h1>
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
            <SkillCard key={skill.name} name={skill.name} level={skill.level} color={active.color} />
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

function SkillCard({ name, level, color }: { name: string; level: number; color: string }) {
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
        <span className="font-mono text-xs text-white">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
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
