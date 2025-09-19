import Image from "next/image";
import React from "react";

const principlesData = [
    {
        icon:"/icons/Human-Centric-Innovation.svg",
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
    <section className="my-48 flex flex-col justify-center items-center">
      <div className="w-2xl mx-auto text-center space-y-4">
        <h1 className="font-anton text-[#FCD901] text-2xl md:text-3xl lg:text-3xl">
          Our Guiding Principles{" "}
          <span className="text-white">Our Core Values</span>
        </h1>
        <p className="text-white text-sm lg:text-base leading-relaxed">
          Our values are the bedrock of our culture and the blueprint for our
          actions. They guide every
          <br />
          decision we make and every technology we create.
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-8 mt-12">
        {principlesData.map((principle, index) => (
          <div
            key={index}
            className="
              relative h-[300px] rounded-xl 
              w-full 
              md:w-1/3 
              lg:w-1/4
            "
          >
            <div
              className={`absolute inset-0 rounded-xl p-[0.5px] ${principle.gradient}`}
            >
              <div className="relative h-full w-full bg-black rounded-xl p-8 flex flex-col items-center justify-between">
                <div className="h-20 flex items-center justify-center">
                  <Image
                    src={principle.icon}
                    alt={principle.title}
                    width={principle.iconWidth}
                    height={85}
                    className="mx-auto object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center mt-4">
                  <p className="text-white text-center text-xl font-anton">
                    {principle.title}
                  </p>
                  <p className="text-[#cacaca] text-base leading-6 font-extralight text-center mt-2">
                    {principle.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Principles;
