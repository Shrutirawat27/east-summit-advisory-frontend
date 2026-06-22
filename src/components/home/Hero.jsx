import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="w-full font-sans relative overflow-hidden bg-[#0f2c4a]">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1e5faf] rounded-full mix-blend-overlay filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400 rounded-full mix-blend-overlay filter blur-[100px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-12 pb-20 md:pt-20 md:pb-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* TEXT CONTENT */}
          <div className="w-full md:w-1/2 max-w-2xl flex flex-col justify-center text-left">
            
            <div className="inline-block mb-4 md:mb-6">
              <span className="py-2 px-4 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-200 text-xs font-bold tracking-widest uppercase">
                Solo Practitioner CPA
              </span>
            </div>

            <div className="flex flex-row items-start justify-between gap-4 md:block">
              <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight flex-1">
                Expert <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]">
                  Financial Focus.
                </span>
              </h1>

              <div className="md:hidden w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden border border-gray-600 shadow-lg mt-2">
                 <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400" 
                  alt="Accountant" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <p className="text-blue-100 text-lg lg:text-xl mb-10 leading-relaxed font-medium opacity-90 max-w-xl">
              I provide the personal attention and rigorous financial precision you need to secure your future. No layers of management—just direct, expert advice.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-start">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#1e5faf] hover:bg-[#3b82f6] text-white px-8 py-4 rounded-lg font-bold text-base shadow-[0_4px_14px_0_rgba(30,95,175,0.39)] transition-all transform hover:-translate-y-1">
                  Schedule Consultation
                </button>
              </Link>
              
              <Link to="/services" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-lg font-bold text-base transition-all">
                  View Services
                </button>
              </Link>
            </div>

            {/* Trust Signal */}
            {/* <div className="mt-10 flex items-center justify-start gap-3 text-sm text-gray-400">
              <div className="flex -space-x-2">
                 <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-[#0f2c4a]"></div>
                 <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-[#0f2c4a]"></div>
                 <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-[#0f2c4a]"></div>
              </div>
              <p>Trusted by <span className="text-white font-bold">500+</span> businesses</p>
            </div> */}

          </div>

          <div className="hidden md:flex md:w-1/2 w-full justify-center md:justify-end relative mt-0">
            <div className="relative w-full max-w-[420px]">
              
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000" 
                  alt="Accountant Working" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c4a]/80 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden lg:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
                    ✓
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Experience</p>
                    <p className="text-[#0f2c4a] font-bold text-lg">15+ Years</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 z-20 bg-[#1e5faf] p-5 rounded-xl shadow-2xl border border-blue-400 hidden lg:block">
                <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Focus</p>
                <p className="text-white font-bold text-lg">Tax & Wealth Strategy</p>
              </div>

              <div className="absolute -z-0 top-10 -left-10 w-24 h-24 text-gray-700 opacity-30">
                 <svg width="100" height="100" fill="currentColor" viewBox="0 0 100 100">
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                       <circle cx="2" cy="2" r="2"></circle>
                    </pattern>
                    <rect width="100" height="100" fill="url(#dots)"></rect>
                 </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;