"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const impactsData = [
  {
    id: 2,
    name: "Shri. Pramod Sawant",
    designation: "Hon'ble Chief Minister of Goa",
    quote:
      "Initiatives like this are a testament to India's technological leadership. I’m proud to see such innovations making a real impact in public service and human dignity.",
    image: "/home/impact.png",
  },
  {
    id: 1,
    name: "Shri. Venkaiah Naidu",
    designation: "Hon'ble Former Vice President of India",
    quote:
      "I am happy about the team for inventing a robot to replace Manual Scavenging. As young professionals your commitment to use technology for the social good is worth emulation by others. Digital technology holds tremendous potential for betterment of the people and their lives.",
    image: "/home/impact.png",
  },
  {
    id: 3,
    name: "Mr. Anand Mahindra",
    designation: "Chairman, Mahindra Group",
    quote:
      "Technology with purpose is the future. This is a brilliant example of using innovation to solve social challenges at scale.",
    image: "/home/impact.png",
  },
];

function Foundation() {
  const [impact, setImpact] = useState(impactsData[1]);

  useEffect(() => {
    if (!impactsData) return;
    setImpact(impactsData[1]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImpact((prev) => {
        const currentIndex = impactsData.findIndex((t) => t.id === prev.id);
        const nextIndex = (currentIndex + 1) % impactsData.length;
        return impactsData[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-12">
      <div className="container mx-auto">
        <div className="px-8 flex flex-col-reverse lg:flex-row">
          <div className="w-full h-auto flex lg:w-1/2 lg:flex-col">
            {impactsData.map((item, index) => (
              <div
                className={`h-52 overflow-hidden grayscale transition-all duration-200 ease-in-out rounded-[20px] scale-[0.8] cursor-pointer border-2 border-[#efefef] hover:grayscale-0 " ${
                  item.id === impact?.id
                    ? "h-80 scale-100 grayscale-0 border-2 border-[#e1b837]"
                    : ""
                }`}
                key={index}
                onClick={() => setImpact(item)}
              >
                <Image
                  fill
                  src={item.image}
                  alt={item.name}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 p-8 h-fit">
            <div className="w-full h-48 relative">
              <Image src="/icons/foundation-logo.svg" alt="" fill />
            </div>
            <div>
              <h1 className="text-center font-anton text-white text-2xl md:text-3xl lg:text-[40px] lg:text-left mt-8">
                Our Social Commitment {" "}
                <span className="lg:block text-[#FCD901]">Genrobotics Foundation</span>
              </h1>
              <div className="w-full h-px bg-gradient-to-r from-black/0 via-[#FCD901] to-black/0 lg:bg-gradient-to-r lg:from-[#FCD901] lg:to-black/0 my-4"></div>
              <p className="text-xl text-white text-justify">
                Through our CSR initiative, we have successfully rehabilitated
                over 6,000 sanitation workers, creating new opportunities and
                enhancing their families' quality of life. The Bandicoot robot
                is now deployed across 19 states and 3 Union Territories,
                transforming sanitation work nationwide.
              </p>
            </div>
            <Link href="#" className=" block mt-8  mx-auto px-4 py-2 rounded-xl bg-[#FCD901] w-fit lg:mx-0">Discover Our Impact</Link>
              {/* <Link href="#" className="p-4 mt-8 rounded-2xl bg-[#FCD901]">Discover Our Impact</Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Foundation;
