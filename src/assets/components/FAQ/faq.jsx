import React from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        {
            question: "How quickly can I set up the AI receptionist?",
            answer: "Setup takes 5-15 minutes—connect a phone number, upload your business details, and go live instantly with no technical skills required.",
        },
        {
            question: "Does it really work 24/7 including weekends and holidays?",
            answer: "Yes, your AI receptionist answers every call around the clock, capturing bookings even when you're closed, sleeping, or on holiday.",
        },
        {
            question: "Can it handle my industry-specific booking needs?",
            answer: "Absolutely—pre-built templates for dental clinics, beauty salons, restaurants, property agents, and trades make setup simple and accurate.",
        },
        {
            question: "What happens if the AI can't answer a complex question?",
            answer: "The AI intelligently routes urgent calls to staff, offers callback scheduling, or captures full details so you follow up efficiently.",
        },
        {
            question: "Is my customer data secure and GDPR compliant?",
            answer: "Yes—end-to-end encryption, UK GDPR compliance, role-based access, and audit logs protect sensitive conversations and booking data.",
        },
        {
            question: "How much does it actually cost compared to a receptionist?",
            answer: "From £300/month vs £1,800-£2,800 for a human receptionist—save 80%+ while getting 24/7 service and unlimited concurrent calls.",
        },
        {
            question: "Can I try it before committing long-term?",
            answer: "Our 4-8 week pilot program lets you test with real customers at a discounted rate, proving ROI before full subscription.",
        },
        {
            question: "What if I have multiple locations or need custom features?",
            answer: "Tier 2/Enterprise plans support multi-location management, custom workflows, single-tenant security, and dedicated onboarding.",
        },
    ];
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }

                .bg-grid {
                    background-size: 50px 50px;
                    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
                    background-attachment: fixed;
                }
            `}</style>
            <section className="w-full py-20 relative overflow-hidden bg-grid" style={{ backgroundColor: '#050505', color: '#ffffff' }}>
                {/* Dynamic Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none transition-colors duration-700"></div>
                
                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center px-4 md:px-0">
                    <p className="text-indigo-400 text-sm font-medium">FAQ's</p>
                    <h1 className="text-3xl font-semibold text-center text-white">Looking for answer?</h1>
                    <p className="text-sm text-slate-400 mt-2 pb-8 text-center">
                        Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI Components.
                    </p>
                    {faqs.map((faq, index) => (
                        <div className="border-b border-slate-800 py-4 cursor-pointer w-full" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-medium text-slate-100">
                                    {faq.question}
                                </h3>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className={`text-sm text-slate-400 transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};