import React, { useEffect, useRef } from 'react'
import { useExternalScripts } from '../useExternalScripts'

export default function Section9() {
  useExternalScripts();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let dots = [];
    let animationFrameId;
    
    // Config
    const gap = 10; 
    const radius = 1.6;
    const speedMin = 0.3;
    const speedMax = 1.6;
    const speedScale = 1;
    const opacity = 1; 
    
    // Colors
    const color = "rgba(115, 115, 115, 1)"; 
    const glowColor = "rgba(7, 89, 133, 1)"; 

    let width, height;

    const initDots = () => {
        dots = [];
        // +2 cols/rows to ensure coverage
        const cols = Math.ceil(width / gap) + 2;
        const rows = Math.ceil(height / gap) + 2;
        
        for(let i = -1; i < cols; i++) {
            for(let j = -1; j < rows; j++) {
                const x = i * gap + (j % 2 === 0 ? 0 : gap * 0.5);
                const y = j * gap;
                
                const phase = Math.random() * Math.PI * 2;
                const speed = speedMin + Math.random() * (speedMax - speedMin);
                
                dots.push({ x, y, phase, speed });
            }
        }
    };

    const resize = () => {
        const rect = container.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        // Handle High DPI
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        
        initDots();
    };

    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        
        const time = Date.now() / 1000 * speedScale;
        
        dots.forEach(dot => {
            const mod = (time * dot.speed + dot.phase) % 2;
            const lin = mod < 1 ? mod : 2 - mod;
            const a = 0.25 + 0.55 * lin;
            
            if (a > 0.6) {
                const glowIntensity = (a - 0.6) / 0.4;
                ctx.shadowBlur = 6 * glowIntensity;
                ctx.shadowColor = glowColor;
            } else {
                ctx.shadowBlur = 0;
                ctx.shadowColor = 'transparent';
            }
            
            ctx.globalAlpha = a * opacity;
            ctx.fillStyle = color;
            
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
            ctx.fill();
        });
        
        ctx.globalAlpha = 1;

        animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Re-run Lucide icons when content changes
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  return (
    <>
      <style>{`
        /* Custom Gradient for text */
        .gradient-text {
            background: linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
      `}</style>
      {/* SECTION 9: CTA (Dotted Glow Background) */}
      <section className="relative w-full py-20 bg-black flex items-center justify-center overflow-hidden font-sans">
          
          {/* Dotted Glow Canvas Container */}
          <div 
            id="dotted-glow-container" 
            ref={containerRef}
            className="absolute inset-0 w-full h-full pointer-events-none" 
            style={{
                maskImage: 'radial-gradient(circle at center, black 0%, transparent 90%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 90%)',
                opacity: 1
            }}
          >
              <canvas ref={canvasRef} id="dotted-glow-canvas" className="block w-full h-full"></canvas>
          </div>

          {/* Content */}
          <div className="relative z-10 flex w-full flex-col items-center justify-between space-y-6 px-8 py-16 text-center md:flex-row max-w-7xl mx-auto">
              <div className="text-left max-w-2xl">
                  <h2 className="text-4xl font-normal tracking-tight text-white sm:text-5xl">
                      Ready to buy <br />
                      <span className="font-bold text-white">Nexon-AI Pro?</span>
                  </h2>
                  <p className="mt-4 text-lg text-neutral-400">
                      Unlock premium components, advanced animations, and exclusive templates to build stunning modern interfaces.
                  </p>
              </div>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                  <button className="inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800 px-8 py-4 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-neutral-700 hover:shadow-md hover:scale-105">
                      View Pricing
                  </button>
              </div>
          </div>
      </section>
    </>
  )
}