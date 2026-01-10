import React from 'react';

export default function Example() {
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
                
                <div className="relative z-10 max-md:px-4 max-w-7xl mx-auto">
                    <p className="bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text text-3xl text-left max-w-2xl font-bold">Trusted by world’s leading companies.</p>
                    <div className="flex flex-col-reverse md:flex-row items-center justify-center max-h-[450px] gap-6 mt-6">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-7.svg" alt="features showcase" className="hover:-translate-y-1 transition-all duration-300 " />
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-8.svg" alt="features showcase" className="hover:-translate-y-1 transition-all duration-300 max-md:w-full" />
                    </div>
                </div>
            </section>
        </>
    );
};