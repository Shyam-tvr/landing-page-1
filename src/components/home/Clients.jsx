import Image from "next/image";
import React from "react";

const ClientsData = [
    {
        icon:"/home/clients/manipal.svg",
        width:380,
        height:122
    },
    {
        icon:"/home/clients/mrpl.svg",
        width:85,
        height:85
    },
    {
        icon:"/home/clients/sehagarden.svg",
        width:256,
        height:82
    },
    {
        icon:"/home/clients/nagpur.svg",
        width:92,
        height:91
    },
    {
        icon:"/home/clients/punarvaas.svg",
        width:286,
        height:92
    },
    {
        icon:"/home/clients/bmc.svg",
        width:82,
        height:82
    },
    {
        icon:"/home/clients/kims.svg",
        width: 243,
        height: 78
    },
    {
        icon:"/home/clients/indianoil.svg",
        width: 70,
        height:83
    }
]

const Clients = () => {
  return (
    <section className="px-4 md:px-16 py-16">
      {/* Heading */}
      <div className="w-full max-w-2xl mx-auto text-center space-y-4 2xl:max-w-4xl">
        <h1 className="font-anton text-[#FCD901] mt-12">
          Our Esteemed Clients{" "}
          <span className="text-white block md:inline">Across Verticals</span>
        </h1>
        <h4 className="text-white">
          We are privileged to partner with a diverse range of organizations
          across various sectors.
        </h4>
      </div>

      {/* Scrolling logos */}
      <div className="mt-12 overflow-hidden">
        <div className="marquee-content 2xl:max-w-[90%] 2xl:mx-auto">
          <div className="flex gap-8 items-center">
            {[...ClientsData, ...ClientsData].map((item, index) => (
              <div key={index} className="shrink-0 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={`client-${index}`}
                  width={item.width}
                  height={item.height}
                  className="object-contain max-h-16 md:max-h-20 2xl:max-h-24"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
