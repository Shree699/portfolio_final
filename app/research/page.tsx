'use client';

import { BookOpen, Award, Lightbulb, FileText } from 'lucide-react';

const PUBLICATIONS = [
  {
    title: 'Queueless Billing System Using Computer Vision',
    journal: 'Academic Research Paper',
    year: '2025',
    status: 'Submitted',
    description: 'Designed and implemented a computer vision-based retail checkout system using object detection on Raspberry Pi. The system identifies items placed on a counter without barcode scanning, enabling queue-free billing.',
    tags: ['Computer Vision', 'OpenCV', 'Raspberry Pi', 'Object Detection', 'Edge AI'],
    color: '#00E5FF',
    doi: null,
  },
  {
    title: 'AerialSAR — Autonomous Aerial Search and Rescue Using Jetson Orin and YOLO',
    journal: 'Academic Research',
    year: '2025',
    status: 'In Progress',
    description: 'Research documenting the development of Rescue Wings — an autonomous UAV for disaster management. Covers the system architecture integrating Jetson Orin for real-time YOLO-based victim detection, GPS-guided navigation, and ESP32-based embedded control.',
    tags: ['Jetson Orin', 'YOLO', 'GPS', 'Autonomous UAV', 'Edge AI', 'Search & Rescue'],
    color: '#00FF9C',
    doi: null,
  },
];

const RESEARCH_AREAS = [
  { title: 'Embedded Systems', desc: 'Developing firmware and hardware for industrial sensor systems, UAVs, and IoT platforms using ESP32, STM32, and Jetson Orin.', color: '#00E5FF' },
  { title: 'PCB Design', desc: 'Designing production-grade PCBs in Altium Designer and KiCad for sensor integration, power distribution, and industrial applications.', color: '#00FF9C' },
  { title: 'Edge AI', desc: 'Deploying AI models on embedded hardware including NVIDIA Jetson for real-time computer vision and object detection.', color: '#1E88E5' },
  { title: 'Autonomous UAVs', desc: 'Building autonomous drone systems with computer vision, GPS navigation, and embedded intelligence for disaster response.', color: '#9D4EDD' },
  { title: 'Industrial IoT', desc: 'Sensor fusion and IoT dashboards for industrial monitoring including water quality, temperature, and automation systems.', color: '#00E5FF' },
  { title: 'Computer Vision', desc: 'Applying YOLO, OpenCV, and MediaPipe for real-world detection and classification tasks on embedded hardware.', color: '#00FF9C' },
  { title: 'Medical Robotics', desc: 'Exploring embedded systems integration for medical applications including heart rate monitoring and health sensing.', color: '#1E88E5' },
  { title: 'Remote Sensing', desc: 'Using aerial UAV platforms with vision systems for surveillance, mapping, and search-and-rescue operations.', color: '#9D4EDD' },
];

const IP_INNOVATIONS = [
  { name: 'Laundry Management System', status: 'Patent Filed', color: '#00E5FF' },
  { name: 'MSME Disaster Drone (Rescue Wings)', status: 'MSME Registered', color: '#00FF9C' },
  { name: 'Industrial DAC PCB', status: 'Competition Winner', color: '#9D4EDD' },
  { name: 'Water Contamination Detection System', status: 'Prototype Complete', color: '#1E88E5' },
  { name: 'Anti-Drone Detection System', status: 'Prototype', color: '#00E5FF' },
];

const FUTURE_RESEARCH = [
  { idea: 'AI-powered UAV Swarms for multi-zone disaster coverage', stage: 'Concept' },
  { idea: 'Terrain-aware drone navigation using elevation mapping', stage: 'Research' },
  { idea: 'Edge AI optimization for low-power embedded inference', stage: 'Early Research' },
  { idea: 'Industrial embedded vision for defect detection', stage: 'Concept' },
  { idea: 'Medical supply delivery drones for emergency response', stage: 'Planned' },
  { idea: 'Disaster area mapping using UAV photogrammetry', stage: 'Concept' },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <div className="fixed inset-0 z-0 bg-grid-fine opacity-40 pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,229,255,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">Academic Work</p>
          <h1 className="font-orbitron text-4xl lg:text-5xl font-black text-white section-title mb-4">Research & Publications</h1>
          <p className="text-[#BFC7D5] font-ibm max-w-xl">
            Applying embedded systems and AI research to solve real-world engineering challenges.
          </p>
        </div>

        {/* Publications */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen size={16} className="text-cyan-400" />
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase">Publications</p>
          </div>
          <div className="space-y-6">
            {PUBLICATIONS.map((pub, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#1C222B] bg-[#0B0F12] hover:border-cyan-400/20 transition-all group">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded"
                        style={{ color: pub.color, background: `${pub.color}15`, border: `1px solid ${pub.color}30` }}
                      >
                        {pub.status}
                      </span>
                      <span className="font-mono text-xs text-[#BFC7D5]">{pub.year}</span>
                    </div>
                    <h3 className="font-orbitron text-base font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{pub.title}</h3>
                    <p className="font-mono text-xs mb-3" style={{ color: pub.color }}>{pub.journal}</p>
                    <p className="text-[#BFC7D5] text-sm font-ibm leading-relaxed mb-4">{pub.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {pub.tags.map(tag => <span key={tag} className="tech-tag text-[10px]">{tag}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Interests */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Award size={16} className="text-cyan-400" />
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase">Research Interests</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESEARCH_AREAS.map(area => (
              <div key={area.title} className="p-5 rounded-xl border border-[#1C222B] bg-[#0B0F12] hover:border-cyan-400/20 transition-all">
                <div className="w-2 h-2 rounded-full mb-3" style={{ background: area.color, boxShadow: `0 0 8px ${area.color}` }} />
                <h3 className="font-orbitron text-sm font-bold text-white mb-2">{area.title}</h3>
                <p className="text-[#BFC7D5] text-xs font-ibm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IP & Innovation */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <FileText size={16} className="text-cyan-400" />
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase">IP & Innovation</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {IP_INNOVATIONS.map(item => (
              <div key={item.name} className="flex items-center gap-3 p-4 rounded-lg border border-[#1C222B] bg-[#0B0F12] hover:border-cyan-400/20 transition-all">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color, boxShadow: `0 0 6px ${item.color}` }} />
                <div>
                  <p className="font-ibm text-xs text-white">{item.name}</p>
                  <p className="font-mono text-[10px]" style={{ color: item.color }}>{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Future Research */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <Lightbulb size={16} className="text-cyan-400" />
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase">Future Research Directions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {FUTURE_RESEARCH.map(({ idea, stage }) => (
              <div key={idea} className="flex items-start gap-4 p-5 rounded-xl border border-[#1C222B] bg-[#0B0F12] hover:border-cyan-400/20 transition-all group">
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-cyan-400" />
                <div>
                  <p className="font-ibm text-sm text-white group-hover:text-cyan-400 transition-colors">{idea}</p>
                  <p className="font-mono text-[10px] text-[#BFC7D5] mt-1">{stage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
