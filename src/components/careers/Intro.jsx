import React from 'react'

const Intro = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center'>
        <div className=' h-screen p-4 flex flex-col justify-center items-center md:max-w-xl lg:max-w-2xl xl:max-w-2xl 2xl:max-w-3xl mx-auto'>
          <h1 className="font-anton text-white ">
            Join{" "}
            <span className="text-[#FCD901]">Our Mission</span>
          </h1>
          <h4 className='text-white text-justify mt-4 md:text-center'>Be a part of a team that's transforming communities and saving lives through robotics and AI. Your work can create a real-world impact.</h4>
        </div>
    </section>
  )
}

export default Intro