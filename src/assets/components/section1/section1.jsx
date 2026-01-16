import { useState } from 'react';
import { ArrowRight, Play, PhoneIncoming, Phone, TrendingUp, Clock, Menu, X } from 'lucide-react';
import logo2 from '../../image/logo2.svg';

export default function Section1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        /* Custom Gradient for text/buttons */
        .gradient-text {
            background: linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .gradient-bg {
            background: linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%);
        }

        .gradient-border {
            position: relative;
            background: #000;
            background-clip: padding-box;
            border: 1px solid transparent;
            border-radius: 1rem;
        }

        .gradient-border::before {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            z-index: -1;
            margin: -1px;
            border-radius: inherit;
            background: linear-gradient(to right, #7c3aed, #0ea5e9);
        }

        /* Subtle grid background pattern */
        .bg-grid {
            background-size: 50px 50px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-position: center;
        }

        .glow-effect {
            box-shadow: 0 0 50px -10px rgba(124, 58, 237, 0.3);
        }

        /* Hero Specific Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Floating animation for badge */
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Navbar */}
      <nav className="w-full py-4 sm:py-6 px-4 sm:px-8 lg:px-16 flex justify-between items-center fixed top-0 left-0 bg-black/80 backdrop-blur-md z-50 border-b border-white/5">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
            <img src={logo2} alt="Nexon-AI" className="h-8 sm:h-10 w-auto transform group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-lg sm:text-xl font-bold tracking-wide text-white">Nexon-AI</span>
        </div>

        {/* Desktop Nav Actions */}
        <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Features</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Pricing</a>
            <button className="px-5 py-2 rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all text-sm font-medium text-gray-300">
                Log In
            </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
            <div className="absolute top-[100%] left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 px-4 flex flex-col gap-4 md:hidden shadow-2xl animate-in slide-in-from-top-5 fade-in duration-200">
                <a href="#" className="text-gray-300 hover:text-white text-lg font-medium py-2 border-b border-white/5">Features</a>
                <a href="#" className="text-gray-300 hover:text-white text-lg font-medium py-2 border-b border-white/5">Pricing</a>
                <button className="w-full py-3 mt-2 rounded-xl gradient-bg text-white font-semibold shadow-lg">
                    Log In
                </button>
            </div>
        )}
      </nav>

      {/* Main Wrapper */}
      <main>

        {/* SECTION 1: HERO */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 pt-28 pb-16 lg:pt-20 lg:pb-0 relative overflow-hidden bg-grid" style={{ backgroundColor: '#050505', color: '#ffffff' }}>

            {/* Dynamic Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[1000px] h-[600px] sm:h-[1000px] bg-purple-600/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none transition-colors duration-700"></div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">

                {/* Content Column */}
                <div className="space-y-6 sm:space-y-8 text-center lg:text-left">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        <span className="text-blue-300 text-[10px] sm:text-xs font-semibold tracking-wider uppercase">Next Gen Receptionist</span>
                    </div>

                    {/* H1 */}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                        Supercharge your business with the <br className="hidden lg:block" />
                        <span className="gradient-text">white-labeled</span> Nexon-AI Receptionist!
                    </h1>

                    {/* H2 */}
                    <h2 className="text-gray-400 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Book, cancel, and reschedule appointments, handle enquiries and complaints, and reduce missed calls—saving receptionist time and boosting profits by up to <span className="text-white font-semibold">80%</span>.
                    </h2>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4 w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-8 py-4 gradient-bg rounded-lg text-white font-semibold shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                            Get Started Now
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300">
                            View Pricing
                        </button>
                    </div>
                </div>

                {/* Video Column */}
                <div className="flex flex-col gap-6 w-full max-w-xl mx-auto lg:max-w-none">
                    <div className="relative w-full aspect-video lg:aspect-[4/3] max-h-[600px] flex items-center justify-center mb-8 sm:mb-0">
                        {/* Decorative Elements behind video */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-20 transform rotate-3 scale-95"></div>

                        {/* Video Container */}
                        <div className="relative w-full h-full gradient-border bg-gray-900/80 backdrop-blur-md rounded-2xl glow-effect overflow-hidden shadow-2xl flex flex-col group">

                            {/* Fake Browser Header */}
                            <div className="h-6 sm:h-8 bg-black/50 border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/50"></div>
                            </div>

                            {/* Video Placeholder Area */}
                            <div className="flex-1 relative flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors cursor-pointer">
                                {/* Play Button */}
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 transition-transform duration-300 z-20">
                                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white ml-1" />
                                </div>

                                {/* Placeholder Text */}
                                <div className="absolute bottom-6 sm:bottom-8 text-center w-full z-20">
                                    <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-semibold">Watch Demo</p>
                                    <p className="text-[10px] sm:text-xs text-gray-600 mt-1">1:45 min • 4K Quality</p>
                                </div>

                                {/* Abstract Grid inside video placeholder */}
                                <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                                <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" alt="AI Dashboard" />
                            </div>
                        </div>

                        {/* Floating Badge on Video - Centered on Mobile, Offset on Desktop */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-[-24px] sm:translate-x-0 bg-gray-900 border border-gray-800 p-3 sm:p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce w-max z-30" style={{ animationDuration: '3s' }}>
                            <div className="bg-green-500/20 p-2 rounded-lg">
                                <PhoneIncoming className="text-green-400 w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] sm:text-xs text-gray-400">Calls Handled</p>
                                <p className="text-sm sm:text-lg font-bold text-white">24/7</p>
                            </div>
                        </div>
                    </div>

                    {/* Impact Stats Grid - Horizontal on Mobile */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full z-10 pt-10 sm:pt-4">
                        {/* Stat 1 */}
                        <div className="flex flex-col items-center justify-center text-center group bg-white/5 sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none border sm:border-none border-white/5">
                            <div className="p-1.5 sm:p-2 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white">100+</h3>
                            <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mt-0.5 sm:mt-1 font-medium">Calls Handled</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-center justify-center text-center group bg-white/5 sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none border sm:border-none border-white/5">
                            <div className="p-1.5 sm:p-2 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-green-400">70%</h3>
                            <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mt-0.5 sm:mt-1 font-medium">Boost in Business</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center justify-center text-center group bg-white/5 sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none border sm:border-none border-white/5">
                            <div className="p-1.5 sm:p-2 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-purple-400">80%</h3>
                            <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mt-0.5 sm:mt-1 font-medium">Reduce Workload</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>
    </>
  )
}
