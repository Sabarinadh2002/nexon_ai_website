import React, { useEffect, useRef } from 'react'
import { useExternalScripts } from '../useExternalScripts'

export default function Section7() {
  useExternalScripts();
  const canvasRef = useRef(null);
  const shootingStarsRef = useRef(null);
  const securityRef = useRef(null);
  const mapSvgRef = useRef(null);

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

  useEffect(() => {
    // Load FontAwesome
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const link = document.createElement('link');
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }

    // Load GSAP and run animation
    let tl;
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;
    script.onload = () => {
        if (!window.gsap || !securityRef.current) return;
        const gsap = window.gsap;
        
        // Setup GSAP Timeline
        tl = gsap.timeline({
            repeat: -1,      // Infinite loop
            repeatDelay: 0.5 // Short pause before restarting
        });

        const sceneGdpr = securityRef.current.querySelector('#sec7-scene-gdpr');
        const sceneE2ee = securityRef.current.querySelector('#sec7-scene-e2ee');
        const sceneCloud = securityRef.current.querySelector('#sec7-scene-cloud');
        const progressBar = securityRef.current.querySelector('#sec7-main-progress');

        // Reset state
        gsap.set([sceneGdpr, sceneE2ee, sceneCloud], { opacity: 0 });
        gsap.set(progressBar, { width: "0%" });
        
        // --- SCENE 1: GDPR ---
        tl.to(sceneGdpr, { opacity: 1, duration: 0.5 })
          .to(progressBar, { width: "33%", duration: 2, ease: "power1.inOut" }, "<")
          
          // Animate Document In
          .to(securityRef.current.querySelector("#sec7-gdpr-doc"), { scale: 1, duration: 0.5, ease: "back.out(1.7)" })
          
          // Stamp Effect
          .to(securityRef.current.querySelector("#sec7-gdpr-shield"), { opacity: 1, scale: 1, duration: 0.4, ease: "elastic.out(1, 0.3)" }, "+=0.2")
          .to(securityRef.current.querySelector("#sec7-gdpr-doc"), { color: "#e2e8f0", duration: 0.2 }, "<") // Lighten doc on impact
          
          // Text
          .to(securityRef.current.querySelector("#sec7-scene-gdpr .sec7-label-text"), { opacity: 1, y: -10, duration: 0.5 })
          
          // Exit Scene 1
          .to(sceneGdpr, { opacity: 0, scale: 0.9, y: 20, duration: 0.5, delay: 1 });


        // --- SCENE 2: E2EE ---
        tl.set(sceneE2ee, { opacity: 1, scale: 1, y: 0 }) // Prep scene
          .fromTo(sceneE2ee, { opacity: 0 }, { opacity: 1, duration: 0.5 })
          .to(progressBar, { width: "66%", duration: 3, ease: "none" }, "<")

          // Start Packet Journey
          .fromTo(securityRef.current.querySelector("#sec7-data-packet"), 
              { left: "0%", backgroundColor: "#1e293b", borderColor: "#ffffff" }, 
              { left: "45%", duration: 1, ease: "power1.in" }
          )
          
          // Transform to Lock (Encryption happens)
          .to(securityRef.current.querySelector("#sec7-packet-icon"), { 
              opacity: 0, duration: 0.1, 
              onComplete: () => { 
                  const icon = securityRef.current.querySelector('#sec7-packet-icon');
                  if(icon) icon.className = "fas fa-lock text-green-400 text-xs"; 
              }
          })
          .to(securityRef.current.querySelector("#sec7-packet-icon"), { opacity: 1, duration: 0.1 })
          .to(securityRef.current.querySelector("#sec7-data-packet"), { 
              backgroundColor: "#064e3b", // Dark green
              borderColor: "#34d399", // bright green border
              boxShadow: "0 0 20px #34d399",
              scale: 1.2,
              duration: 0.3
          }, "<")
          
          // Tunnel Effect visuals
          .to(securityRef.current.querySelector("#sec7-tunnel-effect"), { opacity: 1, duration: 0.2 }, "<")
          
          // Text Fade In
          .to(securityRef.current.querySelector("#sec7-scene-e2ee .sec7-label-text"), { opacity: 1, y: -10, duration: 0.5 }, "<")

          // Complete Journey
          .to(securityRef.current.querySelector("#sec7-data-packet"), { left: "100%", duration: 1, ease: "power1.out" })
          
          // Unlock at destination
          .to(securityRef.current.querySelector("#sec7-data-packet"), { scale: 0, opacity: 0, duration: 0.2 })
          
          // Exit Scene 2
          .to(sceneE2ee, { opacity: 0, x: -50, duration: 0.5, delay: 0.5 });


        // --- SCENE 3: Cloud Security ---
        tl.set(sceneCloud, { opacity: 1 })
          .fromTo(sceneCloud, { opacity: 0 }, { opacity: 1, duration: 0.5 })
          .to(progressBar, { width: "100%", duration: 2.5, ease: "power1.out" }, "<")

          // Cloud Pops in
          .to(securityRef.current.querySelector("#sec7-cloud-icon"), { scale: 1, duration: 0.6, ease: "elastic.out(1, 0.75)" })
          
          // Rings Expand
          .to(securityRef.current.querySelector("#sec7-ring-1"), { opacity: 1, scale: 1.2, rotation: 180, duration: 1.5, ease: "power2.out" }, "-=0.4")
          .to(securityRef.current.querySelector("#sec7-ring-2"), { opacity: 1, scale: 1.4, rotation: -180, duration: 1.5, ease: "power2.out" }, "<0.1")
          
          // Lock Appears inside
          .to(securityRef.current.querySelector("#sec7-cloud-lock"), { opacity: 1, scale: 1.5, duration: 0.4, ease: "back.out" }, "-=1")
          
          // Pulse Effect for Security
          .to(securityRef.current.querySelector("#sec7-cloud-icon"), { color: "#60a5fa", textShadow: "0 0 30px #3b82f6", duration: 0.5 })
          
          // Text
          .to(securityRef.current.querySelector("#sec7-scene-cloud .sec7-label-text"), { opacity: 1, y: -10, duration: 0.5 })
          
          // Final hold and Exit for Loop
          .to({}, { duration: 1 })
          .to(sceneCloud, { opacity: 0, scale: 0.9, y: 20, duration: 0.5 });
    };
    
    if (!window.gsap) {
        document.body.appendChild(script);
    } else {
        script.onload();
    }

    // Call Timer Logic
    const timerEl = document.getElementById('miniCallTime');
    let seconds = 206; // Start at 03:26
    const timerInterval = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        if (timerEl) timerEl.innerText = `${mins}:${secs}`;
    }, 1000);

    return () => {
        if (tl) tl.kill();
        clearInterval(timerInterval);
    };
  }, []);

  useEffect(() => {
    // Map Animation Logic
    const svg = mapSvgRef.current;
    if (!svg) return;

    const project = (lat, lng) => ({ x: (lng + 180) * (800 / 360), y: (90 - lat) * (400 / 180) });

    const dots = [
        { start: {lat: 64.2, lng: -149.5}, end: {lat: 34.0, lng: -118.2} },
        { start: {lat: 64.2, lng: -149.5}, end: {lat: -15.8, lng: -47.9} }, 
        { start: {lat: 51.5, lng: -0.1}, end: {lat: 28.6, lng: 77.2} },    
        { start: {lat: 28.6, lng: 77.2}, end: {lat: 43.1, lng: 131.9} }
    ];

    const svgNS = "http://www.w3.org/2000/svg";
    
    // Gradient Definition
    if (!svg.querySelector('#map-grad')) {
        const defs = document.createElementNS(svgNS, "defs");
        defs.innerHTML = `<linearGradient id="map-grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="white" stop-opacity="0"/><stop offset="50%" stop-color="#0ea5e9" stop-opacity="1"/><stop offset="100%" stop-color="white" stop-opacity="0"/></linearGradient>`;
        svg.appendChild(defs);
    }

    // Clear existing paths/circles (keep defs)
    Array.from(svg.children).forEach(child => {
        if (child.tagName !== 'defs') svg.removeChild(child);
    });

    dots.forEach((d, i) => {
        const p1 = project(d.start.lat, d.start.lng);
        const p2 = project(d.end.lat, d.end.lng);
        const midX = (p1.x + p2.x) / 2;
        const midY = Math.min(p1.y, p2.y) - 50;

        // Draw Line
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", `M${p1.x},${p1.y} Q${midX},${midY} ${p2.x},${p2.y}`);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "url(#map-grad)");
        path.setAttribute("stroke-width", "2");
        path.style.strokeDasharray = "1000";
        path.style.strokeDashoffset = "1000";
        path.style.animation = `drawLine 2s ease-out infinite ${i * 0.5}s`;
        svg.appendChild(path);

        // Draw Dots
        [p1, p2].forEach(pt => {
            const circle = document.createElementNS(svgNS, "circle");
            circle.setAttribute("cx", pt.x); circle.setAttribute("cy", pt.y); circle.setAttribute("r", "3");
            circle.setAttribute("fill", "#0ea5e9");
            circle.style.animation = "pulseDot 2s infinite";
            svg.appendChild(circle);
        });
    });
  }, []);

  useEffect(() => {
    // Value Loop Slider Animation
    const container = document.getElementById('slider-container');
    if (!container) return;

    const slides = container.querySelectorAll('.value-slide');
    const dots = container.querySelectorAll('.value-dot');
    const colors = ['#eff6ff', '#faf5ff', '#f0fdf4'];
    const dotColors = ['#3b82f6', '#a855f7', '#10b981'];
    
    let currentIndex = 0;
    let intervalId;
    const intervalTime = 3500;

    function updateSlide(index) {
      // Update slides
      slides.forEach((slide, i) => {
        slide.classList.remove('active', 'exit');
        if (i === index) {
          slide.classList.add('active');
        } else if (i === (index - 1 + slides.length) % slides.length) {
          slide.classList.add('exit');
        }
      });

      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
          dot.classList.add('active');
          dot.style.backgroundColor = dotColors[index];
        } else {
          dot.style.backgroundColor = '#d1d5db';
        }
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide(currentIndex);
    }

    function startAutoPlay() {
      intervalId = setInterval(nextSlide, intervalTime);
    }

    function stopAutoPlay() {
      clearInterval(intervalId);
    }

    // Initialize
    updateSlide(0);
    startAutoPlay();

    // Event listeners
    container.addEventListener('mouseenter', stopAutoPlay);
    container.addEventListener('mouseleave', startAutoPlay);

    // Clickable dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        stopAutoPlay();
        currentIndex = index;
        updateSlide(currentIndex);
      });
    });

    return () => {
      container.removeEventListener('mouseenter', stopAutoPlay);
      container.removeEventListener('mouseleave', startAutoPlay);
      stopAutoPlay();
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

        /* Call Animation Styles */
        .call-animation-container {
            display: flex;
            gap: 12px;
            padding: 16px;
            overflow: hidden;
            width: 100%;
        }
        .mini-card {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
            padding: 12px;
            flex: 1;
            min-width: 0;
            border: 1px solid rgba(255, 255, 255, 0.05);
            display: flex;
            flex-direction: column;
        }
        .mini-card-header {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 12px;
            font-size: 11px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.7);
        }
        .mini-icon {
            width: 14px;
            height: 14px;
            color: #00d4ff;
        }
        .summary-text {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 10px;
            margin-bottom: 10px;
            min-height: 40px;
            display: flex;
            align-items: center;
            color: rgba(255, 255, 255, 0.6);
            font-size: 11px;
        }
        .typing-text {
            overflow: hidden;
            border-right: 2px solid #00d4ff;
            white-space: nowrap;
            animation: typing 3s steps(40) 1s both, blink 0.75s step-end infinite;
        }
        @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
        }
        @keyframes blink {
            50% { border-color: transparent; }
        }
        .mini-tags {
            display: flex;
            gap: 6px;
            margin-bottom: 8px;
        }
        .mini-tag {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 6px;
            padding: 4px 10px;
            font-size: 10px;
            color: rgba(255, 255, 255, 0.7);
            animation: fadeIn 0.5s ease-out both;
        }
        .mini-tag:nth-child(1) { animation-delay: 4s; }
        .mini-tag:nth-child(2) { animation-delay: 4.2s; }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .call-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }
        .caller-info {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .mini-avatar {
            width: 28px;
            height: 28px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            font-size: 11px;
        }
        .caller-name {
            font-size: 11px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.9);
        }
        .call-time {
            font-size: 10px;
            color: rgba(255, 255, 255, 0.5);
        }
        .call-actions {
            display: flex;
            gap: 4px;
        }
        .mini-action-btn {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        .mini-action-btn svg {
            width: 12px;
            height: 12px;
        }
        .speaker-btn { background: rgba(255, 255, 255, 0.1); }
        .end-btn { background: #ef4444; animation: pulse 2s ease-in-out infinite; }
        .mic-btn { background: rgba(255, 255, 255, 0.1); }
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        .transcript-section {
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .waveform-mini {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2px;
            height: 24px;
            margin-top: 8px;
        }
        .wave-bar-mini {
            width: 2px;
            background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
            border-radius: 1px;
            animation: wave 1.2s ease-in-out infinite;
        }
        .wave-bar-mini:nth-child(1) { animation-delay: 0s; }
        .wave-bar-mini:nth-child(2) { animation-delay: 0.1s; }
        .wave-bar-mini:nth-child(3) { animation-delay: 0.2s; }
        .wave-bar-mini:nth-child(4) { animation-delay: 0.3s; }
        .wave-bar-mini:nth-child(5) { animation-delay: 0.4s; }
        .wave-bar-mini:nth-child(6) { animation-delay: 0.5s; }
        .wave-bar-mini:nth-child(7) { animation-delay: 0.4s; }
        .wave-bar-mini:nth-child(8) { animation-delay: 0.3s; }
        @keyframes wave {
            0%, 100% { height: 8px; }
            50% { height: 20px; }
        }
        .placeholder-lines {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .placeholder-line {
            height: 6px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
            animation: shimmer 2s infinite;
        }
        .placeholder-line:nth-child(1) { width: 90%; }
        .placeholder-line:nth-child(2) { width: 75%; }
        @keyframes shimmer {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        /* Map Animations */
        @keyframes drawLine { to { stroke-dashoffset: 0; } }
        @keyframes pulseDot { 0% { r: 2; opacity: 0.8; } 50% { r: 6; opacity: 0.3; } 100% { r: 2; opacity: 0.8; } }

        /* Multilingual Chat Animation */
        .chat-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 12px;
            position: relative;
            overflow: hidden;
            padding: 10px;
        }
        .message-row {
            display: flex;
            align-items: flex-end;
            gap: 8px;
            opacity: 0;
            transform: translateY(20px) scale(0.95);
            width: 100%;
            justify-content: flex-start;
            padding-left: 10px;
            position: relative;
            z-index: 10;
        }
        .avatar {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            flex-shrink: 0;
        }
        .bubble {
            padding: 8px 12px;
            border-radius: 14px;
            border-bottom-left-radius: 2px;
            font-size: 12px;
            line-height: 1.3;
            max-width: 180px;
            position: relative;
            color: #1f2937;
        }
        .bubble-fr { background-color: #E3F2FD; color: #1565C0; }
        .bubble-en { background-color: #E8F5E9; color: #2E7D32; }
        .bubble-hi { background-color: #F3E5F5; color: #6A1B9A; }
        .row-1 { animation: popIn 6s infinite; animation-delay: 0s; }
        .row-2 { animation: popIn 6s infinite; animation-delay: 1.5s; }
        .row-3 { animation: popIn 6s infinite; animation-delay: 3.0s; }
        @keyframes popIn {
            0% { opacity: 0; transform: translateY(20px) scale(0.95); }
            10% { opacity: 1; transform: translateY(0) scale(1); }
            85% { opacity: 1; transform: translateY(0) scale(1); }
            95% { opacity: 0; transform: translateY(-10px) scale(1); }
            100% { opacity: 0; transform: translateY(20px) scale(0.95); }
        }
        .bg-blur {
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.05) 50%, transparent 70%);
            z-index: 0;
            animation: rotate 20s linear infinite;
            pointer-events: none;
        }
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        /* Product Value Loop Animation Styles */
        .value-loop-slider {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
        }
        .value-loop-container {
            position: relative;
            width: 100%;
            height: 100%;
            perspective: 1000px;
        }
        .value-slide {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: white;
            border-radius: 20px;
            padding: 24px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            transition: all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
            opacity: 0;
            transform: translateY(20px) scale(0.95);
            pointer-events: none;
            z-index: 0;
        }
        .value-slide.active {
            opacity: 1;
            transform: translateY(0) scale(1);
            z-index: 10;
            pointer-events: auto;
        }
        .value-slide.exit {
            opacity: 0;
            transform: translateY(-20px) scale(1.05);
            z-index: 0;
        }
        .value-icon-circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .value-icon-circle svg {
            width: 40px;
            height: 40px;
        }
        .value-slide-title {
            font-size: 20px;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 8px;
            text-align: center;
        }
        .value-slide-desc {
            font-size: 13px;
            font-weight: 500;
            color: #6b7280;
            text-align: center;
            line-height: 1.5;
        }
        .value-particle {
            position: absolute;
            border-radius: 50%;
            opacity: 0;
        }
        @keyframes floatUp {
            0% { transform: translateY(0) scale(0); opacity: 0; }
            50% { opacity: 0.6; }
            100% { transform: translateY(-100px) scale(1); opacity: 0; }
        }
        .value-particle {
            animation: floatUp 2.5s ease-out forwards;
        }
        .value-dots {
            display: flex;
            gap: 8px;
            position: absolute;
            bottom: -50px;
            left: 50%;
            transform: translateX(-50%);
        }
        .value-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #d1d5db;
            cursor: pointer;
            transition: all 0.3s ease;
            border: none;
            padding: 0;
        }
        .value-dot.active {
            width: 24px;
            border-radius: 4px;
        }
        body.value-loop-bg-1 {
            transition: background-color 0.7s ease;
        }
        body.value-loop-bg-2 {
            transition: background-color 0.7s ease;
        }
        body.value-loop-bg-3 {
            transition: background-color 0.7s ease;
        }

        /* Centralized Scheduling Animation Styles */
        .sched-dash-card {
            width: 100%;
            height: 100%;
            background: #f8fafc;
            position: relative;
            overflow: hidden;
            display: flex;
            border: 4px solid #f3f4f6;
        }
        .sched-sidebar {
            width: 50px;
            background: #1e293b;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
            gap: 12px;
            z-index: 10;
        }
        .sched-nav-icon {
            width: 28px;
            height: 28px;
            border-radius: 8px;
            background: rgba(255,255,255,0.1);
            color: #94a3b8;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        .sched-nav-icon.active {
            background: #3B82F6;
            color: white;
            box-shadow: 0 4px 10px rgba(59,130,246,0.3);
        }
        .sched-main-content {
            flex: 1;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .sched-header { display: flex; justify-content: space-between; align-items: center; }
        .sched-header-text { display: flex; flex-direction: column; gap: 4px; }
        .sched-title-bar { width: 70px; height: 8px; background: #cbd5e1; border-radius: 4px; }
        .sched-subtitle-bar { width: 40px; height: 6px; background: #e2e8f0; border-radius: 3px; }
        .sched-profile-group { display: flex; gap: 6px; align-items: center; }
        .sched-notif-dot { width: 8px; height: 8px; background: #EF4444; border-radius: 50%; }
        .sched-profile { width: 24px; height: 24px; background: #cbd5e1; border-radius: 50%; }
        .sched-stats-row { display: flex; gap: 10px; }
        .sched-stat-card {
            flex: 1;
            background: white;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .sched-stat-label { width: 30px; height: 6px; background: #e2e8f0; border-radius: 3px; }
        .sched-stat-val {
            font-size: 12px;
            font-weight: 700;
            opacity: 0;
            transform: translateY(5px);
            animation: schedSlideUpFade 8s infinite;
        }
        .sched-dash-grid { display: flex; gap: 10px; flex: 1; min-height: 0; }
        .sched-chart-container {
            flex: 1.5; 
            background: white;
            border-radius: 10px;
            padding: 10px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
            display: flex;
            flex-direction: column;
            gap: 8px;
            position: relative;
        }
        .sched-chart-header { width: 50px; height: 8px; background: #e2e8f0; border-radius: 4px; }
        .sched-chart-bars { flex: 1; display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 4px; border-bottom: 1px solid #f1f5f9; padding-right: 4px; }
        .sched-bar { width: 10px; background: #3B82F6; border-radius: 3px; opacity: 0.8; height: 0%; position: relative; transition: opacity 0.3s; }
        .sched-bar-1 { animation: schedGrow1 8s infinite; animation-delay: 0.2s; }
        .sched-bar-2 { animation: schedGrow2 8s infinite; animation-delay: 0.3s; }
        .sched-bar-3 { animation: schedGrow3 8s infinite; animation-delay: 0.4s; }
        .sched-bar-4 { animation: schedGrow4 8s infinite; animation-delay: 0.5s; }
        .sched-bar-5 { animation: schedGrow5 8s infinite; animation-delay: 0.6s; }
        .sched-calendar-widget { flex: 1; background: white; border-radius: 10px; padding: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.02); display: flex; flex-direction: column; gap: 6px; }
        .sched-cal-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px; }
        .sched-cal-month { width: 24px; height: 6px; background: #94a3b8; border-radius: 3px; }
        .sched-cal-arrows { display: flex; gap: 3px; }
        .sched-arrow { width: 4px; height: 4px; background: #cbd5e1; border-radius: 50%; }
        .sched-cal-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 1fr); gap: 4px; flex: 1; }
        .sched-cal-day { background: #f8fafc; border-radius: 4px; position: relative; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #94a3b8; font-weight: 600; }
        .sched-cal-day.booked::after { content: ''; position: absolute; bottom: 2px; width: 3px; height: 3px; border-radius: 50%; background-color: #3B82F6; }
        .sched-cal-day.booked-urgent::after { content: ''; position: absolute; bottom: 2px; width: 3px; height: 3px; border-radius: 50%; background-color: #8B5CF6; }
        .sched-target-day { animation: schedDaySelect 8s infinite; color: #3B82F6; }
        .sched-event-dot-new { position: absolute; width: 3px; height: 3px; background: #3B82F6; border-radius: 50%; bottom: 2px; transform: scale(0); animation: schedDotPop 8s infinite; }
        .sched-tooltip { position: absolute; top: -20px; left: 50%; transform: translateX(-50%) scale(0); background: #1e293b; color: white; padding: 2px 5px; border-radius: 4px; font-size: 9px; font-weight: 600; opacity: 0; pointer-events: none; white-space: nowrap; z-index: 20; animation: schedShowTooltip 8s infinite; }
        .sched-cursor { position: absolute; width: 14px; height: 14px; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23111827' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z' /%3E%3C/svg%3E"); background-size: contain; background-repeat: no-repeat; top: 110%; left: 110%; z-index: 50; animation: schedMoveCursor 8s infinite; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2)); }
        @keyframes schedSlideUpFade { 0% { opacity: 0; transform: translateY(5px); } 10% { opacity: 1; transform: translateY(0); } 90% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(5px); } }
        @keyframes schedGrow1 { 0% { height: 0; } 10% { height: 40%; } 90% { height: 40%; } 100% { height: 0; } }
        @keyframes schedGrow2 { 0% { height: 0; } 15% { height: 70%; } 90% { height: 70%; } 100% { height: 0; } }
        @keyframes schedGrow3 { 0% { height: 0; } 20% { height: 50%; } 90% { height: 50%; } 100% { height: 0; } }
        @keyframes schedGrow4 { 0% { height: 0; } 25% { height: 85%; } 90% { height: 85%; } 100% { height: 0; } } 
        @keyframes schedGrow5 { 0% { height: 0; } 30% { height: 60%; } 90% { height: 60%; } 100% { height: 0; } }
        @keyframes schedShowTooltip { 0%, 20% { opacity: 0; transform: translateX(-50%) scale(0); } 25% { opacity: 1; transform: translateX(-50%) scale(1); top: -25px; } 35% { opacity: 0; transform: translateX(-50%) scale(0); } 100% { opacity: 0; } }
        @keyframes schedMoveCursor { 0% { top: 110%; left: 110%; } 20% { top: 55%; left: 40%; transform: scale(1); } 25% { top: 55%; left: 40%; transform: scale(1); } 40% { top: 70%; left: 80%; transform: scale(1); } 45% { top: 70%; left: 80%; transform: scale(1); } 50% { top: 70%; left: 80%; transform: scale(0.8); } 55% { top: 70%; left: 80%; transform: scale(1); } 70% { top: 25%; left: 30%; } 100% { top: 110%; left: -10%; } }
        @keyframes schedDaySelect { 0%, 50% { background: #f8fafc; transform: scale(1); } 52% { transform: scale(0.9); } 55% { background: #dbeafe; transform: scale(1); } 90% { background: #dbeafe; } 100% { background: #f8fafc; } }
        @keyframes schedDotPop { 0%, 55% { transform: scale(0); } 60% { transform: scale(1); } 90% { transform: scale(1); } 100% { transform: scale(0); } }

        /* Upload Animation Styles */
        .upload-card {
            width: 100%;
            height: 100%;
            background: #1e293b;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 4px solid #334155;
            padding: 10px;
        }
        .upload-drop-zone {
            width: 100%;
            height: 100%;
            border: 2px dashed #475569;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #0f172a;
            transition: all 0.3s ease;
            position: relative;
            animation: uploadZonePulse 8s infinite;
        }
        @keyframes uploadZonePulse {
            0%, 15% { background: #0f172a; border-color: #475569; }
            20%, 35% { background: #1e293b; border-color: #3b82f6; }
            40%, 100% { background: #0f172a; border-color: #475569; }
        }
        .upload-zone-icon {
            margin-bottom: 8px;
            animation: uploadIconFade 8s infinite;
            color: #94a3b8;
        }
        .upload-zone-text {
            font-size: 12px;
            color: #cbd5e1;
            font-weight: 500;
            animation: uploadTextFade 8s infinite;
        }
        .upload-browse-btn {
            margin-top: 8px;
            padding: 4px 12px;
            background: #334155;
            border: 1px solid #475569;
            border-radius: 6px;
            font-size: 10px;
            color: #f1f5f9;
            font-weight: 600;
            box-shadow: 0 1px 2px rgba(0,0,0,0.2);
            animation: uploadBtnFade 8s infinite;
        }
        @keyframes uploadIconFade { 0%, 35% { opacity: 1; } 40%, 100% { opacity: 0; } }
        @keyframes uploadTextFade { 0%, 35% { opacity: 1; } 40%, 100% { opacity: 0; } }
        @keyframes uploadBtnFade { 0%, 35% { opacity: 1; } 40%, 100% { opacity: 0; } }
        .upload-file-pdf {
            position: absolute;
            width: 50px;
            height: 60px;
            background: #f8fafc;
            border-radius: 6px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.4);
            border: 1px solid #e2e8f0;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 20;
            color: #EF4444;
            top: 110%;
            left: 80%;
            animation: uploadDragFile 8s infinite;
            flex-direction: column;
        }
        .upload-pdf-label {
            font-size: 8px;
            font-weight: 800;
            color: #EF4444;
            text-transform: uppercase;
            margin-top: 2px;
        }
        @keyframes uploadDragFile {
            0% { top: 110%; left: 110%; transform: rotate(10deg) scale(1); opacity: 1; }
            15% { top: 70%; left: 80%; transform: rotate(10deg) scale(1); }
            25% { top: 40%; left: 45%; transform: rotate(-5deg) scale(1.1); box-shadow: 0 20px 30px rgba(0,0,0,0.4); }
            30% { top: 40%; left: 45%; transform: rotate(0deg) scale(1); box-shadow: 0 4px 6px rgba(0,0,0,0.2); }
            55% { top: 40%; left: 45%; opacity: 1; transform: scale(1); }
            56% { opacity: 0; transform: scale(0.9); }
            100% { top: 110%; left: 110%; opacity: 0; }
        }
        .upload-cursor {
            position: absolute;
            width: 16px;
            height: 16px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f1f5f9' viewBox='0 0 24 24' stroke='%230f172a' stroke-width='1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11' /%3E%3C/svg%3E");
            background-size: contain;
            background-repeat: no-repeat;
            z-index: 30;
            top: 110%;
            left: 110%;
            animation: uploadMoveCursor 8s infinite;
        }
        @keyframes uploadMoveCursor {
            0% { top: 110%; left: 115%; opacity: 1; }
            10% { top: 75%; left: 85%; } 
            15% { transform: scale(0.9); } 
            25% { top: 45%; left: 50%; }
            30% { transform: scale(1); } 
            40% { top: 80%; left: 20%; opacity: 0; }
            100% { opacity: 0; }
        }
        .upload-progress-container {
            position: absolute;
            bottom: 30px;
            width: 60%;
            height: 4px;
            background: #334155;
            border-radius: 2px;
            overflow: hidden;
            opacity: 0;
            animation: uploadShowProgress 8s infinite;
        }
        .upload-progress-bar {
            height: 100%;
            background: #3B82F6;
            width: 0%;
            animation: uploadFillProgress 8s infinite;
        }
        @keyframes uploadShowProgress {
            0%, 30% { opacity: 0; }
            35% { opacity: 1; }
            55% { opacity: 1; }
            56% { opacity: 0; }
            100% { opacity: 0; }
        }
        @keyframes uploadFillProgress {
            0%, 30% { width: 0%; }
            40% { width: 40%; } 
            55% { width: 100%; } 
            100% { width: 100%; }
        }
        .upload-success-badge {
            position: absolute;
            top: 45%; 
            left: 50%;
            width: 40px;
            height: 40px;
            background: #10B981;
            border-radius: 50%;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            animation: uploadPopSuccess 8s infinite;
        }
        @keyframes uploadPopSuccess {
            0%, 55% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
            58% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
            60% { transform: translate(-50%, -50%) scale(1); }
            83% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            88% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
        }
        .upload-uploaded-text {
            position: absolute;
            top: 65%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 14px;
            font-weight: 700;
            color: #10B981;
            opacity: 0;
            animation: uploadTextSuccess 8s infinite;
            white-space: nowrap;
        }
        @keyframes uploadTextSuccess {
            0%, 55% { opacity: 0; transform: translateX(-50%) translateY(10px); }
            58% { opacity: 1; transform: translateX(-50%) translateY(0); }
            83% { opacity: 1; transform: translateX(-50%) translateY(0); }
            88% { opacity: 0; }
            100% { opacity: 0; }
        }

        /* Security Animation Styles */
        .sec7-scene-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .sec7-icon-large {
            font-size: 4rem;
            filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.5));
        }
        .sec7-progress-container {
            position: absolute;
            bottom: 1rem;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            height: 4px;
            background: rgba(255,255,255,0.1);
            border-radius: 2px;
            overflow: hidden;
        }
        .sec7-label-text {
            position: absolute;
            bottom: -2.5rem;
            width: 100%;
            text-align: center;
            font-size: 1.2rem;
            font-weight: 600;
            opacity: 0;
            letter-spacing: 0.05em;
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
                  <div className="md:col-span-2 group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 transition duration-200 hover:shadow-xl shadow-none">
                      <div className="flex flex-1 w-full h-full min-h-[16rem] rounded-xl bg-slate-900 overflow-hidden relative">
                          <div ref={securityRef} className="w-full h-full relative">
                              <div className="sec7-scene-container">
                                  {/* SCENE 1: GDPR */}
                                  <div id="sec7-scene-gdpr" className="absolute inset-0 flex flex-col items-center justify-center opacity-0">
                                      <div className="relative">
                                          <i id="sec7-gdpr-doc" className="fas fa-file-contract text-slate-400 sec7-icon-large transform scale-0"></i>
                                          <i id="sec7-gdpr-shield" className="fas fa-shield-check text-green-400 text-6xl absolute -bottom-4 -right-4 opacity-0 scale-150 transform"></i>
                                      </div>
                                      <div className="sec7-label-text text-green-400 sec7-glow-text">GDPR Compliant</div>
                                  </div>

                                  {/* SCENE 2: E2EE */}
                                  <div id="sec7-scene-e2ee" className="absolute inset-0 flex items-center justify-center w-full opacity-0">
                                      <div className="absolute left-10 flex flex-col items-center">
                                          <i className="fas fa-user-circle text-blue-400 text-5xl mb-2"></i>
                                          <div className="h-2 w-10 bg-blue-500/20 rounded-full"></div>
                                      </div>
                                      <div className="absolute right-10 flex flex-col items-center">
                                          <i className="fas fa-user-circle text-purple-400 text-5xl mb-2"></i>
                                          <div className="h-2 w-10 bg-purple-500/20 rounded-full"></div>
                                      </div>
                                      <div className="w-2/3 h-1 bg-slate-700 relative overflow-visible flex items-center">
                                          <div id="sec7-data-packet" className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800 rounded-full border-2 border-white flex items-center justify-center z-10 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                              <i id="sec7-packet-icon" className="fas fa-envelope text-white text-sm"></i>
                                          </div>
                                          <div id="sec7-tunnel-effect" className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent w-full opacity-0"></div>
                                      </div>
                                      <div className="sec7-label-text text-blue-300 sec7-glow-text">End-to-End Encryption</div>
                                  </div>

                                  {/* SCENE 3: Cloud Security */}
                                  <div id="sec7-scene-cloud" className="absolute inset-0 flex flex-col items-center justify-center opacity-0">
                                      <div className="relative">
                                          <i id="sec7-cloud-icon" className="fas fa-cloud text-slate-300 sec7-icon-large transform scale-0"></i>
                                          <div id="sec7-ring-1" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-blue-500 rounded-full border-dashed opacity-0"></div>
                                          <div id="sec7-ring-2" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-cyan-400 rounded-full border-dotted opacity-0"></div>
                                          <i id="sec7-cloud-lock" className="fas fa-lock text-white text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"></i>
                                      </div>
                                      <div className="sec7-label-text text-cyan-300 sec7-glow-text">Secure Cloud Infrastructure</div>
                                  </div>
                              </div>
                              <div className="sec7-progress-container">
                                  <div id="sec7-main-progress" className="sec7-progress-bar"></div>
                              </div>
                          </div>
                      </div>
                      <div className="transition duration-200 group-hover/bento:translate-x-2">
                          <i data-lucide="shield-alert" className="h-4 w-4 text-neutral-500"></i>
                          <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">Security & Privacy</div>
                          <div className="font-sans text-xs font-normal text-neutral-300">Identify and block potential threats automatically.</div>
                      </div>
                  </div>

                  {/* Item 2: Digital Revolution */}
                  <div className="group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 transition duration-200 hover:shadow-xl shadow-none">
                      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden relative">
                          <div className="chat-container">
                              <div className="bg-blur"></div>
                              <div className="message-row row-1">
                                  <div className="avatar">👩🏻</div>
                                  <div className="bubble bubble-fr">
                                      <strong>Bonjour !</strong><br/>
                                      Comment allez-vous ? 🇫🇷
                                  </div>
                              </div>
                              <div className="message-row row-2">
                                  <div className="avatar">👨🏽</div>
                                  <div className="bubble bubble-en">
                                      <strong>Hello!</strong><br/>
                                      I'm doing great, thanks! 🇺🇸
                                  </div>
                              </div>
                              <div className="message-row row-3">
                                  <div className="avatar">👧🏾</div>
                                  <div className="bubble bubble-hi">
                                      <strong>नमस्ते!</strong><br/>
                                      क्या हम आज मिल रहे हैं? 🇮🇳
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="transition duration-200 group-hover/bento:translate-x-2">
                          <i data-lucide="file-warning" className="h-4 w-4 text-neutral-500"></i>
                          <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">The Digital Revolution</div>
                          <div className="font-sans text-xs font-normal text-neutral-300">Support multiple language.</div>
                      </div>
                  </div>

                  {/* Item 3: Product Value Loop */}
                  <div className="group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 transition duration-200 hover:shadow-xl shadow-none">
                      <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl bg-neutral-900 overflow-hidden relative flex items-center justify-center">
                          <div className="value-loop-slider" id="value-loop-slider">
                              <div className="value-loop-container" id="slider-container">
                                  {/* Slide 1: Easy Setup */}
                                  <div className="value-slide active" style={{backgroundColor: '#eff6ff'}} data-color="#eff6ff">
                                      <div className="value-icon-circle" style={{backgroundColor: '#dbeafe'}}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                                      </div>
                                      <h2 className="value-slide-title">Easy to Setup</h2>
                                      <p className="value-slide-desc">Get started in seconds.<br/>No complex configurations.</p>
                                      <div className="value-particle" style={{top: '48px', left: '48px', width: '8px', height: '8px', background: '#7dd3fc', animationDelay: '0.1s'}}></div>
                                      <div className="value-particle" style={{top: '80px', right: '40px', width: '12px', height: '12px', background: '#a5f3fc', animationDelay: '0.3s'}}></div>
                                  </div>

                                  {/* Slide 2: No Code */}
                                  <div className="value-slide" style={{backgroundColor: '#faf5ff'}} data-color="#faf5ff">
                                      <div className="value-icon-circle" style={{backgroundColor: '#f3e8ff'}}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                                      </div>
                                      <h2 className="value-slide-title">No Code Needed</h2>
                                      <p className="value-slide-desc">Visual drag & drop tools.<br/>Built for everyone.</p>
                                      <div className="value-particle" style={{bottom: '48px', left: '64px', width: '8px', height: '8px', background: '#d8b4fe', animationDelay: '0.1s'}}></div>
                                      <div className="value-particle" style={{top: '48px', right: '64px', width: '12px', height: '12px', background: '#c084fc', animationDelay: '0.2s'}}></div>
                                  </div>

                                  {/* Slide 3: Smart Training */}
                                  <div className="value-slide" style={{backgroundColor: '#f0fdf4'}} data-color="#f0fdf4">
                                      <div className="value-icon-circle" style={{backgroundColor: '#dcfce7'}}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M3 6h18M3 18h18M12 8v8"/></svg>
                                      </div>
                                      <h2 className="value-slide-title">Smart Training</h2>
                                      <p className="value-slide-desc">Adapts to your data.<br/>Learns as you grow.</p>
                                      <div className="value-particle" style={{top: '40px', left: '40px', width: '8px', height: '8px', background: '#6ee7b7', animationDelay: '0.1s'}}></div>
                                      <div className="value-particle" style={{bottom: '80px', right: '40px', width: '12px', height: '12px', background: '#a7f3d0', animationDelay: '0.3s'}}></div>
                                  </div>

                                  {/* Pagination Dots */}
                                  <div className="value-dots">
                                      <button className="value-dot active" aria-label="Go to slide 1"></button>
                                      <button className="value-dot" aria-label="Go to slide 2"></button>
                                      <button className="value-dot" aria-label="Go to slide 3"></button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="transition duration-200 group-hover/bento:translate-x-2">
                          <i data-lucide="zap" className="h-4 w-4 text-neutral-500"></i>
                          <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">Product Value Loop</div>
                          <div className="font-sans text-xs font-normal text-neutral-300">Experience seamless automation and intelligent features.</div>
                      </div>
                  </div>

                  {/* Item 4: Power of Communication (Span 2) */}
                  <div className="md:col-span-2 group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 transition duration-200 hover:shadow-xl shadow-none">
                      <div className="flex flex-1 w-full h-full min-h-[14rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden relative">
                          <div className="sched-dash-card">
                              <div className="sched-sidebar">
                                  <div className="sched-nav-icon active"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div>
                                  <div className="sched-nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
                                  <div className="sched-nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
                                  <div className="sched-nav-icon mt-auto mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
                              </div>
                              <div className="sched-main-content">
                                  <div className="sched-header">
                                      <div className="sched-header-text">
                                          <div className="sched-title-bar"></div>
                                          <div className="sched-subtitle-bar"></div>
                                      </div>
                                      <div className="sched-profile-group">
                                          <div className="sched-notif-dot"></div>
                                          <div className="sched-profile"></div>
                                      </div>
                                  </div>
                                  <div className="sched-stats-row">
                                      <div className="sched-stat-card"><div className="sched-stat-label"></div><div className="sched-stat-val text-blue-600">Total: 124</div></div>
                                      <div className="sched-stat-card"><div className="sched-stat-label"></div><div className="sched-stat-val text-emerald-600">Done: 98%</div></div>
                                      <div className="sched-stat-card"><div className="sched-stat-label"></div><div className="sched-stat-val text-purple-600">Time: 24h</div></div>
                                  </div>
                                  <div className="sched-dash-grid">
                                      <div className="sched-chart-container">
                                          <div className="sched-chart-header"></div>
                                          <div className="sched-chart-bars">
                                              <div className="sched-bar sched-bar-1"></div>
                                              <div className="sched-bar sched-bar-2"></div>
                                              <div className="sched-bar sched-bar-3"></div>
                                              <div className="sched-bar sched-bar-4"><div className="sched-tooltip">Peak Users</div></div>
                                              <div className="sched-bar sched-bar-5"></div>
                                          </div>
                                      </div>
                                      <div className="sched-calendar-widget">
                                          <div className="sched-cal-head">
                                              <div className="sched-cal-month"></div>
                                              <div className="sched-cal-arrows"><div className="sched-arrow"></div><div className="sched-arrow"></div></div>
                                          </div>
                                          <div className="sched-cal-grid">
                                              <div className="sched-cal-day">1</div><div className="sched-cal-day booked">2</div><div className="sched-cal-day">3</div><div className="sched-cal-day">4</div>
                                              <div className="sched-cal-day booked-urgent">5</div><div className="sched-cal-day">6</div>
                                              <div className="sched-cal-day sched-target-day">7<div className="sched-event-dot-new"></div></div>
                                              <div className="sched-cal-day booked">8</div><div className="sched-cal-day">9</div><div className="sched-cal-day booked">10</div><div className="sched-cal-day">11</div><div className="sched-cal-day">12</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="sched-cursor"></div>
                          </div>
                      </div>
                      <div className="transition duration-200 group-hover/bento:translate-x-2">
                          <i data-lucide="columns" className="h-4 w-4 text-neutral-500"></i>
                          <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">Centralized Scheduling System</div>
                          <div className="font-sans text-xs font-normal text-neutral-300">Manage appointments and resources efficiently.</div>
                      </div>
                  </div>

                  {/* Item 5: Pursuit of Knowledge */}
                  <div className="group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 transition duration-200 hover:shadow-xl shadow-none">
                      <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl bg-neutral-900 overflow-hidden relative">
                          <div className="upload-card">
                              <div className="upload-drop-zone">
                                  <div className="upload-zone-icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>
                                  </div>
                                  <div className="upload-zone-text">Drop PDF here</div>
                                  <div className="upload-browse-btn">Browse Files</div>
                              </div>
                              <div className="upload-file-pdf">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                                  <span className="upload-pdf-label">PDF</span>
                              </div>
                              <div className="upload-cursor"></div>
                              <div className="upload-progress-container">
                                  <div className="upload-progress-bar"></div>
                              </div>
                              <div className="upload-success-badge">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                              </div>
                              <div className="upload-uploaded-text">File Uploaded!</div>
                          </div>
                      </div>
                      <div className="transition duration-200 group-hover/bento:translate-x-2">
                          <i data-lucide="file-up" className="h-4 w-4 text-neutral-500"></i>
                          <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">Drag & Drop Upload</div>
                          <div className="font-sans text-xs font-normal text-neutral-300">Seamlessly manage your documents.</div>
                      </div>
                  </div>

                  {/* Item 6: Call Transcription & Summaries */}
                  <div className="md:col-span-2 group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 transition duration-200 hover:shadow-xl shadow-none">
                      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden">
                          <div className="call-animation-container w-full">
                              <div className="mini-card">
                                  <div className="mini-card-header">
                                      <svg className="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                                      </svg>
                                      <span>Voice Summary</span>
                                  </div>
                                  
                                  <div className="summary-text">
                                      <div className="typing-text">I'd like to book...</div>
                                  </div>
                                  
                                  <div className="mini-tags">
                                      <div className="mini-tag">Cleaning</div>
                                      <div className="mini-tag">Consultation</div>
                                  </div>
                              </div>
                              <div className="mini-card">
                                  <div className="call-header">
                                      <div className="caller-info">
                                          <div className="mini-avatar">UE</div>
                                          <div>
                                              <div className="caller-name">Uta Elegia</div>
                                              <div className="call-time" id="miniCallTime">03:26</div>
                                          </div>
                                      </div>
                                      <div className="call-actions">
                                          <button className="mini-action-btn speaker-btn">
                                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                  <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                                                  <path d="M19.07 4.93a10 10 0 010 14.14"/>
                                              </svg>
                                          </button>
                                          <button className="mini-action-btn end-btn">
                                              <svg viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                                                  <path d="M3 5.5C3 14.06 9.94 21 18.5 21c.386 0 .77-.014 1.148-.042.435-.032.653-.048.851-.162a1 1 0 00.407-.525c.094-.214.094-.463.094-.963V16.4c0-.26 0-.39-.05-.498a.5.5 0 00-.2-.206c-.097-.054-.224-.072-.477-.107l-3.585-.502c-.279-.039-.418-.059-.54-.03a.5.5 0 00-.265.163c-.088.095-.134.233-.226.51l-.758 2.274c-.088.265-.133.397-.22.49a.5.5 0 01-.28.145C13.305 18.5 13.155 18.5 12.857 18.5H12c-4.714 0-8.5-3.786-8.5-8.5v-.857c0-.298 0-.447.041-.562a.5.5 0 01.145-.28c.093-.087.225-.132.49-.22l2.274-.758c.277-.092.415-.138.51-.226a.5.5 0 00.163-.265c.029-.122.009-.261-.03-.54L6.59 3.706c-.035-.253-.053-.38-.107-.477a.5.5 0 00-.206-.2C6.169 3 6.039 3 5.78 3H2.87c-.5 0-.75 0-.963.094a1 1 0 00-.525.407C1.268 3.699 1.252 3.917 1.22 4.352 1.192 4.73 1.178 5.114 1.178 5.5z"/>
                                              </svg>
                                          </button>
                                          <button className="mini-action-btn mic-btn">
                                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                  <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
                                                  <path d="M19 10v2a7 7 0 01-14 0v-2"/>
                                              </svg>
                                          </button>
                                      </div>
                                  </div>
                                  <div className="transcript-section">
                                      <div className="placeholder-lines">
                                          <div className="placeholder-line"></div>
                                          <div className="placeholder-line"></div>
                                      </div>
                                      
                                      <div className="waveform-mini">
                                          <div className="wave-bar-mini"></div>
                                          <div className="wave-bar-mini"></div>
                                          <div className="wave-bar-mini"></div>
                                          <div className="wave-bar-mini"></div>
                                          <div className="wave-bar-mini"></div>
                                          <div className="wave-bar-mini"></div>
                                          <div className="wave-bar-mini"></div>
                                          <div className="wave-bar-mini"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="transition duration-200 group-hover/bento:translate-x-2">
                          <i data-lucide="phone" className="h-4 w-4 text-neutral-500"></i>
                          <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">Call Transcription & Summaries</div>
                          <div className="font-sans text-xs font-normal text-neutral-300">Every call captured—read it all at a glance.</div>
                      </div>
                  </div>

                  {/* Item 7: Spirit of Adventure (Span 2) */}
                  {/* <div className="md:col-span-3 group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 transition duration-200 hover:shadow-xl shadow-none relative overflow-hidden">
                                            <div id="bento-map-container" className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl bg-neutral-900 relative overflow-hidden border border-white/5">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png" 
                               className="absolute inset-0 w-full h-full object-cover opacity-20 filter invert sepia hue-rotate-180 saturate-50 mix-blend-overlay" 
                               style={{ objectPosition: 'center 25%' }}
                               alt="World Map" />
                          
                          <svg ref={mapSvgRef} id="bento-map-svg" viewBox="0 0 800 400" className="absolute inset-0 w-full h-full pointer-events-none"></svg>
                      </div>

                      <div className="relative z-20 transition duration-200 group-hover/bento:translate-x-2 mt-auto">
                          <div className="flex items-center gap-2 mb-1">
                              <i data-lucide="globe-2" className="h-4 w-4 text-blue-400"></i>
                              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Multi-language Support</span>
                          </div>
                          <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">The Spirit of Adventure</div>
                          <div className="font-sans text-xs font-normal text-neutral-300">Embark on exciting journeys and thrilling discoveries.</div>
                      </div>
                  </div> */}

              </div>

          </div>
      </section>
    </>
  )
}