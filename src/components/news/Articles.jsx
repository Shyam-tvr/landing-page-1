"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";

const latestNews = {
  heading: "UP Ghaziabad MC gives demo of manhole-cleaning robot to Adityanath",
  date: "Sep 20,2025",
  news: "Ghaziabad (UP), Sep 20 (PTI) Municipal officials here gave a demonstration of a manhole-cleaning robot, 'Bandicoot', to UP Chief Minister Yogi Adityanath, as per an initiative to modernise and mechanise the city's sanitation infrastructure, prioritising the safety and well-being of sanitation workers.",
  image: "/news/articles/09202025.jpg",
  link: "https://www.theweek.in/wire-updates/national/2025/09/20/des95-up-cleaning-robot.amp.html"
};

const news = [
  {
    heading: "UP Ghaziabad MC gives demo of manhole-cleaning robot to Adityanath",
    date: "Sep 20,2025",
    image: "/news/articles/09202025.jpg",
    link: "https://www.theweek.in/wire-updates/national/2025/09/20/des95-up-cleaning-robot.amp.html"
  },
  {
    heading: "City-based startup win national award for revolutionizing urban sanitation ",
    date: "Sep 16,2024",
    image: "/news/articles/09162024.jpg",
    link: "https://timesofindia.indiatimes.com/city/thiruvananthapuram/city-based-startup-wins-national-award-for-revolutionizing-urban-sanitation/articleshow/113400899.cms"
  },
  {
    heading: "In a first in India, Thiruvananthapuram International Airport to get robotic rover to clean canals",
    date: "Jul 17,2024",
    image: "/news/articles/07172024.jpg",
    link: "https://www.theweek.in/news/biz-tech/2024/07/17/in-a-first-in-india-thiruvananthapuram-international-airport-to-get-robotic-rover-to-clean-canals.html"
  },
  {
    heading: "Genrobotics launches first industrial park in a private college campus in Kerala",
    date: "May 6,2024",
    image: "/news/articles/05062024.avif",
    link: "https://www.newindianexpress.com/states/kerala/2024/May/06/genrobotics-launches-first-industrial-park-in-a-private-college-campus-in-kerala"
  },
  {
    heading: "Founders of Kerala startup Genrobotics featured on Forbes 30 under 30 Asia list	",
    date: "May 24,2023",
    image: "/news/articles/05242023.webp",
    link: "https://english.mathrubhumi.com/features/technology/founders-of-kerala-startup-genrobotics-featured-on-forbes-30-under-30-asia-list-1.8584251"
  },
  {
    heading: "How an Ironman suit inspired Genrobotics to create tech products with a human impact",
    date: "Jan 14,2023",
    image: "/news/articles/01142023.avif",
    link: "https://www.moneycontrol.com/news/business/humans-of-tech-genrobotics-tech-products-with-human-impact-9864911.html"
  },
  {
    heading: "A Robot Might Take His Job — And That's Good News",
    date: "Aug 2,2019",
    image: "/news/articles/08022019.webp",
    link: "https://www.npr.org/sections/goatsandsoda/2019/08/02/697180430/a-robot-might-take-his-job-and-thats-good-news"
  },
  {
    heading: "Modi launches Kerala startup Genrobotic's Bandicoot 2.0 to clean sewers	",
    date: "Oct 2,2018",
    image: "/news/articles/10022018.png",
    link: "https://www.theweek.in/news/biz-tech/2018/10/02/modi-introduces-kerala-startup-genrobotic-bandicoot-2-clean-sewers.html"
  },
  {
    heading: "The first robots clean India's sewers, 25 years after manual scavenging was outlawed",
    date: "Sep 1,2018",
    image: "/news/articles/09012018.jpeg",
    link: "https://www.thehindu.com/society/the-first-robots-clean-indias-sewers-25-years-after-manual-scavenging-was-outlawed/article24841833.ece"
  },
  {
    heading: "Creative Destruction At Its Best: The Death Of Manual Scavenging?	",
    date: "Mar 5,2018",
    image: "/news/articles/03052018.avif",
    link: "https://www.ndtvprofit.com/opinion/creative-destruction-at-its-best-the-death-of-manual-scavenging"
  },
];

const Articles = () => {
  const imgRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState(0);

  console.log(leftHeight);
  

  useEffect(() => {
    if (imgRef.current) {
      setLeftHeight(imgRef.current.offsetHeight);
      console.log(imgRef.current.offsetHeight);
      
    }
  }, []);

  return (
    <section className="px-4 lg:px-12 py-12">
      <h1 className="font-anton text-white text-center">
        Explore <span className="text-[#FCD901]">Our Latest Articles</span>
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 mt-12">
        {/* Left Section */}
        <div className="flex-5 relative" >
          <div ref={imgRef} className="relative w-full aspect-square">
            <Image src={latestNews.image} alt={latestNews.heading} fill />
          </div>
          <div className="absolute inset-0 justify-end flex flex-col p-4 max-w-lg aspect-square bg-gradient-to-b from-black/0 to to-black/80">
            <h3 className="text-white font-anton">{latestNews.heading}</h3>
            <div className="flex gap-2">
              <Image
                src="/icons/clock.svg"
                alt="clock"
                width={20}
                height={20}
              />
              <h5 className="text-white">{latestNews.date}</h5>
            </div>
            <h5 className="text-[#999999] truncate">{latestNews.news}</h5>
          </div>
        </div>

        {/* Right Section with scroll */}
        <div className={`flex-7 space-y-4 max-h-96 lg:max-h-auto overflow-y-scroll pr-2 mt-4 lg:mt-0 `} style={{height:leftHeight}}>
          {news.map((item, i) => (
            <div key={i} className="flex gap-4 flex-col lg:flex-row p-4 bg-[#121212] rounded-xl shrink-0">
              <div className="relative w-full lg:w-1/3 aspect-video rounded-xl">
                <Image
                  src={item.image}
                  alt={item.heading}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className=" my-auto flex-1">
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
