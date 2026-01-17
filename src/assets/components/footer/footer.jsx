import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../image/logo1.svg';
import logo2 from '../../image/logo2.svg';

export default function Footer() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }

                .bg-grid-footer {
                    background-size: 50px 50px;
                    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
                    background-position: center center !important;
                }

                .footer-spotlight {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) !important;
                    width: 1000px;
                    height: 1000px;
                    background-color: rgba(147, 51, 234, 0.1);
                    border-radius: 9999px;
                    filter: blur(120px);
                    pointer-events: none;
                    transition: background-color 0.7s;
                }
            `}</style>
            
            <footer className="relative w-full py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-grid-footer overflow-hidden border-t border-white/10" style={{ backgroundColor: '#050505' }}>
                {/* Dynamic Background Glow */}
                <div className="footer-spotlight"></div>

                <div className="relative z-10 flex flex-wrap justify-center lg:justify-between gap-10 md:gap-20">
                    <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
                        <Link to="/">
                            <img src={logo2} alt="Nexon-AI" className="h-12 w-auto" />
                        </Link>
                        <div>
                            <p className="text-slate-100 font-semibold">Product</p>
                            <ul className="mt-2 space-y-2">
                                <li><Link to="/" className="hover:text-indigo-600 transition">Home</Link></li>
                                <li><Link to="/" className="hover:text-indigo-600 transition">Support</Link></li>
                                <li><Link to="/" className="hover:text-indigo-600 transition">Pricing</Link></li>
                                <li><Link to="/" className="hover:text-indigo-600 transition">Affiliate</Link></li>
                            </ul>
                        </div>
                        {/* <div>
                            <p className="text-slate-100 font-semibold">Resources</p>
                            <ul className="mt-2 space-y-2">
                                <li><Link to="/" className="hover:text-indigo-600 transition">Company</Link></li>
                                <li><Link to="/" className="hover:text-indigo-600 transition">Blogs</Link></li>
                                <li><Link to="/" className="hover:text-indigo-600 transition">Community</Link></li>
                                <li><Link to="/" className="hover:text-indigo-600 transition">Careers<span className="text-xs text-white bg-indigo-600 rounded-md ml-2 px-2 py-1">We’re hiring!</span></Link></li>
                                <li><Link to="/" className="hover:text-indigo-600 transition">About</Link></li>
                            </ul>
                        </div> */}
                        <div>
                            <p className="text-slate-100 font-semibold">Legal</p>
                            <ul className="mt-2 space-y-2">
                                <li><Link to="/legal-notice" className="hover:text-indigo-600 transition" onClick={() => window.scrollTo(0, 0)}>Privacy</Link></li>
                                <li><Link to="/terms-of-service" className="hover:text-indigo-600 transition" onClick={() => window.scrollTo(0, 0)}>Terms</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
                        <p className="max-w-60">Making every customer feel valued—no matter the size of your audience.</p>
                        <div className="flex items-center gap-4 mt-3">
                            <a href="https://dribbble.com/prebuiltui" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dribbble size-5 hover:text-indigo-500" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                                    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                                    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/prebuiltui" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin size-5 hover:text-indigo-500" aria-hidden="true">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect width="4" height="12" x="2" y="9"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a href="https://x.com/prebuiltui" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter size-5 hover:text-indigo-500" aria-hidden="true">
                                    <path
                                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                                    </path>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/@prebuiltui" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube size-6 hover:text-indigo-500" aria-hidden="true">
                                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17">
                                    </path>
                                    <path d="m10 15 5-3-5-3z"></path>
                                </svg>
                            </a>
                        </div>
                        <p className="mt-3 text-center">© 2026 <a href="https://prebuiltui.com">Nexon-AI</a></p>
                    </div>
                </div>
            </footer>
        </>
    );
};