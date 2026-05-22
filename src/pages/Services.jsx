import React from 'react';
import { Link } from 'react-router-dom'; 
import ServicesGrid from '../components/ServicesGrid';

const Services = () => {
  return (
    <div className="w-full font-sans bg-gray-50">
      
      {/* HEADER SECTION */}
      <div className="bg-[#0f2c4a] py-20 px-6 lg:px-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1e5faf] opacity-10 blur-[100px] rounded-full"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#60a5fa] font-bold tracking-widest uppercase text-xs mb-3">
             Solo Practitioner
          </p>
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            My Services
          </h1>
          <p className="text-gray-300 text-lg font-medium leading-relaxed">
            I provide the high-level financial architecture usually reserved for large corporations, tailored for you.
          </p>
        </div>
      </div>

      {/* SERVICES GRID SECTION */}
      <div className="relative z-20">
        <ServicesGrid />
      </div>

      {/* CTA SECTION */}
      <div className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#0f2c4a] text-2xl font-bold mb-6">
            Unsure which service fits your needs?
          </h2>
          <Link to="/contact">
            <button className="bg-[#1e5faf] hover:bg-[#164a8a] text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              Let's Discuss Your Strategy
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Services;