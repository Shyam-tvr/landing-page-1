import Image from "next/image";
import React from "react";

const CraftingRobotics = () => {
  return (
    <section className="relative hidden md:block">
      <div className="w-full aspect-16/9 relative">
        <Image
          src="/about/crafting-robotics.png"
          alt="crafting robotics"
          fill
        />
      </div>
      <div className="absolute inset-0 flex flex-col md:px-12 md:py-12 lg:px-24 lg:py-24">
        <h1 className="font-anton text-[#FCD901] ">
          Crafting Robotics and AI Solutions
        </h1>
        <h2 className="font-anton text-white ">
          To Empower and Redefine Possibilities <br /> for Mankind.
        </h2>
      </div>
    </section>
  );
};

export default CraftingRobotics;
