"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Bandicoot 2.0 Launched",
    desc: " Bandicoot 2.0 was launched in the presence of Hon'ble Prime Minister Shri Narendra Modi",
    img: "/home/awards/award1.png",
  },
  {
    id: 2,
    title: "Excellence in Robotics",
    desc: "Awarded for pioneering achievements in robotics automation.",
    img: "/home/awards/award2.png",
  },
  {
    id: 3,
    title: "Global Impact Award",
    desc: "Celebrating our positive influence on global urban hygiene.",
    img: "/home/awards/award3.png",
  },
  {
    id: 4,
    title: "YOUNG CHANGEMAKER AWARD",
    desc: "For inventing the ‘Robotic Technology’",
    img: "/home/awards/award4.png",
  },
  {
    id: 5,
    title: "INFOSYS AAROHAN SOCIAL INNOVATION AWARD",
    desc: "For the Revolutionary Product Bandicoot",
    img: "/home/awards/award5.png",
  },
  {
    id: 6,
    title: "AMRUT TECHNOLOGY AWARD",
    desc: "For Promising Innovative Solution",
    img: "/home/awards/award6.png",
  },
  {
    id: 7,
    title: "BIRAC INNOVATOR AWARD 2024",
    desc: "For inventing the ‘Robotic Technology’",
    img: "/home/awards/award7.png",
  },
  {
    id: 8,
    title: "NATIONAL STARTUP AWARD",
    desc: "For the Revolutionary Product Bandicoot",
    img: "/home/awards/award8.png",
  },
  {
    id: 9,
    title: "YOUNG CHANGEMAKER AWARD 2020",
    desc: "For Promising Innovative Solution",
    img: "/home/awards/award9.png",
  },
  {
    id: 10,
    title: "ET STARTUP AWARDS 2021",
    desc: "For inventing the ‘Robotic Technology’.",
    img: "/home/awards/award10.png",
  },
  {
    id: 11,
    title: "PRIDE OF KERALA AWARD",
    desc: "For the Revolutionary Product Bandicoot",
    img: "/home/awards/award11.png",
  },
  {
    id: 12,
    title: "LEVEL NXT AWARD FOR THE BEST STARTUP",
    desc: "For ‘Promising Innovative Solution",
    img: "/home/awards/award12.png",
  },
  {
    id: 13,
    title: "FICCI AWARD 2019",
    desc: "For inventing the ‘Robotic Technology’",
    img: "/home/awards/award13.png",
  },
  {
    id: 14,
    title: "ASIA INSPIRATION AWARD 2018",
    desc: "For the Revolutionary Product Bandicoot",
    img: "/home/awards/award14.png",
  },
  {
    id: 15,
    title: "ANJANI MASHELKAR INCLUSIVE INNOVATION AWARD",
    desc: "For ‘Promising Innovative Solution",
    img: "/home/awards/award15.png",
  },
];

const Awards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  // Shared responsive sizes for image container
  const imgContainer =
    "relative w-[240px] h-[135px] sm:w-[360px] sm:h-[202px] md:w-[480px] md:h-[270px] lg:w-[640px] lg:h-[360px] xl:w-[800px] xl:h-[450px] 2xl:w-[960px] 2xl:h-[540px]";

  return (
    <section className="my-24 md:my-48 px-4 flex flex-col justify-center items-center">
      {/* Heading */}
      <div className="w-full max-w-6xl mx-auto text-center space-y-4">
        <h1 className="font-anton text-[#FCD901] text-2xl md:text-3xl lg:text-4xl">
          Awards & Recognition
        </h1>
        <h4 className="text-white leading-relaxed">
         Discover the tangible difference Genrobotics' solutions
        </h4>
      </div>

      {/* Carousel */}
      <div className="relative flex flex-col items-center w-full max-w-6xl mx-auto mt-12">
        <div className="relative flex items-center justify-center w-full h-72 md:h-[540px] overflow-hidden">
          {cards.map((card, index) => {
            const position =
              (index - activeIndex + cards.length) % cards.length;

            let baseClasses =
              "absolute rounded-xl shadow-lg overflow-hidden transition-all duration-500 bg-[#1b1b1b] flex flex-col items-center";

            if (position === 0) {
              // Active
              return (
                <div key={card.id} className={`${baseClasses} z-20`}>
                  <div className={`${imgContainer}`}>
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-contain rounded-t-xl"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">{card.desc}</p>
                  </div>
                </div>
              );
            } else if (position === 1) {
              // Next
              return (
                <div
                  key={card.id}
                  className={`${baseClasses} right-0 z-10 scale-90 opacity-70`}
                >
                  <div className={`${imgContainer}`}>
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="p-2 text-center">
                    <h3 className="text-sm font-medium line-clamp-1 text-white">
                      {card.title}
                    </h3>
                  </div>
                </div>
              );
            } else if (position === cards.length - 1) {
              // Previous
              return (
                <div
                  key={card.id}
                  className={`${baseClasses} left-0 z-10 scale-90 opacity-70`}
                >
                  <div className={`${imgContainer}`}>
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="p-2 text-center">
                    <h3 className="text-sm font-medium line-clamp-1 text-white">
                      {card.title}
                    </h3>
                  </div>
                </div>
              );
            }
            return null;
          })}

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 px-3 py-2 bg-black/40 text-white rounded-full hover:bg-black/70 transition"
          >
            ◀
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 px-3 py-2 bg-black/40 text-white rounded-full hover:bg-black/70 transition"
          >
            ▶
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === activeIndex ? "bg-yellow-400" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
