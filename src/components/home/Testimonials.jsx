import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "East Summit Advisory transformed my tax strategy. I saved over 20% in liabilities in the first year alone. The ROI was immediate.",
      author: "Sarah Jenkins",
      role: "CEO, TechFlow Solutions",
      location: "Chicago, IL",
      initials: "SJ"
    },
    {
      quote: "The fractional CFO service gave us the financial clarity we needed to secure our Series A funding. A true partner in our growth.",
      author: "Michael Ross",
      role: "Founder, GreenLeaf Logistics",
      location: "Austin, TX",
      initials: "MR"
    },
    {
      quote: "Professional, precise, and proactive. Finally, a financial partner who understands the complexities of high-growth startups.",
      author: "David Chen",
      role: "Director, Chen Medical Group",
      location: "New York, NY",
      initials: "DC"
    }
  ];

  return (
    <div className="bg-[#eff6ff] py-12 md:py-20 px-6 lg:px-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0f2c4a 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="text-left w-full md:w-auto">
            <p className="text-[#1e5faf] font-bold tracking-widest uppercase text-xs mb-2">
              Client Success
            </p>

            <h2 className="text-[#0f2c4a] text-3xl lg:text-4xl font-extrabold leading-tight">
              Trusted by <br/> Industry Leaders.
            </h2>
          </div>
          
          <div className="hidden md:block text-right">
            <div className="text-[#1e5faf] flex gap-1 justify-end mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="text-[#556987] text-sm font-bold">100% Client Retention Rate</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              
              <div className="mb-4 md:mb-6">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-[#1e5faf] fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.353 15.993 15.025 15.291C15.697 14.589 16.634 14.238 17.836 14.238L17.836 12C17.836 10.99 17.551 10.219 16.981 9.687C16.411 9.155 15.65 8.889 14.697 8.889L14.697 6C16.516 6 18.005 6.57 19.164 7.71C20.323 8.85 20.902 10.64 20.902 13.08L20.902 21L14.017 21ZM5 21L5 18C5 16.896 5.336 15.993 6.008 15.291C6.68 14.589 7.617 14.238 8.819 14.238L8.819 12C8.819 10.99 8.534 10.219 7.964 9.687C7.394 9.155 6.633 8.889 5.68 8.889L5.68 6C7.499 6 8.988 6.57 10.147 7.71C11.306 8.85 11.885 10.64 11.885 13.08L11.885 21L5 21Z" /></svg>
              </div>
              
              <p className="text-[#0f2c4a] text-base md:text-lg font-medium leading-relaxed mb-6 md:mb-8 min-h-[60px] md:min-h-[80px]">
                "{item.quote}"
              </p>
              
              <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-gray-100">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg shadow-md shrink-0">
                  {item.initials}
                </div>
                
                <div className="overflow-hidden">
                  <h4 className="text-[#0f2c4a] font-bold text-sm md:text-base truncate">{item.author}</h4>
                  <p className="text-[#556987] text-[10px] md:text-xs uppercase tracking-wide truncate">{item.role}</p>
                  <p className="text-gray-400 text-[10px] md:text-xs mt-0.5">{item.location}</p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></div>
                 <span className="text-[9px] md:text-[10px] font-bold text-green-700 uppercase tracking-wide">Verified</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Testimonials;