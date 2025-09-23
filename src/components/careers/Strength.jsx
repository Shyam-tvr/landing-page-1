import Image from "next/image";
import React from "react";

const Strength = () => {
    const data = [
        {
            image:"/careers/workers.png",
            desc:" We encourage curiosity and experimentation to find the best solutions."
        },
        {
            image:"/careers/workers.png",
            desc:" We encourage curiosity and experimentation to find the best solutions."
        },
        {
            image:"/careers/workers.png",
            desc:" We encourage curiosity and experimentation to find the best solutions."
        }
    ]
  return (
    <section className="px-12 h-screen overflow-hidden">
      <div className="w-full h-fit flex my-12">
        <div className="flex-1 space-y-4 p-4">
          <div className="relative w-24 h-24 mx-auto">
            <Image
              src="/careers/reason1.svg"
              alt="Pioneering Technology"
              fill
            />
          </div>
          <h4 className="text-[#FCD901] text-center">Pioneering Technology</h4>
          <p className="text-base text-white text-justify">
            Work at the forefront of robotics, AI, and IoT. Develop solutions
            that solve critical real-world problems and push the boundaries of
            technology.
          </p>
        </div>
        <div className="w-px h-72 bg-gradient-to-b from-black/0 via-[#FCD901] to-black/0 mx-2"></div>
        <div className="flex-1 space-y-4 p-4">
          <div className="relative w-24 h-24 mx-auto">
            <Image
              src="/careers/reason2.svg"
              alt="Meaningful Social Impact"
              fill
            />
          </div>
          <h4 className="text-[#FCD901] text-center">
            Meaningful Social Impact
          </h4>
          <p className="text-base text-white text-justify">
            Contribute to our mission of eliminating manual scavenging and
            creating safer working conditions. Your work directly saves lives
            and restores human dignity.
          </p>
        </div>
        <div className="w-px h-72 bg-gradient-to-b from-black/0 via-[#FCD901] to-black/0 mx-2"></div>
        <div className="flex-1 space-y-4 p-4">
          <div className="relative w-24 h-24 mx-auto">
            <Image src="/careers/reason3.svg" alt="Exceptional Growth" fill />
          </div>
          <h4 className="text-[#FCD901] text-center">Exceptional Growth</h4>
          <p className="text-base text-white text-justify">
            We believe in nurturing talent. Benefit from a collaborative
            environment, continuous learning opportunities, and a clear path for
            career progression.
          </p>
        </div>
      </div>
      <div className="flex gap-4 my-16">
        <ul className="flex-5 list-none space-y-8">
          <li className="font-anton text-2xl tracking-wide text-[#FCD901]">
            Innovation-driven
          </li>
          <li className="font-anton text-xl tracking-wide text-white">
            Purpose-led
          </li>
          <li className="font-anton text-xl tracking-wide text-white">
            Collaborative Spirit
          </li>
          <li className="font-anton text-xl tracking-wide text-white">
            Ownership & Accountability
          </li>
        </ul>
        <div className="flex-7 space-y-8">
          <div>
            <h1 className="font-anton text-white ">
              Our Culture is{" "}
              <span className="text-[#FCD901]">Our Strength</span>
            </h1>
            <h4 className="text-white">Navigating Hazards and Regulations</h4>
            <h5 className="text-white my-4">
              We foster a culture rooted in innovation, collaboration, and
              purpose. Our diverse team of thinkers, creators, and problem
              solvers is united by a shared mission.
            </h5>
          </div>
          <div className="space-y-4">
            {
                data.map((item, i)=>(
                    <div key={i} className="space-y-2">
                        <div className="relative w-full aspect-16/9">
                            <Image
                                src={item.image}
                                alt=""
                                fill
                                className="rounded-lg"
                            />
                        </div>
                        <p className="text-white">{item.desc}</p>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strength;
