'use client';

import React, { useEffect, useRef } from 'react';

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Icon Placeholder */}
      <div className="w-12 h-12 bg-yellow-400 dark:bg-yellow-500 flex items-center justify-center rounded-lg shadow-md dark:shadow-gray-800">
        <span className="text-gray-900 dark:text-black font-bold text-2xl">M</span> {/* Replace with actual icon/logo */}
      </div>
      <p className="mt-4 text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
        Available in early 2025
      </p>
    </div>
  );
};

const EarlyAccessSection = () => {
  return (
    <div className="text-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
        Get early access
      </h1>
      <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        Be amongst the first to experience Walt and launch a viral waitlist. Sign up to be notified when we launch!
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <label htmlFor="email-input" className="sr-only">Email address</label>
        <input 
          id="email-input" 
          type="email" 
          placeholder="Email" 
          className="w-full sm:w-80 px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm dark:shadow-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
          aria-label="Enter your email address" 
        />
        <button 
          type="submit" 
          className="w-full sm:w-auto px-6 py-3 bg-yellow-400 dark:bg-yellow-500 text-gray-900 dark:text-black font-semibold rounded-lg shadow-md dark:shadow-gray-800 hover:bg-yellow-500 dark:hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:ring-offset-2 dark:focus:ring-offset-black transition duration-300 ease-in-out"
        >
          Join waitlist
        </button>
      </div>
    </div>
  );
};

const Waitlist2 = () => {
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
        
        // Center the pattern horizontally
        const xOffset = (width % gap) / 2;

        for(let i = -1; i < cols; i++) {
            for(let j = -1; j < rows; j++) {
                const x = i * gap + (j % 2 === 0 ? 0 : gap * 0.5) + xOffset;
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

  return (
    <div className="relative w-full flex flex-col items-center py-12 px-4 font-sans bg-black overflow-hidden">
      {/* Dotted Glow Canvas Container */}
      <div 
        ref={containerRef}
        className="absolute inset-0 w-full h-full pointer-events-none" 
        style={{
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 90%)',
            opacity: 1
        }}
      >
          <canvas ref={canvasRef} className="block w-full h-full"></canvas>
      </div>

      <div className="relative z-10 bg-white dark:bg-black rounded-xl dark:shadow-gray-800 p-8 w-full max-w-4xl lg:p-12 border dark:border-gray-700">
        <Header />
        <EarlyAccessSection />
        {/* Additional content can go here */}
      </div>
    </div>
  );
};

export default Waitlist2;