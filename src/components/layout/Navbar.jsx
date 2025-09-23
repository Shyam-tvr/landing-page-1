"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full z-20 px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 flex items-center justify-between bg-transparent">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/layout/gen-logo.svg"
          alt="logo"
          width={200}
          height={50}
          className="w-32 sm:w-40 md:w-48 lg:w-[250px] h-auto"
          priority={true}
        />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
        <div className="flex space-x-4 lg:space-x-8 px-3 sm:px-4 py-1 bg-[#2b2b2b] rounded-lg">
          <Link href="/#verticals" className="text-white font-thin text-sm sm:text-base">
            Verticals
          </Link>
          <Link href="" className="text-white font-thin text-sm sm:text-base">
            News & Blog
          </Link>
          <Link href="" className="text-white font-thin text-sm sm:text-base">
            Careers
          </Link>
          <Link href="/about" className="text-white font-thin text-sm sm:text-base">
            About Us
          </Link>
        </div>

        {/* Contact button */}
        <Link
          href=""
          className="hidden lg:flex px-3 py-1 bg-[#FCD901] rounded-lg font-medium text-sm"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white focus:outline-none"
        >
          {/* Hamburger icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transform transition-all duration-400 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Menu Links */}
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <Link
            href="#verticals"
            className="text-white font-thin text-xl"
            onClick={() => setIsOpen(false)}
          >
            Verticals
          </Link>
          <Link href="" className="text-white font-thin text-xl" onClick={() => setIsOpen(false)}>
            News & Blog
          </Link>
          <Link href="" className="text-white font-thin text-xl" onClick={() => setIsOpen(false)}>
            Careers
          </Link>
          <Link href="/about" className="text-white font-thin text-xl" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link
            href=""
            className="px-4 py-2 bg-[#FCD901] rounded-lg font-medium text-base"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
