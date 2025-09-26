import Image from "next/image";
import React from "react";

const Form = () => {
  return (
    <section className="px-4 md:px-12 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h1 className="font-anton text-[#FCD901] mb-4">
            Leave <span className="text-white">A Message</span>{" "}
          </h1>
          <form className="">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <input
                  type="text"
                  placeholder="First Name"
                  className="flex-1 bg-[#121212] px-4 py-2 text-white placeholder-gray-400 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="flex-1 bg-[#121212] px-4 py-2 text-white placeholder-gray-400 rounded-lg"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#121212] px-4 py-2 text-white placeholder-gray-400 rounded-lg"
              />
              <textarea
                name=""
                id=""
                placeholder="Message..."
                className="w-full bg-[#121212] px-4 py-2 text-white placeholder-gray-400 rounded-lg"
                rows={6}
              ></textarea>
            </div>
            <button className="bg-[#FCD901] px-8 py-2 rounded-lg mt-4">
              Submit{" "}
            </button>
          </form>
        </div>
        <div className="flex-1 aspect-video">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.417846033399!2d76.87872427526023!3d8.555757191487888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05befaeabb885f%3A0x486c83afdd2a6d65!2sGenrobotic%20Innovations%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1751174302919!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Form;
