import React, { useState } from 'react';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    const pricingData = [
        {
            name: "Free",
            pricing: 0,
            features: ['Static sites only', '1 website', '500 MB SSD storage', 'Free SSL Certificate', 'Community support', 'No custom domain']
        },
        {
            name: "Pro plan",
            pricing: 19,
            mostPopular: true,
            features: ['Static & dynamic sites', 'Unlimited websites', '10 GB SSD storage', 'Free SSL Certificate', 'Free custom domain', 'Email support', 'Basic analytics']
        },
        {
            name: "Enterprise",
            pricing: 49,
            features: ['Static & dynamic sites', 'Unlimited websites', 'Unlimited SSD storage', 'Free SSL Certificate', 'Free custom domain', 'Priority 24/7 support']
        }
    ];

    return (
        <>
            <style>
                {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
                    *{
                    font-family: "Poppins", sans-serif;
                }
                    .bg-grid {
                        background-size: 50px 50px;
                        background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
                        background-position: center top;
                    }`}
            </style>

            <div className="flex flex-col items-center py-16 px-4 relative overflow-hidden bg-grid" style={{ backgroundColor: '#050505' }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <h1 className="text-3xl md:text-4xl text-center mb-3 text-white relative z-10">Launch free today. Scale anytime.</h1>
                <p className="text-neutral-400 text-center mb-8 text-sm relative z-10">No credit card required. Upgrade only when<br className="hidden md:block" /> you need more.</p>

                <div className="relative z-10 p-1 bg-white border border-gray-200 rounded-full inline-flex items-center mb-16 w-60">
                    <div className={`absolute -z-10 w-[calc(50%-4px)] h-[53px] rounded-full bg-gradient-to-r from-[#FF5804] to-[#FF8D28]/70 transition-transform duration-300 ease-in-out pointer-events-none
                        ${isYearly ? 'translate-x-full' : 'translate-x-0'}`}
                    ></div>

                    <button
                        onClick={() => setIsYearly(false)}
                        className={`relative bg-white z-10 flex-1 py-2.5 cursor-pointer rounded-full text-sm font-medium text-center transition-colors duration-300
                        ${!isYearly ? 'text-[#FF5804]' : 'text-gray-500 hover:text-gray-900'}`}>
                        Monthly
                    </button>

                    <button
                        onClick={() => setIsYearly(true)}
                        className={`relative z-10 flex-1 py-2.5 cursor-pointer rounded-full text-sm font-medium text-center flex items-center justify-center gap-1 transition-colors duration-300
                        ${isYearly ? 'text-[#FF5804]' : 'text-gray-500 hover:text-gray-900'}`}>
                        Yearly
                        <span className='text-xs'>15% off</span>
                    </button>

                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full items-end relative z-10">

                    {pricingData.map((plan, index) => (
                        <div key={index} className={plan.mostPopular ? 'bg-gradient-to-r from-[#FF861C] to-[#FFDBC4] rounded-3xl p-2 shadow-xl hover:shadow-lg transition-shadow' : ''}>
                            {plan.mostPopular && <p className='text-center text-orange-700 text-sm py-1.5'>Popular</p>}
                            <div className={`rounded-3xl p-6 bg-white ${!plan.mostPopular ? 'border border-neutral-200 hover:shadow-lg transition-shadow' : ''}`}>
                                <h3 className="text-neutral-700 text-sm mb-6">
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-[28px] text-neutral-900">
                                        {isYearly ? `$${plan.pricing - Math.round(plan.pricing * 0.15)}` : `$${plan.pricing}`}
                                    </span>
                                    <span className="text-neutral-600 text-xs">/ month</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-neutral-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full cursor-pointer py-3 rounded-full bg-gradient-to-r from-[#FF5804] to-[#FF8D28]/70 text-white text-sm hover:opacity-95 transition-opacity">
                                    Get started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Pricing;