import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0f2c4a] text-white pt-16 pb-8 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-700 pb-12">
          
          {/* Column 1: Brand & Logo */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/logo1.png" 
                alt="East Summit Advisory" 
                className="h-14 w-auto object-contain" 
              />
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              East Summit Advisory is an Illinois-licensed CPA practice providing precision-led accounting and nationwide tax solutions.
            </p>
            {/* <div className="text-xs text-gray-500">
              <p>License # 065.000000</p>
              <p>IRS Circular 230 Disclosure</p>
            </div> */}
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#1e5faf] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#1e5faf] transition-colors">About Me</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#1e5faf] transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#1e5faf] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <Link to="/services?open=Tax" className="hover:text-[#1e5faf] transition-colors">Tax Planning</Link>
              </li>
              <li>
                <Link to="/services?open=Audit" className="hover:text-[#1e5faf] transition-colors">Audit & Assurance</Link>
              </li>
              <li>
                <Link to="/services?open=Advisory" className="hover:text-[#1e5faf] transition-colors">Business Advisory</Link>
              </li>
              <li>
                <Link to="/services?open=CFO" className="hover:text-[#1e5faf] transition-colors">CFO Services</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#1e5faf] mt-0.5">📍</span>
                <span>Chicago, Illinois</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#1e5faf]">📞</span>
                <a href="tel:847.447.6424" className="hover:text-white transition-colors">847.447.6424</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#1e5faf]">✉️</span>
                <a href="mailto:RavinderS@eastsummitadvisory.com" className="hover:text-white transition-colors">RavinderS@eastsummitadvisory.com</a>
              </li>
            </ul>
          </div>
        </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2026 East Summit Advisory. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition cursor-pointer">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition cursor-pointer">Terms of Service</Link>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;