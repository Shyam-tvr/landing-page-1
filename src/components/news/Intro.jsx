"use client"
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
      <div className='absolute inset-0 w-full h-screen flex justify-center items-center'>
        <h1 className="font-anton text-white text-center">
          Insight and Inspiration,{" "}
          <span className="text-[#FCD901] block">Explore our Articles & Blog</span>
        </h1>
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

