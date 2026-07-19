'use client';

import { Trophy, Award, Star, Zap } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    type: 'Award',
    title: 'Winner — Board Designer Competition',
    event: 'Hackster.io Board Designer Competition',
    org: 'Hackster.io',
    year: '2024',
    description: 'Won the Hackster.io Board Designer competition for the Industrial DAC PCB project, recognized for schematic quality, routing, DFM adherence, and component selection.',
    color: '#00E5FF',
    icon: Trophy,
  },
  {
    type: 'Hackathon',
    title: 'Runner-Up',
    event: 'Electrothon 2024',
    org: 'Electrothon',
    year: '2024',
    description: 'Achieved Runner-Up position at Electrothon 2024 with an embedded systems and IoT project.',
    color: '#00FF9C',
    icon: Trophy,
  },
  {
    type: 'Hackathon',
    title: 'Runner-Up',
    event: 'SDG 2025',
    org: 'SDG Hackathon',
    year: '2025',
    description: 'Runner-up at the SDG 2025 hackathon for a sustainable technology embedded solution.',
    color: '#9D4EDD',
    icon: Award,
  },
  {
    type: 'Hackathon',
    title: 'Shortlisted',
    event: 'Smart India Hackathon',
    org: 'Ministry of Education, India',
    year: '2024',
    description: 'Shortlisted for Smart India Hackathon — national-level recognition for engineering project quality.',
    color: '#00E5FF',
    icon: Star,
  },
  {
    type: 'Hackathon',
    title: 'Participant',
    event: 'IEEE Hackathon',
    org: 'IEEE',
    year: '2024',
    description: 'Participated in IEEE Hackathon, working on an embedded systems challenge.',
    color: '#1E88E5',
    icon: Zap,
  },
  {
    type: 'Hackathon',
    title: 'Participant',
    event: 'FINTECH-A-THON NIT',
    org: 'NIT',
    year: '2024',
    description: 'Participated in the FINTECH-A-THON hackathon hosted at NIT.',
    color: '#00FF9C',
    icon: Zap,
  },
  {
    type: 'Hackathon',
    title: 'Participant',
    event: 'HumanAIze Hackathon',
    org: 'HumanAIze',
    year: '2024',
    description: 'Participated in the HumanAIze Hackathon focusing on AI for social good.',
    color: '#9D4EDD',
    icon: Zap,
  },
  {
    type: 'Hackathon',
    title: 'Finalist',
    event: 'Ideathon 2024',
    org: 'Ideathon',
    year: '2024',
    description: 'Reached the finals at Ideathon 2024 with an embedded systems innovation concept.',
    color: '#00E5FF',
    icon: Award,
  },
  {
    type: 'Hackathon',
    title: 'Participant',
    event: 'Hack4Purpose',
    org: 'Hack4Purpose',
    year: '2024',
    description: 'Participated in Hack4Purpose, developing a purpose-driven embedded technology solution.',
    color: '#1E88E5',
    icon: Zap,
  },
  {
    type: 'Hackathon',
    title: 'Participant',
    event: 'Technica VIT',
    org: 'VIT',
    year: '2024',
    description: 'Participated in Technica at VIT, presenting an electronics and IoT project.',
    color: '#00FF9C',
    icon: Zap,
  },
  {
    type: 'Startup',
    title: 'Founder',
    event: 'Rescue Wings — MSME Registered',
    org: 'Ministry of MSME, India',
    year: '2024',
    description: 'Founded Rescue Wings, an MSME-registered startup building autonomous UAV platforms for disaster management. Currently leading hardware and AI development.',
    color: '#9D4EDD',
    icon: Star,
  },
];

const STATS = [
  { value: '10+', label: 'Hackathons & Competitions', color: '#00E5FF' },
  { value: '1', label: 'Hackster.io Win', color: '#00FF9C' },
  { value: '1', label: 'MSME Startup Founded', color: '#9D4EDD' },
  { value: '1', label: 'Patent Filed', color: '#1E88E5' },
  { value: '3', label: 'Research Publications', color: '#00E5FF' },
  { value: '5+', label: 'Certifications', color: '#00FF9C' },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <div className="fixed inset-0 z-0 bg-grid-fine opacity-40 pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,229,255,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">Recognition</p>
          <h1 className="font-orbitron text-4xl lg:text-5xl font-black text-white section-title mb-4">Achievements</h1>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-16">
          {STATS.map(({ value, label, color }) => (
            <div key={label} className="p-4 rounded-xl border border-[#1C222B] bg-[#0B0F12] text-center">
              <p className="font-orbitron text-2xl font-black mb-1" style={{ color, textShadow: `0 0 15px ${color}40` }}>{value}</p>
              <p className="font-mono text-[10px] text-[#BFC7D5] tracking-widest uppercase leading-tight">{label}</p>
            </div>
          ))}
        </div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="p-6 rounded-xl border border-[#1C222B] bg-[#0B0F12] hover:border-cyan-400/20 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${item.color}40, transparent)` }} />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded" style={{ color: item.color, background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                        {item.type}
                      </span>
                      <span className="font-mono text-xs text-[#BFC7D5]">{item.year}</span>
                    </div>
                    <h3 className="font-orbitron text-sm font-bold text-white mb-0.5">{item.title}</h3>
                    <p className="font-mono text-xs mb-2" style={{ color: item.color }}>{item.event}</p>
                    <p className="font-mono text-[10px] text-[#BFC7D5] mb-3">{item.org}</p>
                    <p className="text-[#BFC7D5] text-sm font-ibm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificates section */}
        <section className="mt-16">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-6">Certifications</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Introduction to Cybersecurity', issuer: 'Cisco', color: '#00E5FF' },
              { name: 'Networking Essentials', issuer: 'Cisco', color: '#00FF9C' },
              { name: 'Cybersecurity Essentials', issuer: 'Cisco', color: '#00E5FF' },
              { name: 'Automation Explorer', issuer: 'UiPath', color: '#9D4EDD' },
              { name: 'Energy Literacy', issuer: 'Cisco', color: '#1E88E5' },
            ].map(cert => (
              <div key={cert.name} className="flex items-center gap-3 p-4 rounded-lg border border-[#1C222B] bg-[#0B0F12] hover:border-cyan-400/20 transition-all">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cert.color, boxShadow: `0 0 6px ${cert.color}` }} />
                <div>
                  <p className="font-ibm text-xs text-white">{cert.name}</p>
                  <p className="font-mono text-[10px] text-[#BFC7D5]">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
