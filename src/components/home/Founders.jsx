import Image from "next/image";
import React from "react";

const Founders = () => {
  return (
    <section className="px-16 py-4">
      <div className="relative w-full">
        <Image
          src="/home/Founders.png"
          alt="Intro background"
          width={1789}
          height={2527}
          className="w-full h-auto rounded-2xl"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-between xl:py-24 bg-gradient-to-b from-0% from-black/25 via-15% via-black/0  to-black/25">
          <h1 className="font-anton text-[#FCD901] text-2xl md:text-3xl lg:text-3xl mt-24">
            Meet Our Founders
          </h1>
          <div className="xl:container">
            <div className="flex justify-center divide-x divide-[#FCD901]">
              <div className="text-center px-8">
                <p className="text-[#FCD901] lg:text-2xl xl:text-3xl font-semibold">Nikhil N P</p>
                <p className="text-white text-base font-light">Co-founder</p>
              </div>
              <div className="text-center px-8">
                <p className="text-[#FCD901] lg:text-2xl xl:text-3xl font-semibold">Vimal Govind M K</p>
                <p className="text-white text-base font-light">Co-founder & CEO</p>
              </div>
              <div className="text-center px-8">
                <p className="text-[#FCD901] lg:text-2xl xl:text-3xl font-semibold">Rashid K</p>
                <p className="text-white text-base font-light">Co-founder</p>
              </div>
              <div className="text-center px-8">
                <p className="text-[#FCD901] lg:text-2xl xl:text-3xl font-semibold">Arun George</p>
                <p className="text-white text-base font-light">Co-founder</p>
              </div>
            </div>
            <p className="md:mx-10 xl:mx-20 my-8 lg:text-xl text-white/70 text-justify">
              Genrobotics is led by visionary leaders who are dedicated to using
              robotics for positive change. Our team of engineers, researchers,
              and experts combines technical skills with a strong commitment to
              innovation. With a forward-thinking approach, we work to create
              solutions that bring meaningful and lasting improvements to
              industries around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
