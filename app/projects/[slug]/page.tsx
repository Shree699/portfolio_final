'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Cpu, Layers, Brain, Wifi } from 'lucide-react';

const PROJECTS: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  images: string[];
  tags: string[];
  color: string;
  hardware: string[];
  software: string[];
  architecture: string;
  results: string[];
  year: string;
  status: string;
  contain?: boolean;
  imageBg?: string;
}> = {
  'rescue-wings': {
    title: 'Rescue Wings',
    subtitle: 'Autonomous Search & Rescue Drone',
    description: 'AI-powered autonomous rescue drone with real-time person detection using NVIDIA Jetson Orin and a custom PCB flight controller.',
    problem: 'Traditional search and rescue operations are slow, resource-intensive, and dangerous for first responders. Manual drone operation requires trained pilots and has limited range and coverage.',
    solution: 'Developed an autonomous drone with onboard AI inference using NVIDIA Jetson Orin, achieving 30fps person detection via YOLOv8 with thermal + RGB fusion. Custom STM32F7-based flight controller with ROS2 integration.',
    images: [
      'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2810156/pexels-photo-2810156.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['STM32F7', 'NVIDIA Jetson Orin', 'YOLOv8', 'ROS2', 'Custom PCB', 'CAN Bus', 'Python', 'C', 'FreeRTOS', 'TensorRT'],
    color: '#00E5FF',
    hardware: ['NVIDIA Jetson Orin 16GB', 'STM32F7 Flight Controller (Custom PCB)', 'Thermal Camera (FLIR Lepton)', 'RGB 4K Camera', 'GPS/GNSS Module', 'IMU (ICM-42688)', 'ESC Array (4x BLDC)', 'Li-Po 6S Battery'],
    software: ['ROS2 Humble', 'YOLOv8 + TensorRT', 'FreeRTOS', 'ArduPilot Customization', 'Python 3.10', 'OpenCV 4.8', 'MAVROS'],
    architecture: 'Dual-processor architecture: STM32F7 handles real-time flight control at 1kHz, communicating with Jetson Orin over CAN Bus. Jetson runs YOLOv8 inference and trajectory planning. Ground station communicates via long-range telemetry.',
    results: ['96% person detection accuracy in low-light', '800m operational range', '45-minute flight time', '30fps real-time inference', 'Best Project Award — National Drone Hackathon 2024'],
    year: '2024',
    status: 'Completed',
  },
  'anti-drone': {
    title: 'Anti-Drone Detection',
    subtitle: 'RF & Vision Based Detection System',
    description: 'Hybrid detection system combining Software-Defined Radio with YOLOv8 visual tracking for unauthorized drone detection.',
    problem: 'Unauthorized drones pose critical security threats to sensitive installations, airports, and events. Existing solutions are expensive, single-modality, and have high false-positive rates.',
    solution: 'Multi-sensor fusion approach combining RF signature analysis via GNU Radio SDR with real-time visual tracking via YOLOv8 on NVIDIA Jetson. Dual validation reduces false positives to under 2%.',
    images: [
      '/projects/anti-drone-detection.jpeg',
      'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['NVIDIA Jetson', 'YOLOv8', 'GNU Radio', 'SDR', 'Python', 'TensorRT', 'PyTorch', 'RF Analysis'],
    color: '#00FF9C',
    hardware: ['NVIDIA Jetson AGX Orin', 'RTL-SDR v3 Dongle', 'Pan-Tilt Camera System', 'High-Gain Antenna Array', 'Custom RF Front-End PCB'],
    software: ['GNU Radio', 'YOLOv8', 'TensorRT 8.6', 'Python 3.10', 'NumPy / SciPy', 'PyTorch', 'OpenCV'],
    architecture: 'Parallel processing pipeline: RF subsystem analyzes 2.4GHz/5.8GHz bands for drone control signals, while vision subsystem tracks aerial objects. Fusion module combines both detections with temporal correlation.',
    results: ['96% detection accuracy', '800m detection range', '<2% false positive rate', '200ms response latency', 'Deployed at 2 campus locations'],
    year: '2024',
    status: 'Deployed',
  },
  'water-contamination': {
    title: 'Water Contamination Detector',
    subtitle: 'Industrial IoT Sensing Platform',
    description: 'Multi-parameter water quality monitoring with ML-based contamination classification on ESP32-S3.',
    problem: 'Manual water quality testing is infrequent, slow, and requires lab infrastructure. Industrial water contamination events go undetected for hours, causing environmental and health damage.',
    solution: 'Deployed an array of low-cost electrochemical sensors interfaced with ESP32-S3 running TensorFlow Lite inference. Classifies 12 contamination types with 91% accuracy. Real-time MQTT dashboard.',
    images: [
      '/projects/water-contamination.jpg',
    ],
    tags: ['ESP32-S3', 'TensorFlow Lite', 'MQTT', 'Node-RED', 'Custom PCB', 'I2C', 'SPI', 'Python', 'React'],
    color: '#1E88E5',
    hardware: ['ESP32-S3 (Main Controller)', 'pH Sensor (Custom Calibration)', 'Turbidity Sensor', 'TDS Meter Module', 'Heavy Metal Electrodes', 'Custom 4-Layer PCB', 'Solar Power Management IC'],
    software: ['TensorFlow Lite', 'Arduino/ESP-IDF', 'Node-RED', 'MQTT Broker', 'React Dashboard', 'InfluxDB', 'Grafana'],
    architecture: 'ESP32-S3 reads multi-sensor array via I2C/SPI, performs edge inference using TFLite model compressed via quantization-aware training, sends alerts over MQTT. Node-RED handles cloud aggregation.',
    results: ['91% contamination classification accuracy', '30-second detection latency', 'Monitors 8 water parameters', '6-month continuous deployment', 'Government pilot project shortlisted'],
    year: '2023',
    status: 'Completed',
    contain: true,
    imageBg: 'bg-gradient-to-r from-[#ADADAF] to-[#8B8A85]',
  },
  'laundry-management': {
    title: 'Smart Laundry Management',
    subtitle: 'IoT-Based Hostel Automation',
    description: 'RFID-based IoT system for hostel laundry queue management with predictive maintenance.',
    problem: 'Hostel laundry machines face long wait times, overuse, and frequent breakdowns with no visibility into usage patterns or machine health.',
    solution: 'STM32-based controller with RFID authentication, current sensing for health monitoring, and Bluetooth/WiFi connectivity for mobile app integration. Firebase real-time database for slot management.',
    images: [
      '/projects/smart-laundry-management.jpg',
    ],
    tags: ['STM32', 'RFID', 'ESP8266', 'React Native', 'Firebase', 'Bluetooth', 'Current Sensing'],
    color: '#9D4EDD',
    hardware: ['STM32F103 Controller', 'MFRC522 RFID Reader', 'ESP8266 WiFi Module', 'ACS712 Current Sensor', 'Relay Module', 'LCD Display', 'Custom PCB'],
    software: ['STM32 HAL Library', 'ESP8266 AT Firmware', 'React Native', 'Firebase Realtime DB', 'Node.js Backend'],
    architecture: 'STM32 handles machine control and sensor reading, communicates with ESP8266 over UART for cloud connectivity. Mobile app provides user interface for slot booking and machine status.',
    results: ['40% reduction in wait times', 'Zero unplanned downtime in 6-month trial', '200+ daily active users', '95% user satisfaction score'],
    year: '2023',
    status: 'Completed',
    contain: true,
    imageBg: 'bg-[#0B0F12]',
  },
  'dac-pcb': {
    title: 'High-Precision DAC PCB',
    subtitle: '16-bit Dual-Channel DAC Design',
    description: 'Professional-grade 4-layer PCB with 16-bit resolution DAC, ultra-low noise power supply, and EMI shielding.',
    problem: 'Off-the-shelf DAC modules lack the precision, noise performance, and form factor required for custom embedded audio and industrial control applications.',
    solution: 'Designed a 4-layer board in Altium Designer with careful attention to signal integrity, power plane splitting, EMI containment, and thermal management. Achieved 0.001% THD+N.',
    images: [
      '/projects/dac-pcb.jpg',
    ],
    tags: ['Altium Designer', 'PCB Design', 'Signal Integrity', 'EMC', 'Power Electronics', '4-Layer PCB'],
    color: '#00FF9C',
    hardware: ['PCM5122 16-bit DAC', 'TPS62120 DC-DC Converter', 'Ultra-low Noise LDO', 'Anti-aliasing Filters', 'SPI Interface'],
    software: ['Altium Designer 23', 'LTSpice (Simulation)', 'HyperLynx (SI Analysis)', 'Gerber Viewer'],
    architecture: 'Clean analog power domain isolated from digital domain via ferrite bead filters. Star ground topology. Careful component placement to minimize coupling between high-speed digital signals and analog output.',
    results: ['SNR: 112dB', 'THD+N: 0.001%', 'Output impedance: 100Ω', 'EMS/EMI IEC 61000 compliant', 'Manufactured via JLCPCB'],
    year: '2023',
    status: 'Completed',
    contain: true,
    imageBg: 'bg-gradient-to-b from-[#C0C5CB] to-[#818D99]',
  },
  'queueless-billing': {
    title: 'Queueless Billing System',
    subtitle: 'Computer Vision Checkout',
    description: 'Overhead camera + custom-trained EfficientDet for automatic item recognition and billing without barcode scanning.',
    problem: 'Traditional retail checkout is slow, labor-intensive, and creates queues. Barcode scanning requires precise positioning and fails with damaged labels.',
    solution: 'Raspberry Pi 4 with overhead camera runs custom-trained EfficientDet model to identify retail items by visual appearance. 94% accuracy across 200 SKU categories with real-time checkout.',
    images: [
      '/projects/queueless-billing.png',
    ],
    tags: ['Raspberry Pi 4', 'TensorFlow Lite', 'OpenCV', 'Python', 'React', 'SQLite', 'EfficientDet'],
    color: '#00E5FF',
    hardware: ['Raspberry Pi 4 8GB', 'PiCamera v3 (12MP)', 'Thermal Printer', 'Custom Mounting Bracket', 'Touch Display'],
    software: ['TensorFlow Lite', 'OpenCV 4.8', 'Python 3.10', 'React Frontend', 'SQLite Database', 'FastAPI Backend'],
    architecture: 'Continuous capture mode analyzes camera feed at 15fps. Items placed in camera FOV are detected, recognized, and added to cart. Integrates with POS system via REST API.',
    results: ['94% SKU recognition accuracy', '200 product categories', '3-second average checkout time', 'Prototype deployed at college canteen'],
    year: '2022',
    status: 'Prototype',
    contain: true,
    imageBg: 'bg-[#2D2D2D]',
  },
};

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS[params.slug];
  if (!project) notFound();

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <div className="fixed inset-0 z-0 bg-grid-fine opacity-40 pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${project.color}06, transparent 70%)` }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/projects" className="inline-flex items-center gap-2 font-mono text-xs text-[#BFC7D5] hover:text-cyan-400 transition-colors tracking-widest uppercase">
            <ArrowLeft size={12} />
            Back to Projects
          </Link>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded" style={{ color: project.color, background: `${project.color}15`, border: `1px solid ${project.color}30` }}>
                {project.status}
              </span>
              <span className="font-mono text-xs text-[#BFC7D5]">{project.year}</span>
            </div>
            <h1 className="font-orbitron text-4xl font-black text-white mb-2">{project.title}</h1>
            <p className="font-mono text-sm mb-4" style={{ color: project.color }}>{project.subtitle}</p>
            <p className="text-[#BFC7D5] font-ibm leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
            </div>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-glow flex items-center gap-2 px-5 py-2.5 text-xs font-mono tracking-widest uppercase rounded">
                <Github size={12} />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-5 py-2.5 text-xs font-mono tracking-widest uppercase text-[#BFC7D5] hover:text-white border border-[#1C222B] hover:border-cyan-400/30 rounded transition-all">
                <ExternalLink size={12} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          <div className={`rounded-xl overflow-hidden border border-[#1C222B] h-72 flex items-center justify-center ${project.contain ? (project.imageBg || '') : ''}`}>
            <img src={project.images[0]} alt={project.title} className={`w-full h-full ${project.contain ? 'object-contain' : 'object-cover'}`} />
          </div>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">

          {/* Problem */}
          <div className="p-6 rounded-xl border border-[#1C222B] bg-[#0B0F12]">
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">Problem Statement</p>
            <p className="text-[#BFC7D5] text-sm font-ibm leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="p-6 rounded-xl border border-[#1C222B] bg-[#0B0F12]">
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">Solution Approach</p>
            <p className="text-[#BFC7D5] text-sm font-ibm leading-relaxed">{project.solution}</p>
          </div>

          {/* Architecture */}
          <div className="p-6 rounded-xl border border-[#1C222B] bg-[#0B0F12]">
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">Architecture</p>
            <p className="text-[#BFC7D5] text-sm font-ibm leading-relaxed">{project.architecture}</p>
          </div>
        </div>

        {/* Hardware & Software */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-xl border border-[#1C222B] bg-[#0B0F12]">
            <div className="flex items-center gap-2 mb-4">
              <Cpu size={14} className="text-cyan-400" />
              <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase">Hardware Stack</p>
            </div>
            <ul className="space-y-2">
              {project.hardware.map(h => (
                <li key={h} className="flex items-center gap-2 font-mono text-xs text-[#BFC7D5]">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-[#1C222B] bg-[#0B0F12]">
            <div className="flex items-center gap-2 mb-4">
              <Brain size={14} style={{ color: project.color }} />
              <p className="font-mono text-xs tracking-widest uppercase" style={{ color: project.color }}>Software Stack</p>
            </div>
            <ul className="space-y-2">
              {project.software.map(s => (
                <li key={s} className="flex items-center gap-2 font-mono text-xs text-[#BFC7D5]">
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.color }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results */}
        <div className="mb-12">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-6">Results & Outcomes</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {project.results.map((result, i) => (
              <div key={i} className="p-4 rounded-xl border border-[#1C222B] bg-[#0B0F12] text-center">
                <div className="w-2 h-2 rounded-full mx-auto mb-2" style={{ background: project.color, boxShadow: `0 0 6px ${project.color}` }} />
                <p className="font-ibm text-xs text-[#BFC7D5] leading-snug">{result}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}
