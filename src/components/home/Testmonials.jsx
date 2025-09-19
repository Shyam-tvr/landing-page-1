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
    <section className="py-16 px-16 bg-black container xl:mx-auto">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="font-anton text-[#FCD901] text-2xl md:text-3xl">
          Voices of Support{" "}
          <span className="text-white">What Leaders Are Saying</span>
        </h1>
        <p className="text-white text-lg">
          Our values are the bedrock of our culture and the blueprint for our
          actions.
          <br />
          They guide every decision we make and every technology we create.
        </p>
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="marquee-content">
          <div className="flex gap-8">
            {[...content, ...content].map((item, index) => (
              <div key={index} className="px-4">
                <div className="shrink-0 p-8 md:w-[24rem] lg:w-[36rem] xl:w-[44rem] bg-gradient-to-br from-black/0 to-[#FCD901]/20 rounded-2xl border-[0.5px] border-[#FCD901] space-y-4 h-full">
                <div className="flex flex-col h-full justify-between gap-4">
                  <div>
                    <div className="relative md:w-10 md:h-10 lg:w-15 lg:h-15 xl:w-20 xl:h-20 ">
                      <Image
                        src="/icons/quotes-left.svg"
                        alt="Quotes-left"
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Message */}
                    <div className="lg:min-h-[5rem] xl:min-h-[9rem] mt-4">
                      <p className="text-white xl:text-xl xl:leading-8 font-quattro text-justify">
                        {item.message}
                      </p>
                    </div>
                  </div>
                  {/* Profile + right quote */}
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="rounded-full overflow-hidden relative mb-4 w-16 h-16 xl:w-24 xl:h-24 ">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-white font-quattro lg:text-xl xl:text-2xl ">
                        {item.name}
                      </p>
                      <p className="text-white text-xs font-quattro">
                        {item.designation}
                      </p>
                    </div>
                    <div className="w-24 h-24 relative">
                      <Image
                        src="/icons/quotes-right.svg"
                        alt="Quotes-right"
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
