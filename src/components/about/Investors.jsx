import Image from "next/image";
import React from "react";

const investorsData = [
  {
    image: "/about/investors/uiv-founder.png",
    company: "UIV",
    logo: "/about/investors/uiv-logo.svg",
    name: "Bhaskar Majumdar",
    designation: "Founder and Managing Partner",
  },
  {
    image: "/about/investors/zoho-founder.png",
    company: "zoho",
    logo: "/about/investors/zoho-logo.svg",
    name: "Sridhar Vembu",
    designation: "Chief  Founder",
  },
  {
    image: "/about/investors/mahindra-founder.png",
    company: "Mahindra",
    logo: "/about/investors/mahindra-logo.svg",
    name: "Anand Mahindra",
    designation: "Chairperson",
  },
  {
    image: "/about/investors/tally-founder.png",
    company: "Tally",
    logo: "/about/investors/tally-logo.svg",
    name: "Nupur Goenka",
    designation: "Co-Founder",
  },
  {
    image: "/about/investors/edcite-founder.png",
    company: "Edcite",
    logo: "/about/investors/edcite-logo.svg",
    name: "Tony G. Thomas",
    designation: "Co-Founder",
  },
  {
    image: "/about/investors/uiv-founder2.png",
    company: "uiv",
    logo: "/about/investors/uiv-logo.svg",
    name: "Anil Joshy",
    designation: "Founder and Managing Partner",
  },
  {
    image: "/about/investors/seafund-founder.png",
    company: "sea fund",
    logo: "/about/investors/seafund-logo.svg",
    name: "Manoj Kumar Agarwal",
    designation: "Founder and Managing Partner",
  },
  {
    image: "/about/investors/peakxv-founder.png",
    company: "peakxv",
    logo: "/about/investors/peakxv-logo.svg",
    name: "Rajan Anand",
    designation: "Founder and Managing Partner",
  }
];

const Investors = () => {
  return (
    <section className="px-4 md:px-16 py-4">
      <div className="w-fit mx-auto space-y-4">
        <h1 className="font-anton text-white text-2xl md:text-3xl text-center mt-12">
          Our <span className="text-[#FCD901]">Investors</span>
        </h1>
        <div className="w-[70%] mx-auto h-[1px] bg-gradient-to-r from-black/0 via-white to-black"></div>
        <p className="text-white text-xl text-center">
          We’re backed by partners who believe in innovation with purpose, and
          in <br /> creating lasting change together
        </p>
      </div>
      <div className="w-full flex my-12 overflow-scroll gap-8 2xl:justify-center">
        {investorsData.map((investor, index) => (
          <div key={index} className="shrink-0 space-y-4 rounded-2xl overflow-hidden bg-[#E2E2E2]/20">
            {/* Founder Image */}
            <div className="w-72 h-72 relative">
              <Image
                src={investor.image}
                alt={investor.company+" Founder"}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="p-4 space-y-4">
              <div className="w-full h-20 relative">
                <Image
                  src={investor.logo}
                  alt={investor.company + " Logo"}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-center">
                <p className="text-base font-bold text-white">
                  {investor.name}
                </p>
                <p className="text-[10px] text-white">
                  {investor.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Investors;
