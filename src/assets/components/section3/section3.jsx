import { useState, useEffect } from 'react';
import { Smile, Wrench, Home, Hammer, Mic } from 'lucide-react';

const demoData = {
  dental: {
    title: "Dental Clinic Assistant",
    glowColor: "bg-cyan-600/20",
    ringColor: "ring-cyan-500/50",
    icon: <Smile className="w-6 h-6" />,
    colorClass: "text-cyan-400",
    bgClass: "bg-cyan-500",
    bgGradient: "from-cyan-500/20 to-cyan-900/20"
  },
  plumber: {
    title: "Emergency Plumbing Bot",
    glowColor: "bg-blue-600/20",
    ringColor: "ring-blue-500/50",
    icon: <Wrench className="w-6 h-6" />,
    colorClass: "text-blue-400",
    bgClass: "bg-blue-500",
    bgGradient: "from-blue-500/20 to-blue-900/20"
  },
  realestate: {
    title: "Luxury Estate Agent",
    glowColor: "bg-yellow-600/20",
    ringColor: "ring-yellow-500/50",
    icon: <Home className="w-6 h-6" />,
    colorClass: "text-yellow-400",
    bgClass: "bg-yellow-500",
    bgGradient: "from-yellow-500/20 to-yellow-900/20"
  },
  roofer: {
    title: "Roofing Specialist",
    glowColor: "bg-orange-600/20",
    ringColor: "ring-orange-500/50",
    icon: <Hammer className="w-6 h-6" />,
    colorClass: "text-orange-400",
    bgClass: "bg-orange-500",
    bgGradient: "from-orange-500/20 to-orange-900/20"
  }
};

export default function Section3() {
  const [activeIndustry, setActiveIndustry] = useState('dental');

  // Auto-rotation timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndustry((current) => {
        const keys = Object.keys(demoData);
        const nextIndex = (keys.indexOf(current) + 1) % keys.length;
        return keys[nextIndex];
      });
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeIndustry]);

  const currentData = demoData[activeIndustry];

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
        .bg-grid-section3 {
            background-size: 50px 50px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-position: center center !important;
        }

        .section3-spotlight {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) !important;
            width: 1000px;
            height: 1000px;
            border-radius: 9999px;
            filter: blur(120px);
            pointer-events: none;
            transition: background-color 0.7s;
        }

        /* Industry Box Active State */
        .industry-box {
            transition: all 0.3s ease-in-out;
        }
        .industry-box.active {
            border-color: rgba(255, 255, 255, 0.3);
            background-color: rgba(255, 255, 255, 0.08);
        }
        .industry-details {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
            opacity: 0;
        }
        .industry-box.active .industry-details {
            max-height: 200px;
            opacity: 1;
            margin-top: 1rem;
        }

        /* Pulse Animation */
        @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 0.2; }
            100% { transform: scale(2.5); opacity: 0; }
        }
        .pulse-circle {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid currentColor;
            opacity: 0;
            animation: pulse-ring 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }

        /* Perfect Wave Animation - Standing Wave Effect */
        @keyframes wave-slide-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        @keyframes wave-slide-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
        }
        .animate-wave-left {
            animation: wave-slide-left 4s linear infinite;
        }
        .animate-wave-right {
            animation: wave-slide-right 4s linear infinite;
        }

        /* Progress Bar Animation */
        @keyframes progress-loading {
            from { width: 0%; }
            to { width: 100%; }
        }
        .progress-bar {
            animation: progress-loading 5000ms linear forwards;
        }
      `}</style>

      <div className="w-full bg-grid-section3 bg-[#050505] text-white font-sans relative">
        {/* SECTION 3: TRY DEMO */}
        <section id="demo-section" className="py-8 sm:py-12 px-4 sm:px-8 lg:px-16 relative overflow-hidden transition-colors duration-700 w-full max-w-7xl mx-auto">

            {/* Dynamic Ambient Background */}
            <div
              id="ambient-glow"
              className={`section3-spotlight ${currentData.glowColor}`}
            ></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Experience the <span className="gradient-text">Difference</span></h2>
                    <p className="text-gray-400">Select an industry to hear how Nexon-AI handles real-world calls.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Side: Industry Selectors (4 Cols) */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">

                        {/* Dental Clinic */}
                        <div
                          className={`relative industry-box cursor-pointer bg-gray-900/40 border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-all duration-300 ${activeIndustry === 'dental' ? 'active' : ''}`}
                          onClick={() => setActiveIndustry('dental')}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <Smile className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg">Dental Clinic</h3>
                            </div>
                            <div className="industry-details">
                                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Context:</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded border border-cyan-500/20">Scheduling</span>
                                    <span className="text-xs bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded border border-cyan-500/20">Pricing</span>
                                </div>
                            </div>
                            {activeIndustry === 'dental' && (
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 rounded-b-xl overflow-hidden">
                                    <div className={`h-full ${demoData.dental.bgClass} progress-bar`} />
                                </div>
                            )}
                        </div>

                        {/* Plumber */}
                        <div
                          className={`relative industry-box cursor-pointer bg-gray-900/40 border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-all duration-300 ${activeIndustry === 'plumber' ? 'active' : ''}`}
                          onClick={() => setActiveIndustry('plumber')}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400">
                                    <Wrench className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg">Plumbing Services</h3>
                            </div>
                            <div className="industry-details">
                                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Context:</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded border border-blue-500/20">Emergency</span>
                                    <span className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded border border-blue-500/20">Dispatch</span>
                                </div>
                            </div>
                            {activeIndustry === 'plumber' && (
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 rounded-b-xl overflow-hidden">
                                    <div className={`h-full ${demoData.plumber.bgClass} progress-bar`} />
                                </div>
                            )}
                        </div>

                        {/* Real Estate */}
                        <div
                          className={`relative industry-box cursor-pointer bg-gray-900/40 border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-all duration-300 ${activeIndustry === 'realestate' ? 'active' : ''}`}
                          onClick={() => setActiveIndustry('realestate')}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                                    <Home className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg">Real Estate</h3>
                            </div>
                            <div className="industry-details">
                                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Context:</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs bg-yellow-500/10 text-yellow-300 px-2 py-1 rounded border border-yellow-500/20">Viewings</span>
                                    <span className="text-xs bg-yellow-500/10 text-yellow-300 px-2 py-1 rounded border border-yellow-500/20">High Value</span>
                                </div>
                            </div>
                            {activeIndustry === 'realestate' && (
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 rounded-b-xl overflow-hidden">
                                    <div className={`h-full ${demoData.realestate.bgClass} progress-bar`} />
                                </div>
                            )}
                        </div>

                        {/* Roofer */}
                        <div
                          className={`relative industry-box cursor-pointer bg-gray-900/40 border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-all duration-300 ${activeIndustry === 'roofer' ? 'active' : ''}`}
                          onClick={() => setActiveIndustry('roofer')}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
                                    <Hammer className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg">Roofing Contractor</h3>
                            </div>
                            <div className="industry-details">
                                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Context:</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs bg-orange-500/10 text-orange-300 px-2 py-1 rounded border border-orange-500/20">Quotes</span>
                                    <span className="text-xs bg-orange-500/10 text-orange-300 px-2 py-1 rounded border border-orange-500/20">Inspections</span>
                                </div>
                            </div>
                            {activeIndustry === 'roofer' && (
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 rounded-b-xl overflow-hidden">
                                    <div className={`h-full ${demoData.roofer.bgClass} progress-bar`} />
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Right Side: Voice Simulator */}
                    <div className="lg:col-span-7">

                        {/* ==============================================
                            DESKTOP VIEW: LARGE ORB
                            Visible only on lg screens
                        ============================================== */}
                        <div className="hidden lg:flex flex-col items-center justify-center min-h-[500px]">
                            {/* Orb Container */}
                            <div className="relative w-64 h-64 flex items-center justify-center mb-6">
                                {/* Outer pulsing rings */}
                                <div className={`pulse-circle ${currentData.colorClass} opacity-10`} style={{ animationDelay: '0s' }}></div>
                                <div className={`pulse-circle ${currentData.colorClass} opacity-10`} style={{ animationDelay: '1s' }}></div>
                                <div className={`pulse-circle ${currentData.colorClass} opacity-10`} style={{ animationDelay: '2s' }}></div>

                                {/* Center Orb with Mic */}
                                <div className={`w-40 h-40 rounded-full ${currentData.bgClass} shadow-[0_0_60px_rgba(0,0,0,0.5)] flex items-center justify-center relative z-10 transition-colors duration-500`}>
                                    <Mic className="w-16 h-16 text-white" />
                                </div>
                            </div>

                            {/* Wave Animation Below Mic */}
                            <div className="relative w-96 h-20 overflow-hidden opacity-90">
                                <svg viewBox="0 0 200 20" className={`absolute top-0 left-0 w-[200%] h-full fill-none ${currentData.colorClass} animate-wave-left`}>
                                    <path d="M0 10 Q 25 0 50 10 T 100 10 T 150 10 T 200 10 T 250 10 T 300 10 T 350 10 T 400 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                                </svg>
                                <svg viewBox="0 0 200 20" className={`absolute top-0 left-0 w-[200%] h-full fill-none ${currentData.colorClass} animate-wave-right`}>
                                    <path d="M0 10 Q 25 20 50 10 T 100 10 T 150 10 T 200 10 T 250 10 T 300 10 T 350 10 T 400 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>

                    </div>

                </div>

                {/* ==============================================
                    MOBILE VIEW: RECTANGULAR TALK BOX
                    Visible only on small screens (<lg)
                    Positioned below the industry buttons
                ============================================== */}
                <div className="lg:hidden relative mt-8 z-50 animate-in slide-in-from-bottom-10 fade-in duration-500">
                    {/* Glow Effect behind box */}
                    <div className={`absolute inset-0 blur-xl opacity-40 ${currentData.bgClass} rounded-2xl`}></div>

                    {/* The Box itself */}
                    <div className="relative bg-[#111] border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-4 overflow-hidden backdrop-blur-xl">

                        {/* Left: Active Mic Indicator */}
                        <div className={`relative flex-shrink-0 w-12 h-12 rounded-full ${currentData.bgClass} flex items-center justify-center shadow-lg`}>
                            <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-50"></div>
                            <Mic className="w-6 h-6 text-white relative z-10" />
                        </div>

                        {/* Middle: Text Info */}
                        <div className="flex-1 min-w-0 z-10">
                            <h3 className={`font-bold text-base truncate ${currentData.colorClass}`}>{currentData.title}</h3>
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${currentData.bgClass} opacity-75`}></span>
                                  <span className={`relative inline-flex rounded-full h-2 w-2 ${currentData.bgClass}`}></span>
                                </span>
                                <p className="text-xs text-gray-400 font-medium">AI Agent Listening...</p>
                            </div>
                        </div>

                        {/* Background: Wave Animation (Compressed) */}
                        <div className="absolute inset-0 flex items-center justify-end opacity-20 pointer-events-none">
                            <div className="relative w-full h-full overflow-hidden">
                                 <svg viewBox="0 0 200 20" className={`absolute top-1/2 -translate-y-1/2 right-0 w-[150%] h-24 fill-none ${currentData.colorClass} animate-wave-left`}>
                                    <path d="M0 10 Q 25 0 50 10 T 100 10 T 150 10 T 200 10 T 250 10 T 300 10 T 350 10 T 400 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                 </svg>
                            </div>
                        </div>

                        {/* Right: Visualizer Bars (Static Simulation) */}
                        <div className="flex gap-1 h-6 items-center z-10">
                            <div className={`w-1 bg-white/50 rounded-full animate-pulse h-3`} style={{ animationDelay: '0s' }}></div>
                            <div className={`w-1 bg-white/50 rounded-full animate-pulse h-6`} style={{ animationDelay: '0.1s' }}></div>
                            <div className={`w-1 bg-white/50 rounded-full animate-pulse h-4`} style={{ animationDelay: '0.2s' }}></div>
                            <div className={`w-1 bg-white/50 rounded-full animate-pulse h-5`} style={{ animationDelay: '0.3s' }}></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
      </div>
    </>
  )
}
