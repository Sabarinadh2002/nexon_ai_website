import React, { useState, useEffect } from 'react'

export default function Section4() {
  const [currentMode, setCurrentMode] = useState('features')

  const fbData = {
    features: [
      { title: "24/7 Auto-Booking", desc: "Syncs directly with Google Calendar, Calendly, and more.", icon: "calendar" },
      { title: "Smart Call Routing", desc: "Detects urgency and forwards critical calls to staff.", icon: "phone-forwarded" },
      { title: "CRM Integration", desc: "Logs every conversation into HubSpot, Salesforce, or Zoho.", icon: "database" },
      { title: "Multi-Language", desc: "Instantly speaks 50+ languages based on caller origin.", icon: "languages" }
    ],
    benefits: [
      { title: "Reduce Overhead", desc: "Save thousands monthly on hiring reception staff.", icon: "dollar-sign" },
      { title: "Zero Missed Calls", desc: "Capture 100% of leads, even after hours.", icon: "check-circle" },
      { title: "Consistent Quality", desc: "Every customer gets a polite, accurate response.", icon: "star" },
      { title: "Instant Scale", desc: "Handle 1 or 1,000 calls simultaneously without waiting.", icon: "trending-up" }
    ]
  }

  const fbImages = {
    features: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    benefits: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  }

  const toggleFB = () => {
    setCurrentMode(currentMode === 'features' ? 'benefits' : 'features')
  }

  const styles = `
    .gradient-text {
      background: linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .gradient-bg {
      background: linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%);
    }

    .bg-grid {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      background-attachment: fixed;
    }
  `

  return (
    <>
      <style>{styles}</style>
      <section id="features-benefits" className="py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden w-full bg-grid" style={{ backgroundColor: '#050505', color: '#ffffff' }}>
        
        {/* Dynamic Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none transition-colors duration-700"></div>

        <div className="container mx-auto relative z-10">
          
          {/* Header & Toggle */}
          <div className="flex flex-col items-center justify-center mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              Why Choose <span className="gradient-text">Nexon-AI?</span>
            </h2>
            
            {/* Toggle Switch */}
            <div 
              className="bg-gray-900 border border-gray-700 p-1 rounded-full flex relative w-64 h-12 cursor-pointer shadow-lg"
              onClick={toggleFB}
            >
              {/* Sliding Background */}
              <div 
                className="absolute top-1 left-1 w-[calc(50%-4px)] h-[calc(100%-8px)] gradient-bg rounded-full transition-all duration-300 ease-in-out shadow-md"
                style={{
                  transform: currentMode === 'benefits' ? 'translateX(100%)' : 'translateX(0)'
                }}
              ></div>
              
              {/* Buttons */}
              <button 
                className={`flex-1 relative z-10 text-sm font-bold transition-colors duration-300 focus:outline-none ${
                  currentMode === 'features' ? 'text-white' : 'text-gray-400'
                }`}
              >
                Features
              </button>
              <button 
                className={`flex-1 relative z-10 text-sm font-bold transition-colors duration-300 focus:outline-none ${
                  currentMode === 'benefits' ? 'text-white' : 'text-gray-400'
                }`}
              >
                Benefits
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: List */}
            <div className="space-y-4">
              {fbData[currentMode].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group cursor-default">
                  <div className="mt-1 p-2 rounded-lg bg-gray-800 text-blue-400 group-hover:text-white group-hover:bg-blue-500 transition-colors">
                    <i data-lucide={item.icon} className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Image Preview */}
            <div className="relative h-[400px] lg:h-[600px] w-full group">
              {/* Decorative Border/Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-900 rounded-2xl transform rotate-2 scale-105 opacity-50 border border-white/5"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl bg-gray-900">
                <div className="absolute inset-0 bg-gray-900/20 z-10"></div>
                <img 
                  src={fbImages[currentMode]} 
                  alt="Feature Preview" 
                  className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
                  key={currentMode}
                  style={{ opacity: 1 }}
                />
                
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent z-20">
                  <p className="text-white font-bold text-lg">
                    {currentMode === 'features' ? 'Powerful Features' : 'Tangible Benefits'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}