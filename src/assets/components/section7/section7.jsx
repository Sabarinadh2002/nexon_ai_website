import React, { useEffect, useRef } from 'react'
import { useExternalScripts } from '../useExternalScripts'

export default function Section7() {
  useExternalScripts();
  const canvasRef = useRef(null);
  const shootingStarsRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];
    let animationFrameId;

    const initStars = () => {
      stars = [];
      const count = 200;
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5,
          opacity: Math.random(),
          speed: Math.random() * 0.05
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      
      stars.forEach(star => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Twinkle
        star.opacity += (Math.random() - 0.5) * 0.02;
        if (star.opacity < 0) star.opacity = 0;
        if (star.opacity > 1) star.opacity = 1;
      });

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

  useEffect(() => {
    const container = shootingStarsRef.current;
    if (!container) return;

    const spawnStar = () => {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      
      // Random position start
      const startY = Math.random() * (window.innerHeight / 2);
      const startX = window.innerWidth + 100;
      
      star.style.top = `${startY}px`;
      star.style.left = `${startX}px`;
      
      container.appendChild(star);
      
      // Remove after animation
      setTimeout(() => {
        if (container.contains(star)) {
            container.removeChild(star);
        }
      }, 2000);
    };

    const intervalId = setInterval(spawnStar, 2000);

    return () => clearInterval(intervalId);
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

        /* Shooting star animation */
        @keyframes shootingStar {
            0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 1; }
            100% { transform: translateX(-500px) translateY(500px) rotate(-45deg); opacity: 0; }
        }
        .shooting-star {
            position: absolute;
            width: 100px;
            height: 2px;
            background: linear-gradient(90deg, rgba(255,255,255,1), transparent);
            opacity: 0;
            animation: shootingStar 2s linear infinite;
        }
      `}</style>

      {/* SECTION 7: ALL IN ONE (Shooting Stars Background) */}
      <section className="relative py-32 overflow-hidden bg-black flex flex-col items-center justify-center min-h-[600px] w-full font-sans text-white">
          
          {/* Stars & Shooting Stars Containers */}
          <canvas ref={canvasRef} id="stars-canvas" className="absolute inset-0 w-full h-full pointer-events-none z-0"></canvas>
          <div ref={shootingStarsRef} id="shooting-stars-container" className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden"></div>

          <div className="relative z-20 container mx-auto px-4">
              
              <div className="text-center mb-16">
                  {/* Heading */}
                  <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                      <span className="text-white">All in</span> <span className="gradient-text">One.</span>
                  </h2>
                  
                  {/* Content Placeholder */}
                  <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                      Everything you need to manage calls, bookings, and customer relationships in a single, powerful platform.
                  </p>
              </div>

              {/* BENTO GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  
                  {/* Item 1: Dawn of Innovation */}
                  <div className="group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 transition duration-200 hover:shadow-xl shadow-none">
                      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
                      <div className="transition duration-200 group-hover/bento:translate-x-2">
                          <i data-lucide="clipboard-copy" className="h-4 w-4 text-neutral-500"></i>
                          <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">The Dawn of Innovation</div>
                          <div className="font-sans text-xs font-normal text-neutral-300">Explore the birth of groundbreaking ideas and inventions.</div>
                      </div>
                  </div>

                  {/* Item 2: Digital Revolution */}
                  <div className="group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 transition duration-200 hover:shadow-xl shadow-none">
                      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
                      <div className="transition duration-200 group-hover/bento:translate-x-2">
                          <i data-lucide="file-warning" className="h-4 w-4 text-neutral-500"></i>
                          <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">The Digital Revolution</div>
                          <div className="font-sans text-xs font-normal text-neutral-300">Dive into the transformative power of technology.</div>
                      </div>
                  </div>

                  {/* Item 3: Art of Design */}
                  <div className="group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 transition duration-200 hover:shadow-xl shadow-none">
                      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
                      <div className="transition duration-200 group-hover/bento:translate-x-2">
                          <i data-lucide="pen-tool" className="h-4 w-4 text-neutral-500"></i>
                          <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">The Art of Design</div>
                          <div className="font-sans text-xs font-normal text-neutral-300">Discover the beauty of thoughtful and functional design.</div>
                      </div>
                  </div>

                  {/* Item 4: Power of Communication (Span 2) */}
                  <div className="md:col-span-2 group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 transition duration-200 hover:shadow-xl shadow-none">
                      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
                      <div className="transition duration-200 group-hover/bento:translate-x-2">
                          <i data-lucide="columns" className="h-4 w-4 text-neutral-500"></i>
                          <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">The Power of Communication</div>
                          <div className="font-sans text-xs font-normal text-neutral-300">Understand the impact of effective communication in our lives.</div>
                      </div>
                  </div>

                  {/* Item 5: Pursuit of Knowledge */}
                  <div className="group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 transition duration-200 hover:shadow-xl shadow-none">
                      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
                      <div className="transition duration-200 group-hover/bento:translate-x-2">
                          <i data-lucide="trending-up" className="h-4 w-4 text-neutral-500"></i>
                          <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">The Pursuit of Knowledge</div>
                          <div className="font-sans text-xs font-normal text-neutral-300">Join the quest for understanding and enlightenment.</div>
                      </div>
                  </div>

                  {/* Item 6: Joy of Creation */}
                  <div className="group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 transition duration-200 hover:shadow-xl shadow-none">
                      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
                      <div className="transition duration-200 group-hover/bento:translate-x-2">
                          <i data-lucide="box" className="h-4 w-4 text-neutral-500"></i>
                          <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">The Joy of Creation</div>
                          <div className="font-sans text-xs font-normal text-neutral-300">Experience the thrill of bringing ideas to life.</div>
                      </div>
                  </div>

                  {/* Item 7: Spirit of Adventure (Span 2) */}
                  <div className="md:col-span-2 group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 transition duration-200 hover:shadow-xl shadow-none">
                      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
                      <div className="transition duration-200 group-hover/bento:translate-x-2">
                          <i data-lucide="layout-grid" className="h-4 w-4 text-neutral-500"></i>
                          <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">The Spirit of Adventure</div>
                          <div className="font-sans text-xs font-normal text-neutral-300">Embark on exciting journeys and thrilling discoveries.</div>
                      </div>
                  </div>

              </div>

          </div>
      </section>
    </>
  )
}