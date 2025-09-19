import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <section className="w-full xl:flex items-center gap-8 -mt-[700px] container mx-auto mb-36">
      <div className="px-4 md:w-xl mx-auto space-y-6 lg:mx-0 lg:space-y-4 lg:w-2/5 lg:p-4 z-20">
        <h1 className="font-anton text-center text-[#FCD901] text-xl md:text-3xl lg:text-left lg:text-3xl">
          Our Misson{" "}
          <span className="block text-white">
            Pioneering Robotics for a Safer world
          </span>
        </h1>
        <div className="w-[90%] h-px bg-[linear-gradient(90deg,#fcd90100,#fcda01d1_50%,#fcd90100)] lg:bg-[linear-gradient(90deg,#fcda01d1_50%,#fcd90100)]"></div>
        <p className="text-sm text-left text-white md:text-base lg:leading-relaxed">
          Genrobotics was born from a desire to end inhumane practices and
          improve lives through technology. our journey started with a simple
          question: how can we use our skills to serve humanity? Today, we are
          diversified robotics company dedicated to building solutions for
          challenging enviroments, ensuring safety and human lives. From
          Sanitization to healthcare, our innovarions are designed with people
          at their core, ensuring technology serves its ultimate purpose: to
          uplift and protect human life.
        </p>
      </div>
      <div className="w-3/5 z-20">
        <Image src="/home/world-map.png" alt="world-map" width={1383} height={778}/> 
      </div>
    </section>
  );
};

export default Mission;
