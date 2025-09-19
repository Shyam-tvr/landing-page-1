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
    <section className="px-4 md:px-16 py-16 bg-black container mx-auto">
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
                <div className="shrink-0 p-8 w-full md:w-[44rem] bg-gradient-to-br from-black/0 to-[#FCD901]/20 rounded-2xl border-[0.5px] border-[#FCD901] space-y-4 h-full">
                  <div className="w-20 h-20 relative">
                    <Image
                      src="/icons/quotes-left.svg"
                      alt="Quotes-left"
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Message */}
                  <div className="min-h-[9rem]">
                    <p className="text-white text-lg leading-8 font-quattro">
                      {item.message}
                    </p>
                  </div>

                  {/* Profile + right quote */}
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="w-24 h-24 rounded-full overflow-hidden relative mb-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-white text-2xl font-quattro">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
