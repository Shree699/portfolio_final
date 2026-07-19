'use client';

const EXPERIENCES = [
  {
    type: 'Internship',
    title: 'PCB Designer & Embedded Systems Engineer',
    company: 'ADHVX Industries',
    location: 'Chennai, India',
    period: 'Nov 2024 – Jan 2025',
    color: '#00E5FF',
    description: 'Designed industrial-grade PCBs in Altium Designer and developed embedded hardware for sensor-based automation systems. Gained hands-on experience in full PCB design flow from schematic to fabrication.',
    responsibilities: [
      'Designed industrial sensor PCBs using Altium Designer (50+ components)',
      'Performed schematic capture, PCB layout, and DFM review',
      'Developed embedded firmware for sensor-based automation',
      'Managed component selection, BOM generation, and signal routing',
      'Collaborated on power distribution and multilayer stack-up design',
    ],
    technologies: ['Altium Designer', 'PCB Layout', 'Embedded Firmware', 'Sensor Integration', 'DFM', 'C'],
    achievement: 'Delivered industrial PCB designs meeting client specifications',
  },
  {
    type: 'Internship',
    title: 'Engineering Trainee',
    company: 'Woory Automotive Pvt Ltd',
    location: 'Chennai, India',
    period: 'May 2024 – Jun 2024',
    color: '#00FF9C',
    description: 'Gained hands-on exposure to electronics manufacturing and quality assurance processes in an automotive electronics environment.',
    responsibilities: [
      'Observed and participated in SMT (Surface Mount Technology) process workflows',
      'Assisted in PCB assembly and solder quality verification',
      'Worked with AOI (Automated Optical Inspection) systems for defect detection',
      'Analyzed production line efficiency and component handling procedures',
      'Studied illumination system electronics and automotive PCB specifications',
    ],
    technologies: ['SMT Process', 'PCB Assembly', 'AOI Inspection', 'Component Handling', 'Production Analysis'],
    achievement: 'Exposure to automotive-grade electronics manufacturing standards',
  },
  {
    type: 'Startup',
    title: 'Founder & Lead Engineer',
    company: 'Rescue Wings',
    location: 'Chennai, India',
    period: 'MSME Registered · 2024 – Present',
    color: '#9D4EDD',
    description: 'Founded and leading development of an autonomous disaster response UAV platform integrating computer vision, embedded systems, GPS navigation, and intelligent victim detection for emergency rescue applications.',
    responsibilities: [
      'Founded MSME-registered startup for autonomous UAV disaster response',
      'Leading hardware integration: Jetson Orin, ESP32, Raspberry Pi, GPS modules',
      'Developing YOLO-based computer vision pipeline for victim detection',
      'Integrating GPS navigation for autonomous waypoint-based flight',
      'Planning medical supply delivery capability for disaster zones',
      'Coordinating embedded firmware, AI inference, and communication systems',
    ],
    technologies: ['Jetson Orin', 'YOLO', 'GPS', 'ESP32', 'Raspberry Pi', 'Python', 'Computer Vision'],
    achievement: 'MSME registered startup · Active development',
  },
  {
    type: 'Research',
    title: 'Research Author — Queueless Billing System',
    company: 'Academic Research',
    location: 'Chennai Institute of Technology',
    period: 'May 2025 – Jun 2025',
    color: '#1E88E5',
    description: 'Authored a research paper on a computer vision-based queueless billing system. Designed and tested the embedded hardware pipeline and vision inference architecture for automated retail checkout.',
    responsibilities: [
      'Designed computer vision pipeline for automated item detection and billing',
      'Implemented object detection model on Raspberry Pi for edge inference',
      'Wrote research paper covering system architecture and experimental results',
      'Tested system accuracy across multiple product categories',
    ],
    technologies: ['Raspberry Pi', 'OpenCV', 'Python', 'Object Detection', 'Research Writing'],
    achievement: 'Research paper authored and submitted',
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <div className="fixed inset-0 z-0 bg-grid-fine opacity-40 pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,229,255,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">Professional Journey</p>
          <h1 className="font-orbitron text-4xl lg:text-5xl font-black text-white section-title mb-4">Experience</h1>
          <p className="text-[#BFC7D5] font-ibm max-w-xl">
            Real-world engineering work — from industrial PCB design to founding an MSME-registered UAV startup.
          </p>
        </div>

        {/* Experience cards */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="group relative">
              <div
                className="p-8 rounded-xl border border-[#1C222B] bg-[#0B0F12] hover:border-cyan-400/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top color accent line */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${exp.color}60, transparent)` }} />

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded"
                        style={{ color: exp.color, background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="font-orbitron text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="font-mono text-sm" style={{ color: exp.color }}>{exp.company}</p>
                    <p className="font-mono text-xs text-[#BFC7D5] mt-1">{exp.location}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-mono text-xs text-[#BFC7D5] tracking-widest">{exp.period}</p>
                    <div
                      className="inline-block mt-2 px-3 py-1 rounded text-xs font-mono tracking-widest"
                      style={{ color: exp.color, background: `${exp.color}10`, border: `1px solid ${exp.color}20` }}
                    >
                      {exp.achievement}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#BFC7D5] font-ibm leading-relaxed mb-6">{exp.description}</p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">Key Responsibilities</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#BFC7D5] font-ibm">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: exp.color }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 0% 0%, ${exp.color}04, transparent 60%)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
