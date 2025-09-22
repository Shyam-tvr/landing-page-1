import Image from "next/image";
import React from "react";

const leaders = [
  {
    id: 1,
    image: "/home/leaders/jaleesh.png",
    name: "Jaleesh P",
    designation: "Chief Technical Officer",
  },
  {
    id: 2,
    image: "/home/leaders/afsal.png",
    name: "Afsal Muttikkal",
    designation: "Director of Healthcare Business",
  },
  {
    id: 3,
    image: "/home/leaders/vipin.png",
    name: "VIPIN GOVIND MK",
    designation: "Chief Marketing Officer",
  },
  {
    id: 4,
    image: "/home/leaders/sujodh.png",
    name: "Sujodh k",
    designation: "Chief Software Officer",
  },
  {
    id: 5,
    image: "/home/leaders/abhilash.png",
    name: "ABHILASH k",
    designation: "Chief Financial Officer",
  },
  {
    id: 6,
    image: "/home/leaders/nisha.png",
    name: "Nisha Nair",
    designation: "HR Manager",
  },
];

const Leadership = () => {
  return (
    <section className="py-4 px-4 md:px-16 2xl:px-0 2xl:container 2xl:mx-auto">
      <h1 className="font-anton text-white text-2xl md:text-3xl text-center mt-12">
        Meet <span className="text-[#FCD901]">Our Leadership</span>
      </h1>

      <div className="marquee-wrapper mt-12">
        <div className="marquee-content">
          {[...leaders, ...leaders].map((leader, index) => (
            <div key={index} className="space-y-4 w-fit p-4 shrink-0">
              <div className="w-60 h-60 bg-[#DBDBDB] rounded-full overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={240}
                  height={240}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-base font-bold uppercase">
                  {leader.name}
                </p>
                <p className="text-white text-[10px]">{leader.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
