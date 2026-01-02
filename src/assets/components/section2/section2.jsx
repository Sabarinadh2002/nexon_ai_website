import React, { useEffect } from 'react'

export default function Section2() {
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

        /* Card Hover Glow & Transitions */
        .step-card {
            transition: all 0.3s ease-in-out;
        }
        
        .step-card:hover {
            box-shadow: 0 0 30px -5px rgba(56, 189, 248, 0.15);
            border-color: rgba(56, 189, 248, 0.3);
            transform: translateY(-5px);
        }
      `}</style>

      <div className="min-h-screen bg-grid flex items-center justify-center bg-[#050505] text-white font-sans">
        {/* SECTION 2: HOW IT WORKS */}
        <section className="py-24 px-4 sm:px-8 lg:px-16 relative w-full">
             <div className="container mx-auto">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Set Up your <span className="gradient-text">AI Assistant</span> in 5 min
                    </h2>
                    <p className="text-gray-400">Simple, fast, and no technical skills required.</p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Step 1 */}
                    <div className="step-card bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 relative overflow-hidden group">
                        {/* Number Watermark */}
                        <div className="absolute -top-4 -right-4 text-8xl font-bold text-white/5 select-none z-0 group-hover:text-white/10 transition-colors">01</div>
                        
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20">
                                <i data-lucide="smartphone" className="w-7 h-7 text-blue-400"></i>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-4">Choose Your Business Number</h3>
                            
                            {/* Content */}
                            <p className="text-gray-400 leading-relaxed text-sm mb-4">
                                Use your Twilio number or activate a new local number instantly. There is no waiting period or paperwork, and your number becomes active within seconds.
                            </p>
                            
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="step-card bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 relative overflow-hidden group">
                        {/* Number Watermark */}
                        <div className="absolute -top-4 -right-4 text-8xl font-bold text-white/5 select-none z-0 group-hover:text-white/10 transition-colors">02</div>
                        
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 border border-purple-500/20">
                                <i data-lucide="file-text" className="w-7 h-7 text-purple-400"></i>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-4">Configure Business Info</h3>
                            
                            {/* Content */}
                            <p className="text-gray-400 leading-relaxed text-sm mb-4">
                                Upload key details such as FAQs, hours of operation, pricing, team members, and service information. You may also include menus or documents.
                                The AI receptionist learns these details immediately, ensuring callers receive accurate answers without manual training.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="step-card bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 relative overflow-hidden group">
                        {/* Number Watermark */}
                        <div className="absolute -top-4 -right-4 text-8xl font-bold text-white/5 select-none z-0 group-hover:text-white/10 transition-colors">03</div>
                        
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 border border-green-500/20">
                                <i data-lucide="phone-call" className="w-7 h-7 text-green-400"></i>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-4">Begin Receiving Calls</h3>
                            
                            {/* Content */}
                            <p className="text-gray-400 leading-relaxed text-sm mb-4">
                                Your assistant is live as soon as setup is complete. Test call flows, enable call transfers, or allow the AI to manage conversations independently. Every call is answered consistently, providing a smooth, reliable customer experience.
                            </p>
                            
                        </div>
                    </div>

                </div>
             </div>
        </section>
      </div>
    </>
  )
}