import React from 'react';
import { Link } from 'react-router-dom';
import founderImage from '../assets/founder-pic.jpeg';

const About = () => {
  return (
    <div className="font-sans w-full bg-gray-50">
      
      {/* 1. HERO TITLE */}
      <div className="bg-[#0f2c4a] py-12 lg:py-20 px-6 lg:px-20 text-center">
        <h1 className="text-white text-3xl lg:text-5xl font-extrabold tracking-tight mb-4">
          The Practitioner
        </h1>
        <div className="w-20 h-1 bg-[#1e5faf] mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Profile Card */}
          <div className="lg:w-2/5 w-full">
            <div className="bg-white p-6 lg:p-8 rounded-xl border border-gray-200 shadow-lg relative lg:sticky lg:top-24">
              
              <div className="w-full h-[280px] lg:h-[500px] rounded-lg overflow-hidden mb-6 lg:mb-8 relative bg-gray-100 shadow-inner">
                 <img 
                  src={founderImage} 
                  alt="Ravinder Singh - Founder" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-[#0f2c4a] text-2xl lg:text-3xl font-bold mb-2">Ravinder Singh</h3>
                <p className="text-[#1e5faf] font-bold text-xs lg:text-sm uppercase tracking-widest mb-6 lg:mb-8">
                  C.P.A. & Founder
                </p>
                
                <div className="w-full h-px bg-gray-100 mb-6 lg:mb-8"></div>

                <div className="grid grid-cols-2 gap-4 lg:gap-6 text-left px-2">
                  <div>
                    <span className="block text-gray-400 text-[10px] lg:text-xs uppercase font-bold mb-1">Experience</span>
                    <span className="text-[#0f2c4a] font-bold text-lg lg:text-xl">15+ Years</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 text-[10px] lg:text-xs uppercase font-bold mb-1">License</span>
                    <span className="text-[#0f2c4a] font-bold text-lg lg:text-xl">IL & NY</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 text-[10px] lg:text-xs uppercase font-bold mb-1">Focus</span>
                    <span className="text-[#0f2c4a] font-bold text-lg lg:text-xl">Corp. Tax</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 text-[10px] lg:text-xs uppercase font-bold mb-1">Clients</span>
                    <span className="text-[#0f2c4a] font-bold text-lg lg:text-xl">500+</span>
                  </div>
                </div>

                {/* Contact Button */}
                <div className="mt-8 lg:mt-10">
                  <Link to="/contact">
                    <button className="w-full bg-[#0f2c4a] hover:bg-[#1e5faf] text-white py-3 lg:py-4 rounded-lg font-bold text-base transition-colors shadow-md hover:shadow-lg">
                      Contact Directly
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div className="lg:w-3/5 w-full">
            
            <h2 className="text-[#0f2c4a] text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 leading-tight">
              "Big firm expertise. <br/>
              <span className="text-[#1e5faf]">Boutique firm attention.</span>"
            </h2>

            <div className="prose prose-lg text-[#556987] leading-relaxed space-y-6 mb-12">
              <p>
                In the world of accounting, there is a common frustration: you hire a firm for their reputation, but your account is managed by a junior associate learning on the job.
              </p>
              <p>
                I founded <strong>East Summit Advisory</strong> to break that cycle.
              </p>
              <p>
                My philosophy is simple: <strong>The expert you hire is the expert you get.</strong> I operate as a solo practitioner by design, not by accident. This structure allows me to provide a level of agility, privacy, and obsessive attention to detail that large firms simply cannot scale.
              </p>
              <p>
                Whether you are navigating a complex merger, facing an audit, or structuring your assets for generational wealth, you deal directly with me. No middlemen. No communication delays. Just precise execution.
              </p>
            </div>

            <h3 className="text-[#0f2c4a] text-2xl font-bold mb-6">How I Work</h3>
            <div className="space-y-4 lg:space-y-6">
              
              <div className="flex gap-4 lg:gap-5 bg-white p-5 lg:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 lg:w-12 lg:h-12 min-w-[40px] lg:min-w-[48px] bg-blue-50 rounded-full flex items-center justify-center text-[#1e5faf]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#0f2c4a] text-base lg:text-lg mb-1">Zero Handoffs</h4>
                  <p className="text-sm lg:text-base text-gray-500 leading-relaxed">
                    You will never be passed down to a junior staff member. I personally oversee every line item.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 lg:gap-5 bg-white p-5 lg:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 lg:w-12 lg:h-12 min-w-[40px] lg:min-w-[48px] bg-blue-50 rounded-full flex items-center justify-center text-[#1e5faf]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#0f2c4a] text-base lg:text-lg mb-1">Proactive Speed</h4>
                  <p className="text-sm lg:text-base text-gray-500 leading-relaxed">
                    I anticipate tax liabilities before they happen, giving us time to adjust strategy mid-year, not just at tax season.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 lg:gap-5 bg-white p-5 lg:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 lg:w-12 lg:h-12 min-w-[40px] lg:min-w-[48px] bg-blue-50 rounded-full flex items-center justify-center text-[#1e5faf]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#0f2c4a] text-base lg:text-lg mb-1">Strategic CFO</h4>
                  <p className="text-sm lg:text-base text-gray-500 leading-relaxed">
                    I don't just file taxes; I help you understand cash flow, margins, and growth levers to build long-term wealth.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;