import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      
      {/* 1. HERO HEADER */}
      <div className="bg-[#0f2c4a] py-16 lg:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <path d="M0 100 L100 0 L100 100 Z" fill="white" />
          </svg>
        </div>
        
        <h1 className="text-white text-3xl lg:text-5xl font-extrabold tracking-tight relative z-10 mb-4">
          Privacy Policy
        </h1>
        <p className="text-blue-200 text-sm font-medium uppercase tracking-widest relative z-10">
          Last Updated: February 2026
        </p>
      </div>

      {/* 2. MAIN CONTENT CARD */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-xl shadow-xl border-t-4 border-[#1e5faf] p-6 md:p-8 lg:p-14">
          
          <div className="prose prose-lg text-[#556987] max-w-none">
            <p className="lead text-xl text-[#0f2c4a] font-medium mb-8">
              At East Summit Advisory, trust is the foundation of my practice. As a solo practitioner, I am personally committed to protecting the confidential financial data you share with me.
            </p>

            <div className="space-y-12">
              
              {/* Section 1 */}
              <div>
                <h3 className="flex items-center gap-3 text-2xl font-bold text-[#0f2c4a] mb-4">
                  <span className="bg-[#eff6ff] text-[#1e5faf] w-10 h-10 rounded-lg flex items-center justify-center text-lg shadow-sm flex-shrink-0">1</span>
                  Information I Collect
                </h3>
                <p className="mb-4">
                  To provide accurate tax and accounting services, I may collect the following data:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                  <li className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-start gap-3">
                    <span className="text-[#1e5faf] mt-1 flex-shrink-0">✓</span>
                    <div>
                      <strong className="block text-[#0f2c4a]">Identity Data</strong>
                      <span className="text-sm">Name, SSN, Tax ID numbers.</span>
                    </div>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-start gap-3">
                    <span className="text-[#1e5faf] mt-1 flex-shrink-0">✓</span>
                    <div>
                      <strong className="block text-[#0f2c4a]">Financial Data</strong>
                      <span className="text-sm">Bank statements, payroll records, expense reports.</span>
                    </div>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-start gap-3">
                    <span className="text-[#1e5faf] mt-1 flex-shrink-0">✓</span>
                    <div>
                      <strong className="block text-[#0f2c4a]">Contact Data</strong>
                      <span className="text-sm">Billing address, email, phone number.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="border-l-4 border-gray-100 pl-6">
                <h3 className="text-xl font-bold text-[#0f2c4a] mb-3">2. How I Use Your Data</h3>
                <p>
                  I am a CPA, not a data broker. I strictly use your data to:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-[#1e5faf]">
                  <li>Prepare and file tax returns with the IRS and state authorities.</li>
                  <li>Provide requested advisory, bookkeeping, or CFO services.</li>
                  <li>Comply with legal and professional obligations under the AICPA code of conduct.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="bg-[#eff6ff] p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-[#0f2c4a] mb-3 flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1e5faf] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  3. Data Security
                </h3>
                <p className="text-sm mb-0">
                  I utilize bank-grade encryption (256-bit AES) for all document storage and transfer. Access to your personal data is restricted strictly to **myself (the principal CPA)** and essential secure software processors. I do not sell your data to third parties.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h3 className="text-xl font-bold text-[#0f2c4a] mb-4">4. Contact Me</h3>
                <p className="mb-4">
                  For specific inquiries regarding your data rights, please contact my office directly:
                </p>
                <div className="flex flex-col md:flex-row gap-6">
                  
                  {/* Email Box */}
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg flex-1 border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Email</p>
                    <a href="mailto:RavinderS@eastsummitadvisory.com" className="text-[#1e5faf] font-bold hover:underline break-words text-sm sm:text-base">
                      RavinderS@eastsummitadvisory.com
                    </a>
                  </div>
                  
                  {/* Phone Box */}
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg flex-1 border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Phone</p>
                    <a href="tel:8474476424" className="text-[#1e5faf] font-bold hover:underline text-sm sm:text-base">
                      847.447.6424
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <Link to="/" className="text-[#556987] hover:text-[#1e5faf] text-sm font-bold flex items-center justify-center gap-2 transition-colors">
              ← Return to Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;