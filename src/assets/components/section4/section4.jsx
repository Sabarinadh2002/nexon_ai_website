import React, { useState, useEffect } from 'react';
import { Store, Building2, Building, Calendar, Users, TrendingUp, Shield, Globe, Zap, CreditCard, BarChart3 } from 'lucide-react';

const data = {
    small: {
      id: 'small',
      title: 'Small Scale Business',
      description: 'Perfect for Salons, Clinics, Boutique Retail, and Solo Practitioners.',
      keywords: ['Salon', 'Clinic', 'Boutique'],
      icon: <Store size={48} className="text-white" />,
      color: 'bg-emerald-500',
      glow: 'shadow-emerald-500/50',
      borderColor: 'border-emerald-500/50',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      benefits: [
        { title: 'Easy Scheduling', icon: <Calendar size={20} />, text: 'Manage appointments effortlessly.' },
        { title: 'Quick Billing', icon: <CreditCard size={20} />, text: 'Streamlined POS & invoicing.' },
        { title: 'Client CRM', icon: <Users size={20} />, text: 'Build loyal customer relationships.' },
      ]
    },
    medium: {
      id: 'medium',
      title: 'Medium Scale Business',
      description: 'Designed for Regional Chains, Multi-location Stores, and Growing Teams.',
      keywords: ['Franchise', 'Retail Chain'],
      icon: <Building2 size={48} className="text-white" />,
      color: 'bg-blue-600',
      glow: 'shadow-blue-600/50',
      borderColor: 'border-blue-500/50',
      textColor: 'text-blue-400',
      bgColor: 'bg-blue-600/10',
      benefits: [
        { title: 'Multi-Location', icon: <Globe size={20} />, text: 'Centralized control for all branches.' },
        { title: 'Staff Mgmt', icon: <Users size={20} />, text: 'Rosters, payroll, and performance.' },
        { title: 'Marketing', icon: <Zap size={20} />, text: 'Automated campaigns & loyalty.' },
      ]
    },
    enterprise: {
      id: 'enterprise',
      title: 'Enterprise',
      description: 'Robust solutions for Large Corporations, Franchises, and High Volume.',
      keywords: ['MNC', 'Global'],
      icon: <Building size={48} className="text-white" />,
      color: 'bg-purple-600',
      glow: 'shadow-purple-600/50',
      borderColor: 'border-purple-500/50',
      textColor: 'text-purple-400',
      bgColor: 'bg-purple-600/10',
      benefits: [
        { title: 'Advanced Analytics', icon: <BarChart3 size={20} />, text: 'Data-driven decision making.' },
        { title: 'Custom Security', icon: <Shield size={20} />, text: 'Role-based access & SSO.' },
        { title: 'API Integration', icon: <TrendingUp size={20} />, text: 'Seamless connection with ERPs.' },
      ]
    }
  };

const styles = `
    .gradient-text {
      background: linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .bg-grid-scale {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      background-position: center center !important;
    }
    .section4-spotlight {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) !important;
      width: 1000px;
      height: 1000px;
      background-color: rgba(37, 99, 235, 0.1);
      border-radius: 9999px;
      filter: blur(120px);
      pointer-events: none;
      transition: background-color 0.7s;
    }
    @keyframes orbit-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes orbit-counter-spin {
      from { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }
    .orbit-container {
      animation: orbit-spin 30s linear infinite;
    }
    .orbit-counter-rotator {
      animation: orbit-counter-spin 30s linear infinite;
    }
    .fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
    .orbit-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: rotate(var(--angle)) translate(var(--radius)) rotate(calc(var(--angle) * -1));
    }
  `;

const ProductScaleSelector = () => {
  const [activeScale, setActiveScale] = useState('small');
  const [isAnimating, setIsAnimating] = useState(false);

  // Trigger a subtle re-entry animation when tab changes
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeScale]);

  const activeData = data[activeScale];

  return (
    <>
      <style>{styles}</style>
      <section className="w-full py-20 font-sans relative overflow-hidden bg-grid-scale" style={{ backgroundColor: '#050505', color: '#ffffff' }}>
        
        {/* Dynamic Background Glow */}
        <div className="section4-spotlight"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Choose your <span className="gradient-text">scale</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Select your business size to see tailored solutions designed to help you grow.
            </p>
          </div>

          {/* Main Content Container */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* LEFT PANEL: Navigation */}
            <div className="w-full lg:w-1/3 flex flex-col">
              <div className="p-6 space-y-3 overflow-y-auto flex-1">
                {Object.values(data).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveScale(item.id)}
                    className={`text-left w-full p-5 rounded-xl transition-all duration-300 group border relative overflow-hidden
                      ${activeScale === item.id 
                        ? `${item.borderColor} ${item.bgColor} shadow-lg` 
                        : 'bg-transparent border-transparent hover:bg-neutral-800/50 hover:border-neutral-700'
                      }`}
                  >
                    <div className="flex items-center justify-between relative z-10">
                      <div>
                        <h3 className={`font-bold text-lg ${activeScale === item.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                          {item.title}
                        </h3>
                        <p className={`text-xs mt-1 ${activeScale === item.id ? 'text-gray-300' : 'text-gray-500'}`}>
                          Click to explore
                        </p>
                      </div>
                      <div className={`
                        p-2 rounded-full transition-colors duration-300
                        ${activeScale === item.id ? 'bg-white/10' : 'bg-neutral-800 group-hover:bg-neutral-700'}
                      `}>
                        {React.cloneElement(item.icon, { 
                          size: 20, 
                          className: activeScale === item.id ? item.textColor : 'text-gray-500' 
                        })}
                      </div>
                    </div>

                    {/* Expanded Content (Keywords Box) */}
                    {activeScale === item.id && (
                      <div className="mt-4 pt-4 border-t border-white/5 fade-in">
                        <div className="bg-black/40 rounded-lg p-3 border border-white/5">
                          <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-2">Ideal For</p>
                          <div className="flex flex-wrap gap-2">
                            {item.keywords.map((keyword, idx) => (
                              <span key={idx} className="text-xs text-gray-300 bg-white/5 px-2 py-1 rounded border border-white/5">{keyword}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Active Indicator Bar */}
                    {activeScale === item.id && (
                      <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.color}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT PANEL: Visualizer */}
            <div className="w-full lg:w-2/3 relative flex items-center justify-center overflow-hidden h-[600px]">
              
              {/* Background Decorative Circles */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                 <div className="w-75 h-75 md:w-125] md:h-125 rounded-full border border-gray-700" />
                 <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border border-gray-800" />
              </div>

              {/* Main Content Wrapper */}
              <div className={`relative w-full h-full flex items-center justify-center ${isAnimating ? 'fade-in' : ''}`}>
                
                {/* ORBIT SYSTEM */}
                <div className="absolute inset-0 flex items-center justify-center orbit-container pointer-events-none">
                  {activeData.benefits.map((benefit, index) => {
                    const angle = (360 / activeData.benefits.length) * index - 90; // Start from top
                    return (
                      <div 
                        key={index}
                        className="orbit-wrapper"
                        style={{ 
                          '--angle': `${angle}deg`,
                          '--radius': 'clamp(140px, 25vw, 260px)'
                        }}
                      >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="orbit-counter-rotator">
                            <div className="orbit-item w-48 md:w-64 p-4 bg-neutral-900/90 rounded-xl shadow-xl border border-neutral-700 backdrop-blur-md flex items-start gap-3 transform hover:scale-105 transition-transform cursor-pointer pointer-events-auto">
                              <div className={`p-2 rounded-lg ${activeData.bgColor} ${activeData.textColor}`}>
                                {benefit.icon}
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-200 text-sm">{benefit.title}</h4>
                                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{benefit.text}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CENTRAL HUB */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-8">
                  
                  {/* Central Circle Image/Icon */}
                  <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full ${activeData.color} flex items-center justify-center shadow-2xl ${activeData.glow} mb-6 transition-all duration-500`}>
                    {activeData.icon}
                  </div>

                  {/* Central Text */}
                  <div className="max-w-sm">
                    <h2 className="text-2xl font-bold text-white mb-2">{activeData.title}</h2>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {activeData.description}
                    </p>
                  </div>
                </div>

              </div>
              
              {/* Mobile-only note */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-gray-500 text-xs md:hidden px-4">
                Visuals optimized for desktop view
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductScaleSelector;