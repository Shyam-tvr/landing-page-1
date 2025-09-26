"use client";
import { useState } from "react";

const JobSearch = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="px-4 py-12 md:px-12">
      <h1 className="font-anton text-white text-center">
        Begin Your Search{" "}
        <span className="text-[#FCD901] block md:inline">For Greater Opportunities</span>
      </h1>
      <form className="p-6 mt-12 bg-gradient-to-r from-black/0 to-[#FCD901]/15 rounded-lg">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-10">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 space-y-2">
              <div className="flex-1 space-y-2">
                <label className="text-white block">Search by Keyword</label>
                <input className="bg-white w-full" />
              </div>
              <div className="flex-1 space-y-2">
                <label className="text-white block">Search by Location</label>
                <input className="bg-white w-full" />
              </div>
            </div>
            <p
              className="text-gray-400 text-xs cursor-pointer mt-4 md:mt-0"
              onClick={() => setShowMore(!showMore)}
            >
              Show More Options
            </p>
          </div>
          <div className="flex-2 flex flex-col justify-end">
            <button className="text-[#FCD901] px-3 py-2 bg-black rounded-lg">
              Search Jobs
            </button>
            <p className="text-gray-400 text-xs mt-2">Clear</p>
          </div>
        </div>
        <div className={showMore ? "" : "hidden"}>
          <hr className="mt-4 mb-2" />
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col md:flex-row flex-10 gap-8 space-y-2 mr-8">
              <div className="flex-1 space-y-2">
                <label className="text-white block">Search by Keyword</label>
                <input className="bg-white w-full" />
              </div>
              <div className="flex-1 space-y-2">
                <label className="text-white block">Search by Location</label>
                <input className="bg-white w-full" />
              </div>
            </div>
            <div className="flex-2"></div>
          </div>
        </div>
      </form>
      <div className="mt-24">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.417846033399!2d76.87872427526023!3d8.555757191487888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05befaeabb885f%3A0x486c83afdd2a6d65!2sGenrobotic%20Innovations%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1751174302919!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default JobSearch;
