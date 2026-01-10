import React, { useState } from 'react';
import { LayoutGrid, Sliders, Monitor } from 'lucide-react';
import GDPRImage from '../../image/GDPR.png';
import SSLTLSImage from '../../image/SSL_TLS.png';
import End2EndImage from '../../image/End2End.png';

const Section10 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 0,
      title: "GDPR compliance",
      description: "Our platform is built around UK/EU GDPR principles, with strict data‑minimisation, access controls, and clear retention policies so clinics, salons, and agencies can safely trust us with customer conversations and booking data.",
      icon: LayoutGrid,
      image: GDPRImage,
    },
    {
      id: 1,
      title: "End‑to‑end encrypted conversations",
      description: "Call audio, transcripts, and CRM events are encrypted in transit and at rest, so attackers cannot read or tamper with your customers’ information, even if they intercept network traffic or gain access to raw storage.",
      icon: Sliders,      image: End2EndImage,    },
    {
      id: 2,
      title: "TLS/SSL secure connections",
      description: "All communication between your browser, our dashboard, and our APIs is protected with modern TLS/SSL, preventing eavesdropping and man‑in‑the‑middle attacks when you or your team manage bookings, call logs, or customer records.",
      icon: Monitor,
      image: SSLTLSImage,
    }
  ];

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 sm:p-8 font-sans transition-all duration-500" 
      style={{ 
        background: activeTab === 0 
          ? 'radial-gradient(circle at center, rgba(34, 197, 94, 0.15) 0%, #050505 70%)' 
          : activeTab === 1 
            ? 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, #050505 70%)' 
            : '#050505',
        color: '#ffffff' 
      }}
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Interactive Navigation */}
        <div className="space-y-4">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Design without limits.</h2>
            <p className="text-lg text-slate-400">Everything you need to create stunning websites in record time.</p>
          </div>

          <div className="space-y-2">
            {features.map((feature, index) => {
              const isActive = activeTab === index;
              const Icon = feature.icon;
              
              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveTab(index)}
                  className={`
                    group relative rounded-2xl p-6 cursor-pointer transition-all duration-300 ease-in-out
                    ${isActive ? 'bg-purple-500/10 border border-purple-500/30' : 'hover:bg-slate-800/50 border border-transparent'}
                  `}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Icon Box */}
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300
                      ${isActive 
                        ? 'bg-purple-500 text-white scale-100' 
                        : 'bg-slate-700 text-slate-400 group-hover:scale-105'
                      }
                    `}>
                      <Icon size={24} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`
                        text-xl font-bold mb-2 transition-colors duration-300
                        ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}
                      `}>
                        {feature.title}
                      </h3>
                      
                      {/* Accordion Effect for Description */}
                      <div 
                        className={`
                          grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                          ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
                        `}
                      >
                        <div className="overflow-hidden">
                          <p className={`
                            text-slate-400 leading-relaxed text-sm sm:text-base pt-1 transition-opacity duration-500
                            ${isActive ? 'opacity-100' : 'opacity-0'}
                          `}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Image Display */}
        <div className="relative h-[400px] sm:h-[500px] bg-slate-900/30 rounded-3xl p-4 sm:p-8 flex items-center justify-center overflow-hidden">
          {/* Image Container */}
          <div className="relative w-[90%] h-[90%] rounded-2xl overflow-hidden">
            {features.map((feature, index) => (
              <img
                key={feature.id}
                src={feature.image}
                alt={feature.title}
                className={`
                  absolute inset-0 w-full h-full object-cover rounded-2xl
                  transition-all duration-700 ease-in-out
                  ${activeTab === index ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'}
                `}
                style={{ zIndex: activeTab === index ? 10 : 0 }}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section10;