'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <div className="fixed inset-0 z-0 bg-grid-fine opacity-40 pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,229,255,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">Get In Touch</p>
          <h1 className="font-orbitron text-4xl lg:text-5xl font-black text-white section-title mb-4">Contact</h1>
          <p className="text-[#BFC7D5] font-ibm max-w-lg">
            Whether it's a project collaboration, consulting inquiry, or just a conversation about electronics —
            the communication channel is open. Open to full-time Embedded Systems, PCB Design, Robotics, AI, and Industrial IoT roles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left: Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-6 py-20">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,255,156,0.1)', border: '1px solid rgba(0,255,156,0.3)' }}>
                  <CheckCircle size={32} className="text-[#00FF9C]" />
                </div>
                <div className="text-center">
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2">Message Sent</h3>
                  <p className="text-[#BFC7D5] font-ibm">Signal received. I'll respond within 24 hours.</p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="font-mono text-xs text-cyan-400 hover:text-white transition-colors tracking-widest uppercase"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-[#BFC7D5] tracking-widest uppercase block mb-1.5">Name</label>
                    <input
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg font-ibm text-sm text-white placeholder-[#BFC7D5]/40 bg-[#0B0F12] border border-[#1C222B] focus:border-cyan-400/50 focus:outline-none focus:ring-0 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-[#BFC7D5] tracking-widest uppercase block mb-1.5">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg font-ibm text-sm text-white placeholder-[#BFC7D5]/40 bg-[#0B0F12] border border-[#1C222B] focus:border-cyan-400/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-[#BFC7D5] tracking-widest uppercase block mb-1.5">Subject</label>
                  <input
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    required
                    placeholder="Project Collaboration / Consulting / Other"
                    className="w-full px-4 py-3 rounded-lg font-ibm text-sm text-white placeholder-[#BFC7D5]/40 bg-[#0B0F12] border border-[#1C222B] focus:border-cyan-400/50 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-[#BFC7D5] tracking-widest uppercase block mb-1.5">Message</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                    rows={6}
                    placeholder="Tell me about your project, idea, or question..."
                    className="w-full px-4 py-3 rounded-lg font-ibm text-sm text-white placeholder-[#BFC7D5]/40 bg-[#0B0F12] border border-[#1C222B] focus:border-cyan-400/50 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-glow w-full flex items-center justify-center gap-2 py-3.5 text-sm font-mono tracking-widest uppercase rounded-lg"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: Info */}
          <div className="space-y-6">

            {/* Status */}
            <div className="p-6 rounded-xl border border-[#1C222B] bg-[#0B0F12]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#00FF9C] animate-pulse" style={{ boxShadow: '0 0 8px #00FF9C' }} />
                <span className="font-mono text-xs text-[#00FF9C] tracking-widest">ONLINE & AVAILABLE</span>
              </div>
              <p className="font-orbitron text-base font-bold text-white mb-1">Open to Opportunities</p>
              <p className="text-[#BFC7D5] text-sm font-ibm">Currently accepting freelance projects, research collaborations, and full-time roles in embedded systems / robotics.</p>
            </div>

            {/* Contact details */}
            <div className="p-6 rounded-xl border border-[#1C222B] bg-[#0B0F12] space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'shreenivas699@gmail.com', color: '#00E5FF' },
                { icon: Phone, label: 'Phone', value: '+91 9025113512', color: '#00FF9C' },
                { icon: MapPin, label: 'Location', value: 'Chennai, Tamil Nadu, India', color: '#1E88E5' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0" style={{ background: `${color}10`, border: `1px solid ${color}30` }}>
                    <Icon size={14} style={{ color }} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-[#BFC7D5] tracking-widest uppercase">{label}</p>
                    <p className="font-ibm text-sm text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="p-6 rounded-xl border border-[#1C222B] bg-[#0B0F12]">
              <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">Connect</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Github, label: 'GitHub', handle: '@shreenivas-a', color: '#00E5FF', href: 'https://github.com/Shree699' },
                  { icon: Linkedin, label: 'LinkedIn', handle: 'shreenivas-a', color: '#1E88E5', href: 'https://www.linkedin.com/in/shreenivas-a-54178a272/' },
                ].map(({ icon: Icon, label, handle, color, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-[#1C222B] hover:border-cyan-400/30 transition-all group"
                  >
                    <Icon size={16} style={{ color }} />
                    <div>
                      <p className="font-mono text-xs text-white">{label}</p>
                      <p className="font-mono text-[10px] text-[#BFC7D5]">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
