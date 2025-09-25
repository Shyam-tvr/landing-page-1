"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";

const latestNews = {
  heading: "Kerala start-up has tech solution to sewer deaths",
  date: "Nov 19, 2017",
  news: "Despite legal bans, Supreme Court interventions, and other measures against manual scavenging, the continues in India........",
  image: "/news/articles/article1.png",
  link: ""
};

const news = [
  {
    heading: "Kerala start-up has tech solution to sewer deaths",
    date: "Nov 19, 2017",
    news: "Despite legal bans, Supreme Court interventions, and other measures against manual scavenging, the continues in India........",
    image: "/news/articles/article1.png",
    link: ""
  },
  {
    heading: "Kerala start-up has tech solution to sewer deaths",
    date: "Nov 19, 2017",
    news: "Despite legal bans, Supreme Court interventions, and other measures against manual scavenging, the continues in India........",
    image: "/news/articles/article1.png",
    link: ""
  },
  {
    heading: "Kerala start-up has tech solution to sewer deaths",
    date: "Nov 19, 2017",
    news: "Despite legal bans, Supreme Court interventions, and other measures against manual scavenging, the continues in India........",
    image: "/news/articles/article1.png",
    link: ""
  },
  {
    heading: "Kerala start-up has tech solution to sewer deaths",
    date: "Nov 19, 2017",
    news: "Despite legal bans, Supreme Court interventions, and other measures against manual scavenging, the continues in India........",
    image: "/news/articles/article1.png",
    link: ""
  },
  {
    heading: "Kerala start-up has tech solution to sewer deaths",
    date: "Nov 19, 2017",
    news: "Despite legal bans, Supreme Court interventions, and other measures against manual scavenging, the continues in India........",
    image: "/news/articles/article1.png",
    link: ""
  }
];

const Articles = () => {
  const imgRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState(0);

  useEffect(() => {
    if (imgRef.current) {
      setLeftHeight(imgRef.current.offsetHeight);
      console.log(imgRef.current.offsetHeight);
      
    }
  }, []);

  return (
    <section className="px-12 py-12">
      <h1 className="font-anton text-white text-center">
        Explore <span className="text-[#FCD901]">Our Latest Articles</span>
      </h1>
      <div className="flex gap-8 mt-12">
        {/* Left Section */}
        <div className="flex-5 relative" >
          <div ref={imgRef} className="relative w-full aspect-square">
            <Image src={latestNews.image} alt={latestNews.heading} fill />
          </div>
          <div className="absolute inset-0 justify-end flex flex-col p-4 max-w-lg aspect-square bg-gradient-to-b from-black/0 to to-black/80">
            <h2 className="text-white font-anton">{latestNews.heading}</h2>
            <div className="flex gap-2">
              <Image
                src="/icons/clock.svg"
                alt="clock"
                width={20}
                height={20}
              />
              <h5 className="text-white">{latestNews.date}</h5>
            </div>
            <h5 className="text-[#999999]">{latestNews.news}</h5>
          </div>
        </div>

        {/* Right Section with scroll */}
        <div className="flex-7 space-y-4 overflow-y-auto pr-2 overflow-scroll" style={{height:leftHeight}}>
          {news.map((item, i) => (
            <div key={i} className="flex bg-[#121212] rounded-xl shrink-0">
              <div className="relative w-1/3 aspect-video rounded-xl">
                <Image
                  src={item.image}
                  alt={item.heading}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="px-6 my-auto flex-1">
                <h4 className="text-white leading-6">{item.heading}</h4>
                <div className="flex gap-2 items-end">
                  <Image
                    src="/icons/clock.svg"
                    alt="clock"
                    width={20}
                    height={20}
                  />
                  <p className="text-white font-thin text-sm mt-2">
                    {item.date}
                  </p>
                </div>
                <div className="mt-4">
                  <Link href={item.link} className="text-[#FCD901]">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
