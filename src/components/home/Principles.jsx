"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const principlesData = [
  {
    icon: "/icons/human-centric-innovation.svg",
    iconWidth: 86,
    title: "Human-Centric Innovation",
    desc: "Creating technology that enhances lives and values human dignity.",
    gradient: "bg-gradient-to-b from-[#FCD901] to-[#ffffff00]",
  },
  {
    icon: "/icons/commitment-to-safety.svg",
    iconWidth: 68,
    title: "Commitment to Safety",
    desc: "Striving to make industries safer by removing humans from hazardous tasks.",
    gradient: "bg-gradient-to-t from-[#FCD901] to-[#ffffff00]",
  },
  {
    icon: "/icons/handshake.svg",
    iconWidth: 102,
    title: "Integrity & Responsibility",
    desc: "Working with accountability to our clients, communities, and the environment.",
    gradient: "bg-gradient-to-b from-[#FCD901] to-[#ffffff00]",
  },
  {
    icon: "/icons/collaboration.svg",
    iconWidth: 64,
    title: "Collaboration & Inclusivity",
    desc: "Building partnerships that share our commitment to societal advancement.",
    gradient: "bg-gradient-to-b from-[#FCD901] to-[#ffffff00]",
  },
  {
    icon: "/icons/continuos.svg",
    iconWidth: 134,
    title: "Continuous Improvement",
    desc: "Embracing innovation to refine our solutions and adapt to new challenges.",
    gradient: "bg-gradient-to-t from-[#FCD901] to-[#ffffff00]",
  },
];

const Principles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const slideRefs = useRef([]);
  const scrollDebounceRef = useRef(null);

  const scrollToIndex = (idx) => {
    const target = slideRefs.current[idx];
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
      setActiveIndex(idx);
    }
  };

  const handlePrev = () => {
    if (principlesData.length <= 1) return;
    const next =
      activeIndex === 0 ? principlesData.length - 1 : activeIndex - 1;
    scrollToIndex(next);
  };

  const handleNext = () => {
    if (principlesData.length <= 1) return;
    const next =
      activeIndex === principlesData.length - 1 ? 0 : activeIndex + 1;
    scrollToIndex(next);
  };

  const onScroll = () => {
    if (!containerRef.current) return;
    if (scrollDebounceRef.current) clearTimeout(scrollDebounceRef.current);
    scrollDebounceRef.current = setTimeout(() => {
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      let nearest = 0;
      let minDiff = Infinity;
      slideRefs.current.forEach((el, i) => {
        if (!el) return;
        const diff = Math.abs(el.offsetLeft - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          nearest = i;
        }
      });
      setActiveIndex(nearest);
    }, 80);
  };

  useEffect(() => {
    const onResize = () => scrollToIndex(activeIndex);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIndex]);

  return (
    <section className="relative w-full px-4 md:px-12 py-8 lg:pt-24">
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
      {/* Mobile carousel */}
      <div className="relative lg:hidden mt-8">
        <div
          ref={containerRef}
          onScroll={onScroll}
          className="flex overflow-x-auto snap-x snap-mandatory -mx-2 px-2"
        >
          {principlesData.map((principle, index) => (
            <div
              key={index}
              ref={(el) => (slideRefs.current[index] = el)}
              className="snap-start flex-shrink-0 w-full px-2"
            >
              <div className="relative h-[300px] rounded-xl">
                <div
                  className={`absolute inset-0 rounded-xl p-[0.5px] ${principle.gradient} hidden lg:block`}
                />
                <div className="relative h-full w-full rounded-xl p-8 flex flex-col items-center justify-between bg-black border-[0.25px] border-[#FCD901] lg:border-none">
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
                    <h3 className="text-white text-center text-lg md:text-xl lg:text-2xl font-anton">
                      {principle.title}
                    </h3>
                    <h5 className="text-[#cacaca] text-sm md:text-base lg:text-lg leading-6 font-extralight text-center mt-2">
                      {principle.desc}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-4 space-x-4">
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="bg-black/50 text-white px-3 py-1 rounded-full disabled:opacity-40"
            disabled={principlesData.length <= 1}
          >
            ‹
          </button>

          <div className="flex space-x-2">
            {principlesData.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2 h-2 rounded-full transition ${
                  i === activeIndex ? "bg-[#FCD901]" : "bg-gray-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next"
            className="bg-black/50 text-white px-3 py-1 rounded-full disabled:opacity-40"
            disabled={principlesData.length <= 1}
          >
            ›
          </button>
        </div>
      </div>

      {/* Desktop grid */}
      <div className="w-full max-w-6xl lg:flex flex-wrap justify-center gap-8 mt-12 mx-auto hidden ">
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
