import React from 'react'

const Intro = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center'>
        <div className='absolute inset-0 w-full h-screen flex flex-col justify-center items-center lg:max-w-2xl mx-auto'>
          <h1 className="font-anton text-white ">
            Join{" "}
            <span className="text-[#FCD901]">Our Mission</span>
          </h1>
          <h4 className='text-white text-center'>Be a part of a team that's transforming communities and saving lives through robotics and AI. Your work can create a real-world impact.</h4>
        </div>
    </section>
  )
}

export default Intro