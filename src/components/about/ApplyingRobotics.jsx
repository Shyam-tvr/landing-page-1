"use client";
import Image from "next/image";
import React from "react";

const images = [
  "/about/products/product1.png",
  "/about/products/product2.png",
  "/about/products/product3.png",
  "/about/products/product4.png",
  "/about/products/product5.png",
  "/about/products/product6.png",
  "/about/products/product7.png",
  "/about/products/product8.png",
  "/about/products/product9.png",
  "/about/products/product10.png",
  "/about/products/product11.png",
  "/about/products/product12.png",
  "/about/products/product13.png",
  "/about/products/product14.png",
  "/about/products/product15.png",
];

const ApplyingRobotics = () => {
  const half = Math.ceil(images.length / 2);
  const firstRow = images.slice(0, half);
  const secondRow = images.slice(half);

  return (
    <section>
      {/* Text */}
      <div className="flex flex-col md:flex-row gap-8 px-6 md:px-12 lg:px-24 py-16 lg:py-32 ">
        <div className="md:flex-5">
          <h1 className="font-anton text-[#FCD901] text-2xl md:text-4xl">
            Applying Robotics
          </h1>
          <h2 className="font-anton text-white text-xl md:text-3xl mt-2">
            to Elevate Humanity
          </h2>
        </div>
        <div className="md:flex-7 space-y-6">
          <h4 className="text-white text-justify leading-relaxed">
            At our core, Genrobotics is a robotics company with a profound
            mission: to leverage our deep knowledge in robotics and AI to solve
            critical challenges across different sectors. Our goal is to make
            life better, safer, and easier for everyone. We see robotics not
            just as machines, but as partners in human progress.
          </h4>
          <h4 className="text-white text-justify leading-relaxed">
            This vision drives us to explore new frontiers, from enhancing urban
            sanitation to pioneering medical rehabilitation and ensuring
            industrial safety. By adapting our core technologies for diverse
            applications, we aim to build a future where innovation serves
            humanity in every sphere of life.
          </h4>
        </div>
      </div>

      {/* Row 1 */}
      <div className="marquee mb-4">
        <div className="marquee-track">
          {[...firstRow, ...firstRow].map((src, i) => (
            <div key={`row1-${i}`} className="marquee-item">
              <div className="w-64 md:w-80 lg:w-96 aspect-[16/9] relative rounded-lg overflow-hidden">
                <Image src={src} alt={`product-${i + 1}`} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="marquee">
        <div className="marquee-track marquee-right">
          {[...secondRow, ...secondRow].map((src, i) => (
            <div key={`row2-${i}`} className="marquee-item">
              <div className="w-64 md:w-80 lg:w-96 aspect-[16/9] relative rounded-lg overflow-hidden">
                <Image src={src} alt={`product-${half + i + 1}`} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplyingRobotics;
