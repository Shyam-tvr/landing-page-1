"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import VerticalCarousel from "./VerticalCarousel";
import HorizontalCarousel from "./HorizontalCarousel";

const foundations = [
  {
    id: "1",
    src: "/home/foundations/foundation1.png",
    alt: "Nagarcoil-city",
  },
  {
    id: "2",
    src: "/home/foundations/foundation2.jpg",
    alt: "Nagarcoil-city",
  },
  {
    id: "3",
    src: "/home/foundations/foundation3.jpg",
    alt: "Nagarcoil-city",
  },
  {
    id: "4",
    src: "/home/foundations/foundation4.jpg",
    alt: "Nagarcoil-city",
  },
  {
    id: "5",
    src: "/home/foundations/foundation5.jpg",
    alt: "Nagarcoil-city",
  },
  {
    id: "6",
    src: "/home/foundations/foundation6.jpg",
    alt: "Nagarcoil-city",
  },
  {
    id: "7",
    src: "/home/foundations/foundation7.jpg",
    alt: "Nagarcoil-city",
  },
  {
    id: "8",
    src: "/home/foundations/foundation8.jpg",
    alt: "Nagarcoil-city",
  },
  {
    id: "9",
    src: "/home/foundations/foundation9.jpg",
    alt: "Nagarcoil-city",
  },
  {
    id: "10",
    src: "/home/foundations/foundation10.jpg",
    alt: "Nagarcoil-city",
  },
  {
    id: "11",
    src: "/home/foundations/foundation11.jpg",
    alt: "Nagarcoil-city",
  },
  {
    id: "12",
    src: "/home/foundations/foundation12.jpg",
    alt: "Nagarcoil-city",
  },
  {
    id: "13",
    src: "/home/foundations/foundation13.jpg",
    alt: "Nagarcoil-city",
  },
  {
    id: "14",
    src: "/home/foundations/foundation14.jpg",
    alt: "Nagarcoil-city",
  },
  {
    id: "15",
    src: "/home/foundations/foundation15.jpg",
    alt: "Nagarcoil-city",
  },
  {
    id: "16",
    src: "/home/foundations/foundation16.jpg",
    alt: "Nagarcoil-city",
  },
]


function Foundation() {

  return (
    <section className="my-12">
      <div className="container mx-auto">
        <div className="px-8 flex flex-col-reverse lg:flex-row">
          <div className="w-1/2 h-auto hidden lg:block">
            <VerticalCarousel items={foundations} />
          </div>
          <div className="w-full h-auto flex lg:hidden">
            <HorizontalCarousel items={foundations} />
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