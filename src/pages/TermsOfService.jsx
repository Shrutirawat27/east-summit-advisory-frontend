import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      
      {/* 1. HERO HEADER */}
      <div className="bg-[#0f2c4a] py-16 lg:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e5faf] rounded-full blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1e5faf] rounded-full blur-[80px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <h1 className="text-white text-3xl lg:text-5xl font-extrabold tracking-tight relative z-10 mb-4">
          Terms of Service
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
              Welcome to East Summit Advisory. By engaging with my services, you agree to the following professional terms and conditions.
            </p>

            <div className="space-y-10">
              
              {/* Term 1 */}
              <div className="group">
                <h3 className="text-xl font-bold text-[#0f2c4a] mb-3 group-hover:text-[#1e5faf] transition-colors">
                  1. Acceptance of Terms
                </h3>
                <p className="text-base leading-relaxed">
                  By accessing this website or engaging the firm for services, you accept and agree to be bound by the terms and provisions of this agreement. Formal accounting relationships are only established upon the mutual signing of an Engagement Letter.
                </p>
              </div>
              
              <div className="h-px bg-gray-100 w-full"></div>

              {/* Term 2 */}
              <div className="group">
                <h3 className="text-xl font-bold text-[#0f2c4a] mb-3 group-hover:text-[#1e5faf] transition-colors">
                  2. No Professional Advice
                </h3>
                <p className="text-base leading-relaxed">
                  The content provided on this website is for general informational purposes only. It does not constitute formal accounting, tax, or legal advice. You should not act upon any information on this website without first seeking independent professional counsel regarding your specific facts and circumstances.
                </p>
              </div>

              <div className="h-px bg-gray-100 w-full"></div>

              {/* Term 3 */}
              <div className="group">
                <h3 className="text-xl font-bold text-[#0f2c4a] mb-3 group-hover:text-[#1e5faf] transition-colors">
                  3. Intellectual Property
                </h3>
                <p className="text-base leading-relaxed">
                  The Site and its original content (including text, graphics, logos, and software) are the exclusive property of East Summit Advisory and are protected by United States and international copyright laws.
                </p>
              </div>

              <div className="h-px bg-gray-100 w-full"></div>

              {/* Term 4 */}
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-[#7f1d1d] mb-2">
                  4. Limitation of Liability
                </h3>
                <p className="text-sm text-[#7f1d1d] leading-relaxed mb-0">
                  In no event shall East Summit Advisory be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of this website. The firm's liability is strictly limited to the professional services rendered under a signed agreement.
                </p>
              </div>

              {/* Term 5 */}
              <div className="group">
                <h3 className="text-xl font-bold text-[#0f2c4a] mb-3 group-hover:text-[#1e5faf] transition-colors">
                  5. Governing Law
                </h3>
                <p className="text-base leading-relaxed">
                  These Terms shall be governed and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law provisions.
                </p>
              </div>

            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
             <Link to="/contact" className="inline-block bg-[#0f2c4a] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1e5faf] transition-colors shadow-lg">
               Contact for Clarification
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;