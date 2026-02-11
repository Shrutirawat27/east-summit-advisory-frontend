import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="w-full font-sans bg-white">
      
      {/* Header */}
      <div className="bg-[#eff6ff] py-12 lg:py-20 px-6 lg:px-20 text-center border-b border-blue-50">
        <h1 className="text-[#0f2c4a] text-3xl lg:text-5xl font-extrabold mb-4 lg:mb-6 tracking-tight">
          Contact Me
        </h1>

        <p className="text-[#556987] text-base lg:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          Get in touch with me directly to discuss your financial strategy.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="lg:w-1/3 space-y-8">
          
          {/* Location */}
          <div>
            <h3 className="text-[#0f2c4a] text-xl font-bold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-[#1e5faf]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </span>
              Location
            </h3>
            <p className="text-[#556987] leading-relaxed pl-10">
              Chicago, Illinois
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#0f2c4a] text-xl font-bold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-[#1e5faf]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              Contact Info
            </h3>
            <div className="pl-10 space-y-1">
              <p className="text-[#556987] font-medium hover:text-[#1e5faf] transition-colors">
                <a href="mailto:RavinderS@eastsummitadvisory.com">RavinderS@eastsummitadvisory.com</a>
              </p>
              <div className="flex flex-row items-center gap-3">
              <p className="text-[#556987] font-medium">
                <span>Phone: </span>
                <a href="tel:8474476424" className="text-[#556987] font-medium hover:text-[#1e5faf] transition-colors">
                  847.447.6424
                </a>
                <br></br>
                <span>Cell: </span>
                <a href="tel:2248042051" className="text-[#556987] font-medium hover:text-[#1e5faf] transition-colors">
                  224.804.2051
                </a>
              </p>
              </div>
            </div>
          </div>

          {/* Working Hours Box */}
          <div className="p-6 bg-[#eff6ff] rounded-xl border border-blue-100 mt-6">
            <h4 className="text-[#0f2c4a] font-bold text-sm mb-3 uppercase tracking-wide">Working Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#556987]">Mon - Sat</span>
                <span className="text-[#0f2c4a] font-semibold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#556987]">Sun</span>
                <span className="text-[#0f2c4a] font-semibold">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          <ContactForm />
        </div>

      </div>
    </div>
  );
};

export default Contact;