import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogsData = [
  {
    image: "/news/articles/article1.png",
    title: "Kerala start-up has tech solution to sewer deaths",
    date: "Nov 19, 2017",
    link: "",
  },
  {
    image: "/news/articles/article1.png",
    title: "Kerala start-up has tech solution to sewer deaths",
    date: "Nov 19, 2017",
    link: "",
  },
  {
    image: "/news/articles/article1.png",
    title: "Kerala start-up has tech solution to sewer deaths",
    date: "Nov 19, 2017",
    link: "",
  },
  {
    image: "/news/articles/article1.png",
    title: "Kerala start-up has tech solution to sewer deaths",
    date: "Nov 19, 2017",
    link: "",
  },
  {
    image: "/news/articles/article1.png",
    title: "Kerala start-up has tech solution to sewer deaths",
    date: "Nov 19, 2017",
    link: "",
  },
  {
    image: "/news/articles/article1.png",
    title: "Kerala start-up has tech solution to sewer deaths",
    date: "Nov 19, 2017",
    link: "",
  },
];

const Blogs = () => {
  return (
    <section className="px-4 md:px-12 py-12 space-y-8">
      <h1 className="font-anton text-white">
        Explore <span className="text-[#FCD901]">our Latest Blog</span>
      </h1>
      <div>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((item, i) => (
            <div key={i} className="space-y-4 p-4 bg-[#121212] rounded-xl">
              <div className="relative w-full aspect-16/9">
                <Image
                  src={item.image}
                  alt="item.title"
                  fill
                  className="rounded-lg"
                />
              </div>
              <div>
                <h4 className="text-white leading-6">{item.title}</h4>
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
              </div>
              <div className="mt-4">
                <div className="flex gap-2 items-center">
                  <Link href={item.link} className="text-[#FCD901]">
                    Read More
                  </Link>
                  <Image
                    src="/icons/arrow.svg"
                    alt="clock"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-8 md:hidden">
          {blogsData.slice(0,2).map((item, i) => (
            <div key={i} className="space-y-4 p-4 bg-[#121212] rounded-xl">
              <div className="relative w-full aspect-16/9">
                <Image
                  src={item.image}
                  alt="item.title"
                  fill
                  className="rounded-lg"
                />
              </div>
              <div>
                <h4 className="text-white leading-6">{item.title}</h4>
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
              </div>
              <div className="mt-4">
                <div className="flex gap-2 items-center">
                  <Link href={item.link} className="text-[#FCD901]">
                    Read More
                  </Link>
                  <Image
                    src="/icons/arrow.svg"
                    alt="clock"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 w-fit mx-auto">
          <Link href="" className="px-8 py-2 bg-[#FCD901] rounded-lg">
            View all Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
