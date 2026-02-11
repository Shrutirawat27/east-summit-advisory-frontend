import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipient = "RavinderS@eastsummitadvisory.com";
    const subject = `Website Inquiry from ${formData.firstName} ${formData.lastName}`;
    const body = formData.message;
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-white p-5 lg:p-10 rounded-2xl shadow-lg border border-gray-100">
      
      <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">

        <div className="grid grid-cols-2 gap-3 lg:gap-6">
          <div>
            <label className="block text-[#0f2c4a] font-bold text-xs lg:text-sm mb-1 lg:mb-2">First Name</label>
            <input 
              name="firstName" 
              type="text" 
              required
              onChange={handleChange}
              className="w-full px-3 py-2.5 lg:px-4 lg:py-3 rounded-lg border border-gray-200 focus:border-[#1e5faf] focus:ring-1 focus:ring-[#1e5faf] outline-none transition text-sm lg:text-base" 
              placeholder="John" 
            />
          </div>
          <div>
            <label className="block text-[#0f2c4a] font-bold text-xs lg:text-sm mb-1 lg:mb-2">Last Name</label>
            <input 
              name="lastName" 
              type="text" 
              onChange={handleChange}
              className="w-full px-3 py-2.5 lg:px-4 lg:py-3 rounded-lg border border-gray-200 focus:border-[#1e5faf] focus:ring-1 focus:ring-[#1e5faf] outline-none transition text-sm lg:text-base" 
              placeholder="Doe" 
            />
          </div>
        </div>

        {/* EMAIL FIELD */}
        <div>
          <label className="block text-[#0f2c4a] font-bold text-xs lg:text-sm mb-1 lg:mb-2">Email Address</label>
          <input 
            name="email" 
            type="email" 
            required
            onChange={handleChange}
            className="w-full px-3 py-2.5 lg:px-4 lg:py-3 rounded-lg border border-gray-200 focus:border-[#1e5faf] focus:ring-1 focus:ring-[#1e5faf] outline-none transition text-sm lg:text-base" 
            placeholder="john@company.com" 
          />
        </div>

        {/* MESSAGE FIELD */}
        <div>
          <label className="block text-[#0f2c4a] font-bold text-xs lg:text-sm mb-1 lg:mb-2">Message</label>
          <textarea 
            name="message" 
            required
            onChange={handleChange}
            className="w-full px-3 py-2.5 lg:px-4 lg:py-3 rounded-lg border border-gray-200 focus:border-[#1e5faf] focus:ring-1 focus:ring-[#1e5faf] outline-none transition h-24 lg:h-32 text-sm lg:text-base resize-none" 
            placeholder="How can I help you?"
          ></textarea>
        </div>

        {/* SUBMIT BUTTON */}
        <button type="submit" className="w-full bg-[#1e5faf] hover:bg-[#164a8a] text-white py-3 lg:py-4 rounded-lg font-bold text-sm lg:text-base shadow-md transition-all">
          Send Message
        </button>

      </form>
    </div>
  );
};

export default ContactForm;