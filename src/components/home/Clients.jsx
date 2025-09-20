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
    <section className="px-4 md:px-16 py-16 2xl:container 2xl:mx-auto">
      <div className="w-full md:w-2xl mx-auto text-center space-y-4">
        <h1 className="font-anton text-[#FCD901] text-2xl md:text-3xl text-center mt-12">
          Our Esteemed Clients{" "}
          <span className="text-white">Across Verticals</span>
        </h1> 
        <p className="text-white text-xl text-centerd">
          We are privileged to partner with a diverse range of organizations across various sectors,
        </p>
      </div>
      <div className="mt-12 overflow-hidden">
        <div className="marquee-content">
          <div className="flex gap-8 items-center">
            {
                [...ClientsData, ...ClientsData].map((item,index)=>(
                    <div key={index}>
                        <Image src={item.icon} alt={`client`} width={item.width} height={item.height}/>
                    </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
