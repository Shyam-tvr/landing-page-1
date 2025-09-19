import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full z-20 px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 flex items-center justify-between">
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

      <div className="flex items-center space-x-4 sm:space-x-4 lg:space-x-8">
        <div className="hidden md:flex space-x-4 sm:space-x-4 lg:space-x-8 px-3 sm:px-4 py-1 bg-[#2b2b2b] rounded-lg">
          <Link
            href="#verticals"
            className="text-white font-thin text-sm sm:text-base scroll-smooth"
          >
            Verticals
          </Link>
          <Link
            href=""
            className="text-white font-thin text-sm sm:text-base"
          >
            News & Blog
          </Link>
          <Link
            href=""
            className="text-white font-thin text-sm sm:text-base"
          >
            Careers
          </Link>
          <Link
            href=""
            className="text-white font-thin text-sm sm:text-base"
          >
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
    </nav>
  );
};

export default Navbar;
