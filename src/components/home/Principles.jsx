import Image from "next/image";
import React from "react";

const principlesData = [
    {
        icon:"/icons/human-centric-innovation.svg",
        iconWidth:86,
        title:"Human-Centric Innovation",
        desc:"Creating technology that enhances lives and values human dignity.",
        gradient:"bg-gradient-to-b from-[#FCD901] to-[#ffffff00]"
    },
    {
        icon:"/icons/commitment-to-safety.svg",
        iconWidth:68,
        title:"Commitment to Safety",
        desc:"Striving to make industries safer by removing humans from hazardous tasks.",
        gradient:"bg-gradient-to-t from-[#FCD901] to-[#ffffff00]"
    },
    {
        icon:"/icons/handshake.svg",
        iconWidth:102,
        title:"Integrity & Responsibility",
        desc:"Working with accountability to our clients, communities, and the environment.",
        gradient:"bg-gradient-to-b from-[#FCD901] to-[#ffffff00]"
    },
    {
        icon:"/icons/collaboration.svg",
        iconWidth:64,
        title:"Collaboration & Inclusivity",
        desc:"Building partnerships that share our commitment to societal advancement.",
        gradient:"bg-gradient-to-b from-[#FCD901] to-[#ffffff00]"
    },
    {
        icon:"/icons/continuos.svg",
        iconWidth:134,
        title:"Continuous Improvement",
        desc:"Embracing innovation to refine our solutions and adapt to new challenges.",
        gradient:"bg-gradient-to-t from-[#FCD901] to-[#ffffff00]"
    }
]

const Principles = () => {
  return (
    <section className="my-24 md:my-48 px-4 flex flex-col justify-center items-center">
      {/* Top Content */}
      <div className="w-full max-w-6xl mx-auto text-center space-y-4">
        <h1 className="font-anton text-[#FCD901] text-2xl md:text-3xl lg:text-4xl">
          Our Guiding Principles{" "}
          <span className="text-white block md:inline">Our Core Values</span>
        </h1>
        <h4 className="text-white leading-relaxed">
          Our values are the bedrock of our culture and the blueprint for our
          actions. They guide every decision we make and every technology we
          create.
        </h4>
      </div>

      {/* Cards - Flex Wrap */}
      <div className="w-full max-w-6xl flex flex-wrap justify-center gap-8 mt-12">
        {principlesData.map((principle, index) => (
          <div
            key={index}
            className="
              relative h-[300px] md:h-[340px] lg:h-[380px] 
              w-full md:w-[48%] lg:w-[30%] 
              rounded-xl
            "
          >
            <div
              className={`absolute inset-0 rounded-xl p-[0.5px] hidden lg:block ${principle.gradient}`}
            >
              <div className="relative h-full w-full bg-black rounded-xl p-8 flex flex-col items-center justify-between">
                {/* Icon */}
                <div className="h-20 flex items-center justify-center">
                  <Image
                    src={principle.icon}
                    alt={principle.title}
                    width={principle.iconWidth}
                    height={85}
                    className="mx-auto object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 flex flex-col justify-center mt-4">
                  <h3 className="text-white text-center text-lg md:text-xl lg:text-2xl font-anton">
                    {principle.title}
                  </h3>
                  <h5 className="text-[#cacaca] text-sm md:text-base lg:text-lg leading-6 font-extralight text-center mt-2">
                    {principle.desc}
                  </h5>
                </div>
              </div>
            </div>
            <div className="lg:hidden relative h-full w-full bg-black border-[0.25px] border-[#FCD901] rounded-xl p-8 flex flex-col items-center justify-between">
                {/* Icon */}
                <div className="h-20 flex items-center justify-center">
                  <Image
                    src={principle.icon}
                    alt={principle.title}
                    width={principle.iconWidth}
                    height={85}
                    className="mx-auto object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 flex flex-col justify-center mt-4">
                  <h3 className="text-white text-center text-lg md:text-xl lg:text-2xl font-anton">
                    {principle.title}
                  </h3>
                  <h5 className="text-[#cacaca] text-sm md:text-base lg:text-lg leading-6 font-extralight text-center mt-2">
                    {principle.desc}
                  </h5>
                </div>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Principles;
