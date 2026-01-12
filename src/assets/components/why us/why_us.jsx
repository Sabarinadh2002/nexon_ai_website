import React from 'react';
import {
  LayoutDashboard,
  Shield,
  TrendingUp,
  PhoneCall,
  Link,
  Clock,
  Infinity,
  PiggyBank,
} from 'lucide-react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Section11() {
  const styles = `
    .gradient-text {
      background: linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .bg-grid {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      background-position: center top;
    }
  `

  const features = [
    {
      title: "Centralised booking & analytics dashboard",
      description:
        "Manage all your calls, appointments, and performance insights in one place, giving you real-time control over demand.",
      icon: <LayoutDashboard className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Protect your customers’ data",
      description:
        "All calls, bookings, and customer details are encrypted, access‑controlled, and fully logged so your business stays private, compliant, and secure.",
      icon: <Shield className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Unlimited concurrent calls",
      description:
        "Handles hundreds of calls simultaneously with zero queue times—every customer speaks to the AI instantly.",
      icon: <Infinity className="w-6 h-6 text-purple-500" />,
    },
    
    {
      title: "Auto Callback ",
      description: "If the AI can’t fully resolve an issue, it offers a guaranteed callback to keep the experience smooth without leaving customers on hold.",
      icon: <PhoneCall className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Seamless integrations",
      description: "Connects instantly with CRM, payments, calendars, WhatsApp, SMS, so bookings automatically flow to your existing tools without manual data entry.",
      icon: <Link className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "24/7 always-on service",
      description:
        "Your AI receptionist works around the clock, capturing bookings and enquiries even when you're closed, on holiday, or sleeping.",
      icon: <Clock className="w-6 h-6 text-cyan-500" />,
    },
    {
      title: "Business scalability & growth",
      description:
        "Grows across locations while staying on-brand and reducing owner dependency.",
      icon: <TrendingUp className="w-6 h-6 text-pink-500" />,
    },
    {
      title: "Cost savings",
      description: "Replaces multiple receptionists and call services with one AI, cutting salary, overtime, training, and data entry costs.",
      icon: <PiggyBank className="w-6 h-6 text-emerald-500" />,
    },
  ];
  return (
    <>
      <style>{styles}</style>
      <section className="w-full py-20 font-sans relative overflow-hidden bg-grid" style={{ backgroundColor: '#050505', color: '#ffffff' }}>
        {/* Dynamic Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none transition-colors duration-700"></div>
        
        <div className="relative z-10">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center mb-16 text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              Why  <span className="gradient-text">Us?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div className={cn("flex flex-col lg:border-r py-10 relative group/feature border-neutral-800", (index === 0 || index === 4) && "lg:border-l border-neutral-800", index < 4 && "lg:border-b border-neutral-800")}>
      {index < 4 && <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />}
      {index >= 4 && <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};