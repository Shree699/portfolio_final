'use client';

import { useEffect, useRef } from 'react';

interface Component {
  x: number;
  y: number;
  z: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vRotX: number;
  vRotY: number;
  vRotZ: number;
  type: number;
  color: string;
  size: number;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const COLORS = ['#00E5FF', '#00FF9C', '#1E88E5', '#9D4EDD'];

    // 3D component descriptors
    const components: Component[] = Array.from({ length: 18 }, (_, i) => ({
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 0.5) * 300,
      z: (Math.random() - 0.5) * 200,
      rotX: Math.random() * Math.PI * 2,
      rotY: Math.random() * Math.PI * 2,
      rotZ: Math.random() * Math.PI * 2,
      vRotX: (Math.random() - 0.5) * 0.005,
      vRotY: (Math.random() - 0.5) * 0.008,
      vRotZ: (Math.random() - 0.5) * 0.003,
      type: i % 4, // 0=IC, 1=cap, 2=resistor, 3=led
      color: COLORS[i % COLORS.length],
      size: 8 + Math.random() * 16,
    }));

    let globalRotY = 0;
    let globalRotX = 0;
    let mouseX = 0;
    let mouseY = 0;
    let animId: number;

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / W - 0.5) * 0.3;
      mouseY = ((e.clientY - rect.top) / H - 0.5) * 0.2;
    };
    window.addEventListener('mousemove', onMouse, { passive: true });

    // Project 3D point to 2D
    const project = (x: number, y: number, z: number, fov: number) => {
      const cx = Math.cos(globalRotX), sx = Math.sin(globalRotX);
      const cy = Math.cos(globalRotY), sy = Math.sin(globalRotY);
      // Rotate around Y
      const x1 = x * cy - z * sy;
      const z1 = x * sy + z * cy;
      // Rotate around X
      const y1 = y * cx - z1 * sx;
      const z2 = y * sx + z1 * cx;
      const scale = fov / (fov + z2 + 300);
      return { px: x1 * scale + W / 2, py: y1 * scale + H / 2, scale, z: z2 };
    };

    const drawIC = (px: number, py: number, sc: number, color: string, size: number, alpha: number) => {
      const icSize = size * 1.4;
      const w = icSize * sc, h = icSize * 0.7 * sc;
      ctx.save();
      ctx.translate(px, py);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#0a1520';
      ctx.strokeStyle = color;
      ctx.lineWidth = 1 * sc;
      ctx.shadowColor = color;
      ctx.shadowBlur = 6;
      ctx.fillRect(-w / 2, -h / 2, w, h);
      ctx.strokeRect(-w / 2, -h / 2, w, h);
      // Pins
      const pins = 4;
      for (let i = 0; i < pins; i++) {
        const py2 = -h / 2 + (h / (pins - 1)) * i;
        ctx.beginPath();
        ctx.moveTo(-w / 2, py2);
        ctx.lineTo(-w / 2 - 5 * sc, py2);
        ctx.strokeStyle = '#d4a017';
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(w / 2, py2);
        ctx.lineTo(w / 2 + 5 * sc, py2);
        ctx.stroke();
      }
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha * 0.3;
      ctx.fillRect(-w / 4, -h / 4, w / 2, h / 2);
      ctx.restore();
    };

    const drawCap = (px: number, py: number, sc: number, color: string, size: number, alpha: number) => {
      ctx.save();
      ctx.translate(px, py);
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5 * sc;
      ctx.shadowColor = color;
      ctx.shadowBlur = 8;
      const r = size * 0.4 * sc;
      ctx.fillStyle = '#162a40';
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Stripe
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1 * sc;
      ctx.globalAlpha = alpha * 0.4;
      ctx.beginPath();
      ctx.moveTo(r * 0.4, -r * 0.8);
      ctx.lineTo(r * 0.4, r * 0.8);
      ctx.stroke();
      ctx.restore();
    };

    const drawResistor = (px: number, py: number, sc: number, color: string, size: number, alpha: number) => {
      ctx.save();
      ctx.translate(px, py);
      ctx.globalAlpha = alpha;
      const w = size * sc, h = size * 0.3 * sc;
      ctx.fillStyle = '#8B4513';
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.8 * sc;
      ctx.shadowColor = color;
      ctx.shadowBlur = 5;
      ctx.beginPath();
      ctx.roundRect(-w / 2, -h / 2, w, h, 2);
      ctx.fill();
      ctx.stroke();
      // Color bands
      const bandColors = ['#FFD700', color, '#FF4444'];
      bandColors.forEach((bc, bi) => {
        ctx.fillStyle = bc;
        ctx.fillRect(-w / 2 + w * 0.2 + bi * w * 0.18, -h / 2, w * 0.08, h);
      });
      ctx.restore();
    };

    const drawLED = (px: number, py: number, sc: number, color: string, size: number, alpha: number, t: number) => {
      const pulse = 0.7 + Math.sin(t * 0.05) * 0.3;
      ctx.save();
      ctx.translate(px, py);
      ctx.globalAlpha = alpha * pulse;
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 15 * pulse;
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.25 * sc, 0, Math.PI * 2);
      ctx.fill();
      // Glow ring
      ctx.globalAlpha = alpha * 0.2 * pulse;
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.5 * sc, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Smooth camera rotation toward mouse
      globalRotY += (mouseX - globalRotY) * 0.03;
      globalRotX += (mouseY - globalRotX) * 0.03;

      // Update component rotations
      components.forEach(c => {
        c.rotX += c.vRotX;
        c.rotY += c.vRotY;
      });

      // Sort by Z for painter's algorithm
      const projected = components.map(c => {
        const { px, py, scale, z } = project(c.x, c.y, c.z, 600);
        return { ...c, px, py, scale, depth: z };
      }).sort((a, b) => a.depth - b.depth);

      // Draw connections lines between nearby components
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            const alpha = (1 - d / 120) * 0.15;
            ctx.strokeStyle = `rgba(0,229,255,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            // Manhattan style
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.stroke();
          }
        }
      }

      // Draw components
      projected.forEach(c => {
        const alpha = Math.max(0.2, Math.min(1, (c.depth + 300) / 400));
        if (c.type === 0) drawIC(c.px, c.py, c.scale, c.color, c.size, alpha);
        else if (c.type === 1) drawCap(c.px, c.py, c.scale, c.color, c.size, alpha);
        else if (c.type === 2) drawResistor(c.px, c.py, c.scale, c.color, c.size, alpha);
        else drawLED(c.px, c.py, c.scale, c.color, c.size, alpha, frame);
      });

      frame++;
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
}
