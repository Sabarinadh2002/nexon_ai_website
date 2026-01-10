import React, { useState } from 'react';
import GDPRImage from '../../image/GDPR.png';
import SSLTLSImage from '../../image/SSL_TLS.png';
import End2EndImage from '../../image/End2End.png';

const WobbleCard = ({ children, containerClassName }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
        boxShadow: "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
      }}
      className={`mx-auto w-full relative rounded-2xl overflow-hidden ${containerClassName}`}
    >
      <div className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:rounded-2xl overflow-hidden">
        <div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.1s ease-out",
          }}
          className="h-full px-4 py-20 sm:px-10 relative"
        >
          <div className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]" />
          {children}
        </div>
      </div>
    </div>
  );
};

const Section10 = () => {
  const features = [
    {
      id: 0,
      title: "GDPR compliance",
      description: "Our platform is built around UK/EU GDPR principles, with strict data‑minimisation, access controls, and clear retention policies so clinics, salons, and agencies can safely trust us with customer conversations and booking data.",
      image: GDPRImage,
      containerClassName: "col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] bg-gradient-to-br from-green-900 to-slate-900"
    },
    {
      id: 1,
      title: "TLS/SSL secure connections",
      description: "All communication between your browser, our dashboard, and our APIs is protected with modern TLS/SSL, preventing eavesdropping and man‑in‑the‑middle attacks when you or your team manage bookings, call logs, or customer records.",
      image: SSLTLSImage,
      containerClassName: "col-span-1 min-h-[300px] bg-gradient-to-br from-blue-900 to-slate-900"
    },
    {
      id: 2,
      title: "End‑to‑end encrypted conversations",
      description: "Call audio, transcripts, and CRM events are encrypted in transit and at rest, so attackers cannot read or tamper with your customers' information, even if they intercept network traffic or gain access to raw storage.",
      image: End2EndImage,
      containerClassName: "col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-gradient-to-br from-purple-900 to-slate-900"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-8 py-20" style={{ color: '#ffffff' }}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {features.map((feature) => (
          <WobbleCard
            key={feature.id}
            containerClassName={feature.containerClassName}
          >
            <div className="max-w-xs relative z-10">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                {feature.title}
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                {feature.description}
              </p>
            </div>
            <img
              src={feature.image}
              width={500}
              height={500}
              alt={feature.title}
              className={`absolute ${feature.id === 0 ? '-right-4 lg:-right-[40%]' : feature.id === 1 ? '-right-10' : '-right-10 md:-right-[40%] lg:-right-[20%]'} -bottom-10 object-cover rounded-2xl filter grayscale`}
            />
          </WobbleCard>
        ))}
      </div>
    </div>
  );
};

export default Section10;