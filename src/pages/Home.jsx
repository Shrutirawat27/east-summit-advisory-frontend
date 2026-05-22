import React from 'react';
import Hero from '/src/components/home/Hero'; 
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import ServicesGrid from '../components/ServicesGrid';

const Home = () => {
  return (
    <div className="w-full">

      <Hero />
      <Stats />

      <div className="bg-gray-50 pt-20 pb-0">
        <div className="text-center max-w-3xl mx-auto px-6 mb-8">
           <h2 className="text-[#0f2c4a] text-3xl font-bold mb-4">My Expertise</h2>
           <p className="text-[#556987]">
             I provide the financial architecture for growing businesses.
           </p>
        </div>
        <ServicesGrid isHome={true} />
      </div>

      <Testimonials />

    </div>
  );
};

export default Home;