import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 w-full font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
        
        {/* 1. LOGO */}
        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <img 
            src="/logo2.png" 
            alt="East Summit Advisory" 
            className="h-16 w-auto object-contain" 
          />
        </Link>

        {/* 2. DESKTOP LINKS */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="text-[#0f2c4a] font-bold text-base hover:text-[#1e5faf] transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-[#0f2c4a] font-bold text-base hover:text-[#1e5faf] transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-[#0f2c4a] font-bold text-base hover:text-[#1e5faf] transition-colors">
            About Me
          </Link>
        </div>

        {/* 3. LOGIN + CONTACT BUTTON */}
        <div className="flex items-center gap-4 md:gap-6">
          
          <Link to="/login" className="hidden md:block text-[#0f2c4a] font-bold text-base hover:text-[#1e5faf] transition-colors">
            Login
          </Link>
          
          <Link to="/contact" className="hidden md:block">
            <button className="bg-[#1e5faf] hover:bg-[#164a8a] text-white px-4 md:px-6 py-2.5 rounded-md font-bold text-sm shadow-sm transition-all hover:-translate-y-0.5">
              Contact Me
            </button>
          </Link>

          {/* HAMBURGER BUTTON */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-[#0f2c4a] hover:text-[#1e5faf] focus:outline-none transition-colors"
          >
            
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 4. MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl flex flex-col py-6 px-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)} 
            className="text-[#0f2c4a] font-bold text-lg hover:text-[#1e5faf] border-b border-gray-50 pb-2"
          >
            Home
          </Link>
          <Link 
            to="/services" 
            onClick={() => setIsOpen(false)} 
            className="text-[#0f2c4a] font-bold text-lg hover:text-[#1e5faf] border-b border-gray-50 pb-2"
          >
            Services
          </Link>
          <Link 
            to="/about" 
            onClick={() => setIsOpen(false)} 
            className="text-[#0f2c4a] font-bold text-lg hover:text-[#1e5faf] border-b border-gray-50 pb-2"
          >
            About Me
          </Link>
          <Link 
            to="/login" 
            onClick={() => setIsOpen(false)} 
            className="text-[#0f2c4a] font-bold text-lg hover:text-[#1e5faf] border-b border-gray-50 pb-2"
          >
            Login
          </Link>
          
          {/* MOBILE CONTACT BUTTON */}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            className="bg-[#1e5faf] text-white text-center font-bold text-lg py-3 rounded-lg hover:bg-[#164a8a] transition-colors shadow-md mt-2"
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;