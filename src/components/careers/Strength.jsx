"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const Strength = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const itemRefs = useRef([]); // store refs for each scrollable item

  const data = [
    {
      image: "/careers/workers.png",
      desc: "We encourage curiosity and experimentation to find the best solutions.",
      title: "Innovation-driven",
    },
    {
      image: "/careers/workers.png",
      desc: "We encourage curiosity and experimentation to find the best solutions.",
      title: "Purpose-led",
    },
    {
      image: "/careers/workers.png",
      desc: "We encourage curiosity and experimentation to find the best solutions.",
      title: "Collaborative Spirit",
    },
    {
      image: "/careers/workers.png",
      desc: "We encourage curiosity and experimentation to find the best solutions.",
      title: "Ownership & Accountability",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is most visible at the top
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const index = Number(visible[0].target.dataset.index);
          setActiveIndex(index);
        }
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.9, // 60% of item visible
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (observer) {
        itemRefs.current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <section className="px-12 h-screen">
      {/* --- Top 3 reasons --- */}
      <div className="w-full h-fit flex my-12">
        {/* ... your existing top 3 cards ... */}
      </div>

      {/* --- Scroll + Active Titles --- */}
      <div className="flex gap-4 my-16">
        <ul className="flex-5 list-none space-y-8">
          {data.map(({ title }, i) => (
            <li
              key={i}
              className={`font-anton text-2xl tracking-wide ${
                activeIndex === i ? "text-[#FCD901]" : "text-white"
              }`}
            >
              {title}
            </li>
          ))}
        </ul>
        <div className="flex-7 space-y-8">
          <div>
            <h1 className="font-anton text-white ">
              Our Culture is <span className="text-[#FCD901]">Our Strength</span>
            </h1>
            <h4 className="text-white">Navigating Hazards and Regulations</h4>
            <h5 className="text-white my-4">
              We foster a culture rooted in innovation, collaboration, and
              purpose. Our diverse team of thinkers, creators, and problem
              solvers is united by a shared mission.
            </h5>
          </div>

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="space-y-8 h-[36rem] overflow-y-scroll"
          >
            {data.map((item, i) => (
              <div
                key={i}
                data-index={i}
                ref={(el) => (itemRefs.current[i] = el)}
                className="space-y-2"
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="rounded-lg"
                  />
                </div>
                <p className="text-white">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strength;
