import React, { useState, useEffect, useRef } from 'react'

const demoData = {
  dental: {
    title: "Dental Clinic Assistant",
    glowColor: "bg-cyan-600/20",
    messages: [
      { sender: "bot", text: "Hello! Welcome to BrightSmile Dental. How can I help you today?" },
      { sender: "user", text: "Hi, how much is teeth whitening?" },
      { sender: "bot", text: "Our professional in-office whitening starts at $199. We also offer take-home kits for $99. Would you like to book a consultation?" }
    ]
  },
  plumber: {
    title: "Emergency Plumbing Bot",
    glowColor: "bg-blue-600/20",
    messages: [
      { sender: "bot", text: "Hi! You've reached Mike's Plumbing. Do you have an emergency?" },
      { sender: "user", text: "Yes! My kitchen sink is leaking badly." },
      { sender: "bot", text: "I'm sorry to hear that. I can have a technician there within 45 minutes. The dispatch fee is $49. Shall I send someone over?" }
    ]
  },
  realestate: {
    title: "Luxury Estate Agent",
    glowColor: "bg-yellow-600/20",
    messages: [
      { sender: "bot", text: "Good day. Interested in buying or selling a property?" },
      { sender: "user", text: "I'd like to view the downtown penthouse." },
      { sender: "bot", text: "Excellent choice. It features 3 bedrooms and a panoramic city view. I have openings this Tuesday at 10 AM or 2 PM. Which works for you?" }
    ]
  },
  roofer: {
    title: "Roofing Specialist",
    glowColor: "bg-orange-600/20",
    messages: [
      { sender: "bot", text: "Thanks for calling Apex Roofing. How can we assist you?" },
      { sender: "user", text: "I need a quote for a roof replacement." },
      { sender: "bot", text: "We can help with that. I can schedule a free inspection for tomorrow morning to give you an accurate estimate. Does 9 AM work?" }
    ]
  }
};

export default function Section3() {
  const [activeIndustry, setActiveIndustry] = useState('dental');
  const [messages, setMessages] = useState([]);
  const chatBodyRef = useRef(null);

  // Script loading effect (Tailwind/Lucide)
  useEffect(() => {
    if (!document.querySelector('script[src="https://cdn.tailwindcss.com"]')) {
      const script = document.createElement('script');
      script.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(script);
    }

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

  // Re-run Lucide icons when content changes
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  // Chat simulation effect
  useEffect(() => {
    setMessages([]); // Clear messages
    const data = demoData[activeIndustry];
    const timeouts = [];

    data.messages.forEach((msg, index) => {
      const t = setTimeout(() => {
        setMessages(prev => [...prev, msg]);
      }, index * 800);
      timeouts.push(t);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [activeIndustry]);

  // Auto-scroll chat
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

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
        .bg-grid {
            background-size: 50px 50px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-attachment: fixed;
        }

        /* Chat Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .chat-msg {
            animation: fadeIn 0.3s ease-out forwards;
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

        /* Scrollbar styling for chat */
        #chat-body::-webkit-scrollbar {
            width: 6px;
        }
        #chat-body::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.1);
        }
        #chat-body::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.1);
            border-radius: 3px;
        }
      `}</style>

      <div className="min-h-screen bg-grid flex items-center justify-center bg-[#050505] text-white font-sans">
        {/* SECTION 3: TRY DEMO */}
        <section id="demo-section" className="py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden transition-colors duration-700 w-full">
            
            {/* Dynamic Ambient Background */}
            <div 
              id="ambient-glow" 
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none transition-colors duration-700 ${currentData.glowColor}`}
            ></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Experience the <span className="gradient-text">Difference</span></h2>
                    <p className="text-gray-400">Select an industry to see how Nexon-AI handles real-world scenarios.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    
                    {/* Left Side: Industry Selectors (4 Cols) */}
                    <div className="lg:col-span-5 space-y-4">
                        
                        {/* Dental Clinic */}
                        <div 
                          className={`industry-box cursor-pointer bg-gray-900/40 border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-all duration-300 ${activeIndustry === 'dental' ? 'active' : ''}`}
                          onClick={() => setActiveIndustry('dental')}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <i data-lucide="smile" className="w-6 h-6"></i>
                                </div>
                                <h3 className="font-bold text-lg">Dental Clinic</h3>
                            </div>
                            {/* Expandable Content */}
                            <div className="industry-details">
                                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Try asking:</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded border border-cyan-500/20">Book Appointment</span>
                                    <span className="text-xs bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded border border-cyan-500/20">Whitening Prices</span>
                                    <span className="text-xs bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded border border-cyan-500/20">Insurance Info</span>
                                </div>
                            </div>
                        </div>

                        {/* Plumber */}
                        <div 
                          className={`industry-box cursor-pointer bg-gray-900/40 border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-all duration-300 ${activeIndustry === 'plumber' ? 'active' : ''}`}
                          onClick={() => setActiveIndustry('plumber')}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400">
                                    <i data-lucide="wrench" className="w-6 h-6"></i>
                                </div>
                                <h3 className="font-bold text-lg">Plumbing Services</h3>
                            </div>
                            <div className="industry-details">
                                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Try asking:</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded border border-blue-500/20">Leaky Faucet</span>
                                    <span className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded border border-blue-500/20">Emergency Repair</span>
                                    <span className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded border border-blue-500/20">Get Quote</span>
                                </div>
                            </div>
                        </div>

                        {/* Real Estate */}
                        <div 
                          className={`industry-box cursor-pointer bg-gray-900/40 border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-all duration-300 ${activeIndustry === 'realestate' ? 'active' : ''}`}
                          onClick={() => setActiveIndustry('realestate')}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                                    <i data-lucide="home" className="w-6 h-6"></i>
                                </div>
                                <h3 className="font-bold text-lg">Real Estate</h3>
                            </div>
                            <div className="industry-details">
                                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Try asking:</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs bg-yellow-500/10 text-yellow-300 px-2 py-1 rounded border border-yellow-500/20">Schedule Viewing</span>
                                    <span className="text-xs bg-yellow-500/10 text-yellow-300 px-2 py-1 rounded border border-yellow-500/20">Property Details</span>
                                    <span className="text-xs bg-yellow-500/10 text-yellow-300 px-2 py-1 rounded border border-yellow-500/20">List My Home</span>
                                </div>
                            </div>
                        </div>

                        {/* Roofer */}
                        <div 
                          className={`industry-box cursor-pointer bg-gray-900/40 border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-all duration-300 ${activeIndustry === 'roofer' ? 'active' : ''}`}
                          onClick={() => setActiveIndustry('roofer')}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
                                    <i data-lucide="hammer" className="w-6 h-6"></i>
                                </div>
                                <h3 className="font-bold text-lg">Roofing Contractor</h3>
                            </div>
                            <div className="industry-details">
                                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Try asking:</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs bg-orange-500/10 text-orange-300 px-2 py-1 rounded border border-orange-500/20">Roof Inspection</span>
                                    <span className="text-xs bg-orange-500/10 text-orange-300 px-2 py-1 rounded border border-orange-500/20">Leak Repair</span>
                                    <span className="text-xs bg-orange-500/10 text-orange-300 px-2 py-1 rounded border border-orange-500/20">Shingle Options</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Side: Chat Simulator (8 Cols) */}
                    <div className="lg:col-span-7">
                        <div className="w-full h-full bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col min-h-[500px]">
                            
                            {/* Chat Header */}
                            <div className="p-4 border-b border-gray-800 bg-gray-900 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
                                            <i data-lucide="bot" className="text-white w-5 h-5"></i>
                                        </div>
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-white" id="chat-title">{currentData.title}</h4>
                                        <p className="text-xs text-green-400">Online • Instantly responding</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                                </div>
                            </div>

                            {/* Chat Body */}
                            <div className="flex-1 p-6 space-y-4 overflow-y-auto" id="chat-body" ref={chatBodyRef}>
                                {messages.map((msg, idx) => (
                                  <div key={idx} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} chat-msg`}>
                                    <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                                        msg.sender === 'user' 
                                        ? 'bg-blue-600 text-white rounded-br-none' 
                                        : 'bg-gray-800 text-gray-200 rounded-bl-none border border-gray-700'
                                    }`}>
                                      {msg.text}
                                    </div>
                                  </div>
                                ))}
                            </div>

                            {/* Chat Input (Visual Only) */}
                            <div className="p-4 border-t border-gray-800 bg-gray-900/50">
                                <div className="flex gap-2">
                                    <input type="text" placeholder="Type a message..." disabled className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-300 focus:outline-none cursor-not-allowed opacity-70" />
                                    <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white opacity-70 cursor-not-allowed">
                                        <i data-lucide="send" className="w-4 h-4"></i>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
      </div>
    </>
  )
}