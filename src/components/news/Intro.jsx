import React from 'react'

const Intro = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center'>
        <div className='relative w-full '></div>
        <div className='absolute inset-0 w-full h-screen flex justify-center items-center'>
          <h1 className="font-anton text-white text-center">
            Insight and Inspiration,{" "}
            <span className="text-[#FCD901] block">Explore our Articles & Blog</span>
          </h1>
        </div>
    </section>
  )
}

export default Intro