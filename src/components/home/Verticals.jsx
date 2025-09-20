import Image from "next/image";
import Link from "next/link";
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
    <section id="verticals" className="relative lg:w-full lg:aspect-9/16 px-4 md:px-12 py-8 lg:pt-36">
      {/* Background image */}
      <Image
        src="/home/gbuilding.jpg"
        alt="Verticals background"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* Top content */}
      <div className="w-full md:w-xl lg:w-2xl xl:w-4xl mx-auto text-center space-y-4 md:mt-8">
        <h1 className="font-anton text-[#FCD901] text-2xl md:text-3xl lg:text-3xl">
          Our Ecosystem <span className="text-white">A Hub of innovation</span>
        </h1>
        <h4 className="text-white leading-relaxed">
          Genrobotics is more than a company; it's an ecosystem of specialized
          divisions,each tackling critical challenges in its respective industry
        </h4>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8 mt-12 xl:mt-24 container mx-auto">
        {verticalsData.map((vertical, index) => (
          <div key={index} className="relative min-h-[440px] rounded-xl">
            <div
              className={`absolute inset-0 rounded-xl p-[0.5px] ${vertical.gradient}`}
            >
              <div className="h-full w-full bg-black rounded-xl p-2 flex flex-col">
                {/* Image */}
                <div className="w-full h-48 relative">
                  <Image
                    src={vertical.img}
                    alt={vertical.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                {/* Text content */}
                <div className="flex-grow flex flex-col justify-between mt-4 mx-2">
                  <div className="space-y-4">
                    <h3 className="text-[#FCD901] text-center uppercase">
                      {vertical.title}
                    </h3>
                    <h5 className="text-[#cacaca] leading-6 font-extralight text-justify">
                      {vertical.desc}
                    </h5>
                  </div>

                  {/* Subtitle Link pinned at bottom */}
                  <Link
                    href="#"
                    className="text-[#b8ae6a] text-xs my-4 inline-flex items-center hover:underline"
                  >
                    Learn more <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Verticals;
