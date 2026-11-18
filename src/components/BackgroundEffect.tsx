import React, { useEffect, useState, useRef } from 'react';

export const BackgroundEffect: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Ambient floating particle matrix
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(width > 768 ? 45 : 20, 50);
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(56, 189, 248, 0.4)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Deep Midnight Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#050b18] to-[#030712]" />

      {/* Subtle Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30" />

      {/* Cyber Dots Grid */}
      <div className="absolute inset-0 cyber-dots-bg opacity-20" />

      {/* Ambient Gradient Orbs */}
      <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-electric-violet/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Dynamic Cursor Spotlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, rgba(139, 92, 246, 0.04) 50%, transparent 70%)',
        }}
      />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
