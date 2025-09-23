"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const milestones = [
  { year: "2015", img: "/about/milestones/milestone1.svg", title: "Invention of G1 & G2", subTitle: "" },
  { year: "2017", img: "/about/milestones/milestone2.svg", title: "Genrobotics Founded", subTitle: "" },
  { year: "", img: "/about/milestones/milestone3.svg", title: "Seed Funding", subTitle: "" },
  { year: "2018", img: "/about/milestones/milestone4.svg", title: "Bandicoot 1.0 Launched", subTitle: "(By the Hon'ble Chief Minister of Kerala)" },
  { year: "", img: "/about/milestones/milestone5.svg", title: "Bandicoot 2.0 Launched", subTitle: "(By the Hon'ble Prime Minister of India & UN General Secretary)" },
  { year: "2019", img: "/about/milestones/milestone6.svg", title: "AMRUT 1.0 Award", subTitle: "(Promising Innovative Solution for eliminating Manual Scavening)" },
  { year: "", img: "/about/milestones/milestone7.svg", title: "Entered into Oil and Gas Adjacent Market ", subTitle: "" },
  { year: "2020", img: "/about/milestones/milestone8.svg", title: "Pre - Series A Funding ", subTitle: "(Anand Mahindra, UIV, Sea Fund)" },
  { year: "", img: "/about/milestones/milestone9.svg", title: "National Startup Award", subTitle: "" },
  { year: "2021", img: "/about/milestones/milestone10.svg", title: "A dedicated wing for Medical & Mobility established", subTitle: "" },
  { year: "2022", img: "/about/milestones/milestone11.svg", title: "Series A Funding", subTitle: "" },
  { year: "", img: "/about/milestones/milestone12.svg", title: "Launch of G-Gaiter", subTitle: "" },
  { year: "", img: "/about/milestones/milestone13.svg", title: "Ranked Top 3 AI Startup by MeitY", subTitle: "" },
  { year: "2023", img: "/about/milestones/milestone14.svg", title: "Forbes Asia Award", subTitle: "" },
  { year: "", img: "/about/milestones/milestone15.svg", title: "New Varients of Bandicoot’s for Differents Requirements", subTitle: "" },
  { year: "2024", img: "/about/milestones/milestone16.svg", title: "Portfolio Expansion with Wilboar", subTitle: "" },
  { year: "", img: "/about/milestones/milestone17.svg", title: "Pre Series B Funding", subTitle: "" },
  { year: "", img: "/about/milestones/milestone18.svg", title: "Series B Funding", subTitle: "" },
  { year: "2025", img: "/about/milestones/milestone19.svg", title: "Launch of G-Gaiter Paediatrics", subTitle: "" },
];

const Journey = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [maxX, setMaxX] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);

  // calculate scrollable width
  useEffect(() => {
    const handleResize = () => {
      if (!outerRef.current || !innerRef.current) return;

      const outerWidth = outerRef.current.offsetWidth;
      const innerW = innerRef.current.scrollWidth;
      setInnerWidth(innerW);

      const max = innerW - outerWidth;
      setMaxX(max > 0 ? max : 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!outerRef.current) return;
      const start = outerRef.current.offsetTop;
      const end = start + outerRef.current.offsetHeight - window.innerHeight;
      const scrollY = window.scrollY;

      const p = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={outerRef} className="relative h-[500vh] bg-black">
      <section className="sticky top-0 h-screen overflow-hidden text-white flex flex-col justify-around">
        {/* Heading */}
        <div className="w-full flex justify-center mt-12 md:mt-16 lg:mt-24 z-20">
          <h1 className="text-white tracking-wide text-center font-anton">
            <span className="block text-6xl md:text-7xl lg:text-9xl text-[#FCD901]">10+ </span>
            Years of Remarkable Journey
          </h1>
        </div>

        {/* Timeline container */}
        <motion.div
          ref={innerRef}
          className="flex h-full items-center relative mt-24"
          animate={{ x: -progress * maxX }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          {/* Timeline line — full width of milestones */}
          <div
            className="absolute top-1/2 left-0 h-[2px] bg-[#FCD901]"
            style={{ width: `${innerWidth}px` }}
          />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-64 md:w-72 flex flex-col items-center mx-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              {/* Year + Image */}
             <div className="absolute bottom-6 flex flex-col items-center">
              <div className="relative flex flex-col items-center">
                <p className="absolute -top-6 w-full text-5xl text-center font-anton text-[#FCD901] tracking-wider">
                  {milestone.year}
                </p>

                {/* Fixed-size image wrapper */}
                <div className="relative h-24 md:h-32 aspect-16/9 mt-4 z-10">
                  <Image
                    src={milestone.img}
                    alt={milestone.year}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Point on timeline */}
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-black z-10" />

            {/* Title + Subtitle below line */}
            <div className="absolute top-[60%] mt-6 flex flex-col items-center space-y-2">
              <p className="text-center text-white font-semibold text-sm md:text-base">
                {milestone.title}
              </p>
              <p className="text-center text-gray-300 text-xs md:text-sm max-w-xs">
                {milestone.subTitle}
              </p>
            </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Journey;

