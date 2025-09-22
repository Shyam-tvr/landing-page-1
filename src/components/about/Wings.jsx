import Image from "next/image";
import React from "react";

const Wings = () => {
  return (
    <section className="p-4 md:mx-24 md:my-24 space-y-8">
      <div className="w-fit mx-auto md:space-y-4">
        <h1 className="font-anton text-white text-2xl md:text-3xl text-center mt-12">
          Our <span className="text-[#FCD901]">Specialized Wings</span>
        </h1>
        <h4 className="text-white text-xl text-justify md:text-center">
          We channel our expertise through specialized divisions, each dedicated to a <span className="inline md:block">critical sector where technology can make a profound impact.</span>
        </h4>
      </div>
      <div className="relative w-48 h-48 md:w-72 md:h-72 mb-0 md:mb-4 mx-auto">
        <Image src="/icons/gen-main-logo.svg" alt="" fill />
      </div>
      <div className="flex">
        <div className="relative w-48 h-48 mx-auto">
          <Image src="/icons/gen-sanitization-logo.svg" alt="" fill />
        </div>
        <div className="relative w-48 h-48 mx-auto">
          <Image src="/icons/gen-medical-logo.svg" alt="" fill />
        </div>
        <div className="relative w-48 h-48 mx-auto">
          <Image src="/icons/oil-gas-logo.svg" alt="" fill />
        </div>
        <div className="relative w-48 h-48 mx-auto">
          <Image src="/icons/gen-research-logo.svg" alt="" fill />
        </div>
      </div>
    </section>
  );
};

export default Wings;
