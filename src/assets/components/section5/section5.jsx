import React, { useState, useEffect } from 'react'
import { useExternalScripts } from '../useExternalScripts'

export default function Section5() {
  useExternalScripts();
  const [activeTier, setActiveTier] = useState(0);

  const tierData = [
    {
        title: "Small Local Businesses",
        desc: "Perfect for dentists, beauty salons, barbers, gyms, and home services. We answer every call so you can focus on service.",
        icon: "store",
        color: "text-blue-400",
        orbitItems: [
            { icon: "scissors", label: "Salon" },
            { icon: "stethoscope", label: "Clinic" },
            { icon: "utensils", label: "Cafe" },
            { icon: "wrench", label: "Repair" }
        ]
    },
    {
        title: "Growing Franchises",
        desc: "Unified voice for multiple locations. Centralized booking and consistent branding across all your branches.",
        icon: "building",
        color: "text-purple-400",
        orbitItems: [
            { icon: "map-pin", label: "Multi-Loc" },
            { icon: "users", label: "Teams" },
            { icon: "bar-chart", label: "Analytics" },
            { icon: "share-2", label: "Sync" }
        ]
    },
    {
        title: "Global Enterprises",
        desc: "Enterprise-grade security, custom integrations, and dedicated support for high-volume call centers.",
        icon: "globe",
        color: "text-green-400",
        orbitItems: [
            { icon: "shield", label: "Security" },
            { icon: "server", label: "API" },
            { icon: "headphones", label: "Support" },
            { icon: "cpu", label: "AI Core" }
        ]
    }
  ];

  const currentTier = tierData[activeTier];

  // Re-run Lucide icons when content changes
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [activeTier]);

  return (
    <>
      <style>{`
        /* Custom Gradient for text */
        .gradient-text {
            background: linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* Subtle grid background pattern */
        .bg-grid {
            background-size: 50px 50px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-attachment: fixed;
        }

        /* Tier Box Active States */
        .tier-box {
            transition: all 0.3s ease;
        }
        .tier-box.active {
            background-color: rgba(30, 41, 59, 0.8);
            border-color: rgba(59, 130, 246, 0.5);
            box-shadow: 0 0 20px -5px rgba(59, 130, 246, 0.3);
        }
        .tier-box.active h3 {
            color: #60a5fa; /* Blue-400 */
        }

        /* Orbit Animations */
        @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
            animation: spinSlow 60s linear infinite;
        }
        .animate-spin-reverse {
            animation: spinReverse 60s linear infinite;
        }
      `}</style>

      {/* SECTION 5: WHO WE SERVE (Tiered Orbit Design) */}
      <section id="clients-section" className="py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-black w-full font-sans text-white">
          
          {/* Dynamic Ambient Glow */}
          <div id="tier-glow" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-700"></div>

          <div className="container mx-auto relative z-10">
              
              {/* Section Header */}
              <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                      Perfect for <span className="gradient-text">Every Stage</span> of Growth
                  </h2>
                  <p className="text-gray-400 mb-10">Tailored solutions whether you're a local shop or a global enterprise.</p>
                  
                  {/* Tier Selector Boxes */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                      
                      {/* Tier 1 Box */}
                      <div onClick={() => setActiveTier(0)} className={`tier-box cursor-pointer p-6 rounded-xl border border-gray-700 bg-gray-900/50 hover:bg-gray-800 transition-all duration-300 text-center group relative overflow-hidden ${activeTier === 0 ? 'active' : ''}`}>
                          <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <h3 className="text-lg font-bold text-white relative z-10">Small Business</h3>
                          <p className="text-xs text-blue-400 mt-1 uppercase tracking-wider relative z-10">Tier 1 • 1-10 Staff</p>
                      </div>

                      {/* Tier 2 Box */}
                      <div onClick={() => setActiveTier(1)} className={`tier-box cursor-pointer p-6 rounded-xl border border-gray-700 bg-gray-900/50 hover:bg-gray-800 transition-all duration-300 text-center group relative overflow-hidden ${activeTier === 1 ? 'active' : ''}`}>
                          <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <h3 className="text-lg font-bold text-white relative z-10">Growing Chains</h3>
                          <p className="text-xs text-purple-400 mt-1 uppercase tracking-wider relative z-10">Tier 2 • Multi-Location</p>
                      </div>

                      {/* Tier 3 Box */}
                      <div onClick={() => setActiveTier(2)} className={`tier-box cursor-pointer p-6 rounded-xl border border-gray-700 bg-gray-900/50 hover:bg-gray-800 transition-all duration-300 text-center group relative overflow-hidden ${activeTier === 2 ? 'active' : ''}`}>
                          <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <h3 className="text-lg font-bold text-white relative z-10">Enterprise</h3>
                          <p className="text-xs text-green-400 mt-1 uppercase tracking-wider relative z-10">Tier 3 • Large Org</p>
                      </div>

                  </div>
              </div>

              {/* CIRCULAR LAYOUT (Desktop) */}
              <div className="hidden lg:block relative w-[900px] h-[700px] mx-auto mt-20">
                  
                  {/* Center Static Hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] z-20 flex flex-col items-center justify-center text-center p-8 rounded-full bg-gray-900 border border-gray-700 shadow-[0_0_60px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-500" id="center-hub">
                      
                      {/* Inner Glow Ring */}
                      <div className="absolute inset-4 rounded-full border border-white/5 pointer-events-none"></div>
                      
                      <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10" id="tier-icon-container">
                          <i data-lucide={currentTier.icon} className={`w-12 h-12 ${currentTier.color}`}></i>
                      </div>
                      
                      <h3 id="tier-title" className="text-2xl font-bold text-white mb-4">{currentTier.title}</h3>
                      <p id="tier-desc" className="text-sm text-gray-400 leading-relaxed">
                          {currentTier.desc}
                      </p>
                  </div>

                  {/* Revolving Orbit Container */}
                  <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -ml-[400px] -mt-[400px] rounded-full border border-white/5 animate-spin-slow pointer-events-none">
                      {/* Orbit Track (Visual only) */}
                  </div>

                  {/* Orbit Items Container (Rotates) */}
                  <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -ml-[400px] -mt-[400px] animate-spin-slow z-10" id="orbit-container">
                      {currentTier.orbitItems.map((item, i) => {
                        const angle = (i * 90) * (Math.PI / 180);
                        const top = 50 + 50 * Math.sin(angle);
                        const left = 50 + 50 * Math.cos(angle);
                        return (
                          <div key={i} className="absolute w-16 h-16 bg-gray-900 border border-gray-700 rounded-full flex flex-col items-center justify-center shadow-lg animate-spin-reverse"
                               style={{ top: `${top}%`, left: `${left}%`, transform: 'translate(-50%, -50%)' }}>
                              <i data-lucide={item.icon} className={`w-6 h-6 ${currentTier.color} mb-1`}></i>
                              <span className="text-[10px] text-gray-300 font-bold">{item.label}</span>
                          </div>
                        )
                      })}
                  </div>

              </div>

              {/* STACKED LAYOUT (Mobile/Tablet) */}
              <div className="lg:hidden space-y-6 mt-12" id="mobile-stack">
                  {currentTier.orbitItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                        <div className={`p-2 bg-gray-800 rounded-lg ${currentTier.color}`}>
                            <i data-lucide={item.icon} className="w-6 h-6"></i>
                        </div>
                        <span className="text-white font-medium">{item.label}</span>
                    </div>
                  ))}
              </div>

          </div>
      </section>
    </>
  )
}