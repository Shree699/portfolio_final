import './globals.css';
import type { Metadata } from 'next';
import Providers from '@/components/providers';

export const metadata: Metadata = {
  title: 'Shreenivas A | Electronics & Communication Engineer',
  description: 'Portfolio of Shreenivas A — ECE Engineer specializing in Embedded Systems, PCB Design, Autonomous UAVs, Edge AI, and Industrial IoT. Founder of Rescue Wings (MSME Registered).',
  openGraph: {
    title: 'Shreenivas A | Electronics & Communication Engineer',
    description: 'Building intelligent embedded systems, autonomous drones, and PCB solutions. Chennai Institute of Technology · MSME Startup Founder.',
    images: [{ url: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Sora:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500;700&family=Orbitron:wght@400;600;700;900&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
