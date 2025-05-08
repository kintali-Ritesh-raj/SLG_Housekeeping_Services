import React, { useEffect, useRef } from 'react';

const NeonCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number; life: number }[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      points.current.push({ x: e.clientX, y: e.clientY, life: 1 });
      if (points.current.length > 40) points.current.shift();
    };
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < points.current.length; i++) {
        const p = points.current[i];
        const alpha = p.life * 0.7;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 10 + (1 - p.life) * 10, 0, 2 * Math.PI);
        ctx.shadowColor = `rgba(0,255,255,${alpha})`;
        ctx.shadowBlur = 20;
        ctx.fillStyle = `rgba(0,255,255,${alpha})`;
        ctx.fill();
        p.life -= 0.025;
      }
      points.current = points.current.filter((p) => p.life > 0);
      animationRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default NeonCursor; 