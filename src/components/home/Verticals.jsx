import Image from "next/image";
import React from "react";

const verticalsData = [
  {
    title: "Clean Tech",
    desc: "With the Bandicoot robot, The Worlds First Robotic Scavenger, We are revolutionizing urban hygiene, eleminating manual scavenging, and ensuring worker safety.",
    subtitle: "Step into the revolution",
    img: "/home/clean-tech.png",
    gradient: "bg-gradient-to-b from-[#FCD901] to-[#ffffff00]",
  },
  {
    title: "Medical & Mobility",
    desc: "Our G Gaiter, an advanced robotic gait trainer, empowers patients in neurorehabilitation, helping them regain mobility, independence, and confidence.",
    subtitle: "Explore Healthcare Innovation",
    img: "/home/medical-mobility.png",
    gradient: "bg-gradient-to-t from-[#FCD901] to-[#ffffff00]",
  },
  {
    title: "Oil & Gas",
    desc: "In collaboration with IOCL, we developed Draco, a robotic solution for cleaning crude oil tanks, enhancing safety and efficiency in the industry.",
    subtitle: "Learn More",
    img: "/home/oil-gas.png",
    gradient: "bg-gradient-to-b from-[#FCD901] to-[#ffffff00]",
  },
  {
    title: "Robotics & AI Research",
    desc: "Through a partnership with Zoho, we are developing humanoid hardware like Genbot and GBot, enhancing India's capabilities in the global robotics landscape.",
    subtitle: "Discover Our Research",
    img: "/home/robotics.png",
    gradient: "bg-gradient-to-t from-[#FCD901] to-[#ffffff00]",
  },
];

const Verticals = () => {
  return (
    <section className="relative">
      <Image
        src="/home/g-building.png"
        alt="Verticals background"
        width={1920}
        height={1080}
        className="w-full h-auto z-10"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-30% via-black/0 to-black px-12 py-8 lg:pt-48">
        <div className="w-xl mx-auto text-center space-y-4">
          <h1 className="font-anton text-[#FCD901] text-2xl md:text-3xl lg:text-3xl">
            Our Ecosystem{" "}
            <span className="text-white">A Hub of innovation</span>
          </h1>
          <p className="text-white text-sm lg:text-base leading-relaxed">
            Genrobotics is more than a company; it's an ecosystem of specialized
            divisions,
            <br />
            each tackling critical challenges in it's respective industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-8 mt-12 container mx-auto">
          {verticalsData.map((vertical, index) => (
            <div key={index} className="relative h-[400px] rounded-xl">
              <div
                className={`absolute inset-0 rounded-xl p-[0.5px] ${vertical.gradient}`}
              >
                <div className="relative h-full w-full bg-black rounded-xl p-2 space-y-4">
                  <Image
                    src={vertical.img}
                    alt={vertical.title}
                    width={300}
                    height={200}
                    className="object-cover rounded-lg"
                  />
                  <div className="space-y-4 mx-2">
                    <p className="text-[#FCD901] text-center text-xl uppercase">
                      {vertical.title}
                    </p>
                    <p className="text-[#cacaca] leading-4 text-sm font-extralight">
                      {vertical.desc}
                    </p>
                  </div>
                  <p className="absolute bottom-4 left-4 text-[#b8ae6a] text-xs">
                    {vertical.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
