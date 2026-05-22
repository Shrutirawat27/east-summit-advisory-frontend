import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", formData);
    alert("Login functionality will be connected to the backend soon.");
  };

  return (
    <div className="w-full min-h-screen flex font-sans">
      
      {/* LEFT SIDE: Welcome */}
      <div className="hidden lg:flex w-1/2 bg-[#0f2c4a] relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1e5faf]/20 mix-blend-overlay z-10"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#1e5faf] rounded-full blur-[120px] opacity-20 animate-pulse"></div>

        <div className="relative z-20 text-center px-12">
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-[#1e5faf] rounded-2xl shadow-2xl text-white">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4">Welcome Back</h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-md mx-auto">
            Access your secure client portal to view tax documents, financial reports, and message me directly.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-6 lg:p-20 relative">

        <div className="absolute top-6 left-6 lg:top-10 lg:left-10">
          <Link to="/" className="flex items-center gap-2 text-[#556987] hover:text-[#1e5faf] transition-colors font-bold text-sm group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="w-full max-w-md space-y-8 mt-10 lg:mt-0">
          
          <div className="lg:hidden text-center mb-8">
            <div className="w-12 h-12 bg-[#1e5faf] rounded-lg flex items-center justify-center text-white mx-auto shadow-md mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-[#0f2c4a] text-3xl font-extrabold">Client Login</h2>
            <p className="text-[#556987] mt-2">Secure access to your dashboard</p>
          </div>

          <div className="hidden lg:block">
            <h2 className="text-[#0f2c4a] text-3xl font-bold">Client Login</h2>
            <p className="text-[#556987] mt-2">Please enter your credentials to continue.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <div>
              <label className="block text-[#0f2c4a] font-bold text-sm mb-2 font-sans">Email Address</label>
              <input 
                name="email" 
                type="email" 
                required
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1e5faf] focus:ring-1 focus:ring-[#1e5faf] outline-none transition text-sm font-sans" 
                placeholder="name@company.com" 
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[#0f2c4a] font-bold text-sm font-sans">Password</label>
                <a href="#" className="text-sm text-[#1e5faf] font-bold hover:underline">Forgot password?</a>
              </div>
              <input 
                name="password" 
                type="password" 
                required
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1e5faf] focus:ring-1 focus:ring-[#1e5faf] outline-none transition text-sm font-sans" 
                placeholder="••••••••" 
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#1e5faf] hover:bg-[#164a8a] text-white py-4 rounded-lg font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 font-sans"
            >
              Sign In
            </button>

          </form>

          <p className="text-center text-[#556987] text-sm">
            Not a client yet?{' '}
            <Link to="/contact" className="text-[#1e5faf] font-bold hover:underline">
              Schedule a Consultation
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Login;