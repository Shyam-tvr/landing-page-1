"use client";

import React, { useState, useEffect } from 'react';

const Intro = () => {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && showIndicator) {
        setShowIndicator(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showIndicator]);

  return (
    <section className='w-full h-screen flex justify-center items-center relative'>
      <div className='h-screen p-4 flex flex-col justify-center items-center md:max-w-xl lg:max-w-2xl xl:max-w-2xl 2xl:max-w-3xl mx-auto'>
        <h1 className="font-anton text-white text-center">
          Join <span className="text-[#FCD901]">Our Mission</span>
        </h1>
        <h4 className='text-white text-justify mt-4 md:text-center'>
          Be a part of a team that's transforming communities and saving lives through robotics and AI. Your work can create a real-world impact.
        </h4>
      </div>

      {/* Scroll Down Indicator */}
      {showIndicator && (
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2'>
          <span className="text-gray-500 text-3xl animate-bounce">&#8595;</span>
          <span className="text-gray-500 text-sm">Scroll Down</span>
        </div>
      )}
    </section>
  );
};

export default Intro;
