import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <section className="w-full flex flex-col xl:flex-row items-center gap-8 -mt-40 lg:-mt-96 lg:mb-96 xl:-mt-[700px] xl:mb-[700px] 2xl:-mt-[900px] 2xl:mb-[900px] container mx-auto mb-24 px-4 2xl:px-0">
      {/* Text content */}
      <div className="space-y-6 md:mx-12 xl:w-1/2 lg:space-y-4 z-20 2xl:space-y-8 2xl:mx-20 2xl:w-[70%]">
        <h1 className="font-anton text-center xl:text-left text-[#FCD901] text-xl md:text-3xl 2xl:text-4xl">
          Our Mission{" "}
          <span className="block text-white">
            Pioneering Robotics for a Safer World
          </span>
        </h1>
        <div className="w-[90%] mx-auto md:mx-0 h-px bg-[linear-gradient(90deg,#fcd90100,#fcda01d1_50%,#fcd90100)]"></div>
        <p className="text-sm md:text-base text-white leading-relaxed text-justify 2xl:text-lg 2xl:leading-loose">
          Genrobotics was born from a desire to end inhumane practices and
          improve lives through technology. Our journey started with a simple
          question: how can we use our skills to serve humanity? Today, we are a
          diversified robotics company dedicated to building solutions for
          challenging environments, ensuring safety and human lives. From
          sanitization to healthcare, our innovations are designed with people
          at their core, ensuring technology serves its ultimate purpose: to
          uplift and protect human life.
        </p>
      </div>

      {/* Image */}
      <div className="xl:w-1/2 z-20 2xl:w-[60%]">
        <Image
          src="/home/world-map.png"
          alt="world-map"
          width={1383}
          height={778}
          className="w-full h-auto 2xl:max-w-[90%] 2xl:mx-auto"
        />
      </div>
    </section>
  );
};

export default Mission;
