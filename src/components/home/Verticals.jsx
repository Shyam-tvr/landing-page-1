"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const verticalsData = [
  {
    title: "Sanitation Tech",
    desc: "Revolutionizing urban hygiene with the Bandicoot robot, eliminating hazardous confined space cleaning such as manhole, sewage, storm water drain etc. to ensure worker safety and dignity.",
    subtitle: "Step into the revolution",
    img: "/home/clean-tech.png",
    gradient: "bg-gradient-to-b from-[#FCD901] to-[#ffffff00]",
    link: "https://sanitation.genrobotics.com/",
  },
  {
    title: "Medical & Mobility",
    desc: "Our G Gaiter, an advanced robotic gait trainer, empowers patients in neurorehabilitation, helping them regain mobility, independence, and confidence.",
    subtitle: "Explore Healthcare Innovation",
    img: "/home/medical-mobility.png",
    gradient: "bg-gradient-to-t from-[#FCD901] to-[#ffffff00]",
    link: "https://genroboticsmedical.com/",
  },
  {
    title: "Oil & Gas",
    desc: "In collaboration with IOCL, we developed Draco, a robotic solution for cleaning crude oil tanks, enhancing safety and efficiency in the industry.",
    subtitle: "Learn More",
    img: "/home/oil-gas.png",
    gradient: "bg-gradient-to-b from-[#FCD901] to-[#ffffff00]",
    link: "",
  },
  {
    title: "Robotics & AI Research",
    desc: "Through a partnership with Zoho, we are developing humanoid hardware like Genbot and GBot, enhancing India's capabilities in the global robotics landscape.",
    subtitle: "Discover Our Research",
    img: "/home/robotics.png",
    gradient: "bg-gradient-to-t from-[#FCD901] to-[#ffffff00]",
    link: "",
  },
];

const Verticals = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? verticalsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === verticalsData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="verticals"
      className="relative lg:w-full lg:aspect-9/16 px-4 md:px-12 py-8 lg:pt-36"
    >
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
          Our Ecosystem{" "}
          <span className="text-white block md:inline">
            A Hub of innovation
          </span>
        </h1>
        <h4 className="text-white leading-relaxed">
          Genrobotics is more than a company; it's an ecosystem of specialized
          divisions,each tackling critical challenges in its respective industry
        </h4>
      </div>

      {/* Mobile carousel */}
      <div className="relative mt-12 xl:mt-24 container mx-auto md:hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {verticalsData.map((vertical, index) => (
              <div key={index} className="min-w-full px-2 flex-shrink-0">
                <div className="relative min-h-[440px] rounded-xl">
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
                        {vertical.link ? (
                          <Link
                            href={vertical.link}
                            className="text-[#b8ae6a] text-xs my-4 inline-flex items-center hover:underline"
                          >
                            Learn more <span className="ml-1">→</span>
                          </Link>
                        ) : (
                          <p className="text-[#b8ae6a] text-xs my-4 inline-flex items-center cursor-pointer">
                            Learn more <span className="ml-1">→</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation row (Prev - Dots - Next) */}
        <div className="flex justify-center items-center mt-4 space-x-4">
          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="bg-black/50 text-white px-3 py-1 rounded-full"
          >
            ‹
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {verticalsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition ${
                  i === activeIndex ? "bg-[#FCD901]" : "bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="bg-black/50 text-white px-3 py-1 rounded-full"
          >
            ›
          </button>
        </div>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8 mt-12 xl:mt-24 container mx-auto">
        {verticalsData.map((vertical, index) => (
          <div key={index} className="relative min-h-[440px] rounded-xl">
            <div
              className={`absolute inset-0 rounded-xl p-[0.5px] ${vertical.gradient}`}
            >
              <div className="h-full w-full bg-black rounded-xl p-2 flex flex-col">
                <div className="w-full h-48 relative">
                  <Image
                    src={vertical.img}
                    alt={vertical.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between mt-4 mx-2">
                  <div className="space-y-4">
                    <h3 className="text-[#FCD901] text-center uppercase">
                      {vertical.title}
                    </h3>
                    <h5 className="text-[#cacaca] leading-6 font-extralight text-justify">
                      {vertical.desc}
                    </h5>
                  </div>
                  {vertical.link ? (
                    <Link
                      href={vertical.link}
                      className="text-[#b8ae6a] text-xs my-4 inline-flex items-center hover:underline"
                    >
                      Learn more <span className="ml-1">→</span>
                    </Link>
                  ) : (
                    <p className="text-[#b8ae6a] text-xs my-4 inline-flex items-center cursor-pointer">
                      Learn more <span className="ml-1">→</span>
                    </p>
                  )}
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
