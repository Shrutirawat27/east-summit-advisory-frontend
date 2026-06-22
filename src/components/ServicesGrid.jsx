import React, { useState, useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom'; 

const Icons = {
  Tax: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  ),
  Advisory: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941" />
    </svg>
  ),
  Bookkeeping: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  Formation: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
    </svg>
  ),
};

const ServicesGrid = ({ isHome }) => {
  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation();

  const servicesList = [
    {
      id: "Tax", 
      icon: <Icons.Tax />,
      title: "Tax Planning",
      shortDesc: "Proactive strategies to minimize liability for corporations & individuals.",
      details: "We don't just file your taxes; we plan them. Our year-round tax planning services analyze your financial situation from a tax-efficient perspective."
    },
    {
      id: "Advisory",
      icon: <Icons.Advisory />,
      title: "Business Advisory",
      shortDesc: "Strategic guidance for mergers, scaling, and fractional CFO work.",
      details: "We act as your strategic partner, offering Fractional CFO services to guide you through mergers, acquisitions, and cash flow management."
    },
    {
      id: "Bookkeeping",
      icon: <Icons.Bookkeeping />,
      title: "Bookkeeping",
      shortDesc: "Streamlined monthly reporting and payroll management.",
      details: "Focus on your business while we handle the books. We provide accurate monthly bookkeeping, bank reconciliations, and payroll management."
    },
    {
      id: "Formation", 
      icon: <Icons.Formation />,
      title: "Entity Formation",
      shortDesc: "Guidance on LLC/S-Corp structure for protection and efficiency.",
      details: "Choosing the right business structure (LLC, S-Corp, C-Corp) is critical for liability protection and tax savings."
    }
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceToOpen = params.get('open');

    if (serviceToOpen) {
      const foundService = servicesList.find(s => s.id === serviceToOpen || s.title.includes(serviceToOpen));
      if (foundService) {
        setSelectedService(foundService);
      }
    }
  }, [location]); 

  return (
    <div className={`max-w-7xl mx-auto px-4 md:px-6 lg:px-20 ${isHome ? 'pt-0 pb-12' : 'py-12'}`}>
      
      {/* GRID: Updated to lg:grid-cols-4 for a perfect single row on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {servicesList.map((service, index) => (
          <div 
            key={index}
            onClick={() => setSelectedService(service)}
            className="bg-white p-4 md:p-8 rounded-2xl border border-[#1e5faf] md:border-gray-100 md:hover:border-[#1e5faf] shadow-sm hover:shadow-xl transition-all duration-300 group text-center cursor-pointer relative"
          >
            
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1e5faf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </div>

            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-[#eff6ff] group-hover:bg-[#1e5faf] rounded-full flex items-center justify-center text-[#1e5faf] group-hover:text-white transition-colors duration-300 mb-3 md:mb-6">
              {service.icon}
            </div>
            
            <h3 className="text-sm md:text-xl font-bold text-[#0f2c4a] mb-2 md:mb-3 group-hover:text-[#1e5faf] transition-colors leading-tight">
              {service.title}
            </h3>
            
            <p className="text-[#556987] text-xs md:text-sm leading-relaxed block">
              {service.shortDesc}
            </p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="bg-[#eff6ff] p-8 text-center border-b border-blue-50">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-[#1e5faf] shadow-sm mb-4">
                {selectedService.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#0f2c4a]">
                {selectedService.title}
              </h3>
            </div>

            <div className="p-8">
              <p className="text-[#556987] leading-relaxed text-base mb-8">
                {selectedService.details}
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="flex-1">
                  <button className="w-full bg-[#1e5faf] hover:bg-[#164a8a] text-white font-bold py-3 rounded-lg transition-colors shadow-md">
                    Book Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesGrid;