import React, { useEffect } from 'react'

export default function Section1() {
  useEffect(() => {
    // Load Tailwind if not present
    if (!document.querySelector('script[src="https://cdn.tailwindcss.com"]')) {
      const script = document.createElement('script');
      script.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(script);
    }

    // Load Lucide Icons if not present
    if (!document.querySelector('script[src="https://unpkg.com/lucide@latest"]')) {
      const script = document.createElement('script');
      script.src = "https://unpkg.com/lucide@latest";
      script.onload = () => {
        if (window.lucide) window.lucide.createIcons();
      };
      document.head.appendChild(script);
    } else if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <>
      <style>{`
        /* Custom Gradient for text/buttons */
        .gradient-text {
            background: linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%);
        }

        .gradient-border {
            position: relative;
            background: #000;
            background-clip: padding-box;
            border: 1px solid transparent;
            border-radius: 1rem;
        }

        .gradient-border::before {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            z-index: -1;
            margin: -1px;
            border-radius: inherit;
            background: linear-gradient(to right, #7c3aed, #0ea5e9);
        }

        /* Subtle grid background pattern */
        .bg-grid {
            background-size: 50px 50px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-attachment: fixed;
        }
        
        .glow-effect {
            box-shadow: 0 0 50px -10px rgba(124, 58, 237, 0.3);
        }

        /* Hero Specific Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* Floating animation for badge */
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
      `}</style>
      
      {/* Navbar */}
      <nav className="w-full py-6 px-4 sm:px-8 lg:px-16 flex justify-between items-center fixed top-0 left-0 bg-black/80 backdrop-blur-md z-50 border-b border-white/5">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <i data-lucide="bot" className="text-white w-6 h-6"></i>
            </div>
            <span className="text-xl font-bold tracking-wide">Nexon-<span className="text-blue-400">AI</span></span>
        </div>

        {/* Optional Nav Actions */}
        <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Features</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Pricing</a>
            <button className="px-5 py-2 rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all text-sm font-medium">
                Log In
            </button>
        </div>
      </nav>

      {/* Main Wrapper */}
      <main> 

        {/* SECTION 1: HERO */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 pt-28 pb-10 lg:pt-20 lg:pb-0 relative overflow-hidden bg-grid" style={{ backgroundColor: '#050505', color: '#ffffff' }}>
            
            {/* Dynamic Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none transition-colors duration-700"></div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
                
                {/* Content Column */}
                <div className="space-y-8 text-center lg:text-left">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        <span className="text-blue-300 text-xs font-semibold tracking-wider uppercase">Next Gen Receptionist</span>
                    </div>

                    {/* H1 */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                        Supercharge your business with the <br className="hidden lg:block" />
                        <span className="gradient-text">white-labeled</span> Nexon-AI Receptionist!
                    </h1>

                    {/* H2 */}
                    <h2 className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Book, cancel, and reschedule appointments, handle enquiries and complaints, and reduce missed calls—saving receptionist time and boosting profits by up to <span className="text-white font-semibold">80%</span> so you never lose business to a missed call again.
                    </h2>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                        <button className="w-full sm:w-auto px-8 py-4 gradient-bg rounded-lg text-white font-semibold shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                            Get Started Now
                            <i data-lucide="arrow-right" className="w-4 h-4"></i>
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300">
                            View Pricing
                        </button>
                    </div>
                </div>

                {/* Video Column */}
                <div className="flex flex-col gap-6">
                    <div className="relative w-full aspect-video lg:aspect-[4/3] max-h-[600px] flex items-center justify-center">
                        {/* Decorative Elements behind video */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-20 transform rotate-3 scale-95"></div>
                        
                        {/* Video Container */}
                        <div className="relative w-full h-full gradient-border bg-gray-900/80 backdrop-blur-md rounded-2xl glow-effect overflow-hidden shadow-2xl flex flex-col group">
                            
                            {/* Fake Browser Header */}
                            <div className="h-8 bg-black/50 border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>

                            {/* Video Placeholder Area */}
                            <div className="flex-1 relative flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors cursor-pointer">
                                {/* Play Button */}
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 transition-transform duration-300 z-20">
                                    <i data-lucide="play" className="w-8 h-8 text-white fill-white ml-1"></i>
                                </div>
                                
                                {/* Placeholder Text */}
                                <div className="absolute bottom-8 text-center w-full z-20">
                                    <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Watch Demo</p>
                                    <p className="text-xs text-gray-600 mt-1">1:45 min • 4K Quality</p>
                                </div>

                                {/* Abstract Grid inside video placeholder */}
                                <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                                
                                <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" alt="AI Dashboard" />
                            </div>
                        </div>

                        {/* Floating Badge on Video */}
                        <div className="absolute -bottom-6 -left-6 bg-gray-900 border border-gray-800 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="bg-green-500/20 p-2 rounded-lg">
                                <i data-lucide="phone-incoming" className="text-green-400 w-5 h-5"></i>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Calls Handled</p>
                                <p className="text-lg font-bold text-white">24/7</p>
                            </div>
                        </div>
                    </div>

                    {/* Impact Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full z-10 pt-4">
                        {/* Stat 1 */}
                        <div className="flex flex-col items-center justify-center text-center group">
                            <div className="p-2 mb-2 group-hover:scale-110 transition-transform">
                                <i data-lucide="phone" className="w-6 h-6 text-blue-400"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white">100+</h3>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1 font-medium">Calls Handled</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-center justify-center text-center group">
                            <div className="p-2 mb-2 group-hover:scale-110 transition-transform">
                                <i data-lucide="trending-up" className="w-6 h-6 text-green-400"></i>
                            </div>
                            <h3 className="text-xl font-bold text-green-400">70%</h3>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1 font-medium">Boost in Business</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center justify-center text-center group">
                            <div className="p-2 mb-2 group-hover:scale-110 transition-transform">
                                <i data-lucide="clock" className="w-6 h-6 text-purple-400"></i>
                            </div>
                            <h3 className="text-xl font-bold text-purple-400">80%</h3>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1 font-medium">Reduce Workload</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>
    </>
  )
}