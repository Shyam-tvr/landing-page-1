"use client";
import React from "react";
import Image from "next/image";

const content = [
  {
    message:
      "I am happy about the team for inventing a robot to replace Manual Scavenging. As young professionals your commitment to use technology for the social good is worth emulation by others. Digital technology holds tremendous potential for betterment of the people and their lives",
    image: "/home/testmonials/venkaiah.png",
    name: "Shri. Venkaiah Naidu",
    designation: "Hon'ble Former Vice President of India",
  },
  {
    message:
      "I really appreciate the efforts taken by Genrobotics to address the requirements of the medical profession to cater to the needs of PM&R.",
    image: "/home/testmonials/anand-mahindra.png",
    name: "Anand Mahindra",
    designation: "Chairman, Mahindra Group",
  },
];

const Testimonials = () => {
  return (
    <section className="px-4 py-16 md:px-16 2xl:px-0 bg-black container mx-auto">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h1 className="font-anton text-[#FCD901] text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
          Voices of Support{" "}
          <span className="text-white block 2xl:inline">
            What Leaders Are Saying
          </span>
        </h1>
        <p className="text-white text-sm md:text-lg 2xl:text-xl">
          Our values are the bedrock of our culture and the blueprint for our
          actions. They guide every decision we make and every technology we
          create.
        </p>
      </div>

      {/* Scrolling Testimonials */}
      <div className="mt-12 2xl:mt-24 overflow-hidden">
        {/* wider wrapper only on 2xl */}
        <div className="marquee-content">
          <div className="flex gap-8">
            {[...content, ...content].map((item, index) => (
              <div key={index} className="shrink-0">
                <div className="p-6 md:p-8 w-[20rem] md:w-[28rem] lg:w-[36rem] xl:w-[44rem] bg-gradient-to-br from-black/0 to-[#FCD901]/20 rounded-2xl border border-[#FCD901]/50 space-y-6 h-full">
                  <div className="flex flex-col justify-between h-full gap-6">
                    
                    {/* Top quote + message */}
                    <div>
                      <div className="relative w-10 h-10 xl:w-14 xl:h-14">
                        <Image
                          src="/icons/quotes-left.svg"
                          alt="Opening quote"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-white text-sm md:text-base xl:text-xl xl:leading-8 font-quattro mt-4 text-justify">
                        {item.message}
                      </p>
                    </div>

                    {/* Profile + closing quote */}
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="relative w-16 h-16 xl:w-20 xl:h-20 rounded-full overflow-hidden mb-3">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-white font-quattro text-base md:text-lg xl:text-xl">
                          {item.name}
                        </p>
                        <p className="text-white text-xs md:text-sm opacity-80">
                          {item.designation}
                        </p>
                      </div>
                      <div className="relative w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20">
                        <Image
                          src="/icons/quotes-right.svg"
                          alt="Closing quote"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
