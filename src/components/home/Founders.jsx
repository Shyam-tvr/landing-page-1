import Image from "next/image";
import React from "react";

const Founders = () => {
  return (
    <section className="px-2 md:px-16 md:py-4">
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
          <h1 className="font-anton text-[#FCD901] mt-6 text-lg md:text-3xl md:mt-24">
            Meet Our Founders
          </h1>
          <div className="container p-2 md:p-0">
            {/* Row stays intact even on mobile */}
            <div className="flex justify-center divide-x divide-[#FCD901] text-center">
              {[
                { name: "Nikhil N P", role: "Co-founder" },
                { name: "Vimal Govind M K", role: "Co-founder & CEO" },
                { name: "Rashid K", role: "Co-founder" },
                { name: "Arun George", role: "Co-founder" },
              ].map((f, i) => (
                <div key={i} className="px-2 md:px-6 lg:px-8 flex flex-col">
                  <p className="text-[#FCD901] text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl font-semibold truncate">
                    {f.name}
                  </p>
                  <p className="text-white text-[10px] sm:text-xs md:text-base font-light">
                    {f.role}
                  </p>
                </div>
              ))}
            </div>
            <p className="md:mx-10 xl:mx-20 my-2 md:my-6 text-xs sm:text-sm md:text-base lg:text-xl text-white/70 text-justify">
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
