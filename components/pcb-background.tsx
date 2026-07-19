'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  connections: number[];
  pulse: number;
  pulseSpeed: number;
}

export default function PCBBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouseX = width / 2;
    let mouseY = height / 2;

    // Generate PCB nodes
    const cols = Math.floor(width / 100) + 2;
    const rows = Math.floor(height / 100) + 2;
    const nodes: Node[] = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        nodes.push({
          x: c * 100 + (Math.random() - 0.5) * 40,
          y: r * 100 + (Math.random() - 0.5) * 40,
          connections: [],
          pulse: Math.random(),
          pulseSpeed: 0.002 + Math.random() * 0.004,
        });
      }
    }

    // Connect nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160 && nodes[i].connections.length < 4) {
          nodes[i].connections.push(j);
          nodes[j].connections.push(i);
        }
      }
    }

    // Signal particles
    interface Signal {
      fromNode: number;
      toNode: number;
      progress: number;
      speed: number;
      color: string;
    }

    const signals: Signal[] = [];

    const addSignal = () => {
      const i = Math.floor(Math.random() * nodes.length);
      if (nodes[i].connections.length > 0) {
        const j = nodes[i].connections[Math.floor(Math.random() * nodes[i].connections.length)];
        signals.push({
          fromNode: i,
          toNode: j,
          progress: 0,
          speed: 0.008 + Math.random() * 0.012,
          color: Math.random() > 0.7 ? '#00FF9C' : '#00E5FF',
        });
      }
    };

    for (let i = 0; i < 30; i++) addSignal();

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const mouseInfluenceRadius = 200;

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        for (const j of node.connections) {
          if (j > i) {
            const other = nodes[j];
            const midX = (node.x + other.x) / 2;
            const midY = (node.y + other.y) / 2;
            const mdx = midX - mouseX;
            const mdy = midY - mouseY;
            const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);
            const mouseBoost = Math.max(0, 1 - mouseDist / mouseInfluenceRadius) * 0.3;

            ctx.strokeStyle = `rgba(0,229,255,${0.04 + mouseBoost})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();

            // Manhattan-style PCB traces
            if (Math.random() > 0.5) {
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(other.x, node.y);
              ctx.lineTo(other.x, other.y);
            } else {
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(node.x, other.y);
              ctx.lineTo(other.x, other.y);
            }
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.pulse += node.pulseSpeed;
        const ndx = node.x - mouseX;
        const ndy = node.y - mouseY;
        const nd = Math.sqrt(ndx * ndx + ndy * ndy);
        const boost = Math.max(0, 1 - nd / mouseInfluenceRadius);

        const alpha = 0.2 + Math.sin(node.pulse) * 0.1 + boost * 0.4;
        const radius = 1.5 + boost * 2;

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,255,${alpha})`;
        ctx.fill();

        // Glow ring
        if (boost > 0.3) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius + 4, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0,229,255,${boost * 0.2})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Update and draw signals
      for (let i = signals.length - 1; i >= 0; i--) {
        const sig = signals[i];
        sig.progress += sig.speed;

        if (sig.progress >= 1) {
          signals.splice(i, 1);
          addSignal();
          continue;
        }

        const from = nodes[sig.fromNode];
        const to = nodes[sig.toNode];
        const px = from.x + (to.x - from.x) * sig.progress;
        const py = from.y + (to.y - from.y) * sig.progress;

        // Dot
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = sig.color;
        ctx.fill();

        // Trail
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = sig.color.replace(')', ',0.15)').replace('rgb', 'rgba').replace('#00E5FF', 'rgba(0,229,255,0.15)').replace('#00FF9C', 'rgba(0,255,156,0.15)');
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('resize', onResize);
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
