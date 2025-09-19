"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import img1 from "@/assets/awards/new/Forbes 30 Under 30 Asia.jpg";
import img2 from "@/assets/awards/AI Game Changers' award GPAI 1.png";
import img3 from "@/assets/awards/new/Swachhata Stratup Challenge.jpg";
import img4 from "@/assets/awards/new/Young Changemaker Award.jpg";
import img5 from "@/assets/awards/INFOSYS AAROHAN SOCIAL INNOVATION AWARD.png";
import img6 from "@/assets/awards/new/AMRUT Technology Award.jpg";
import img7 from "@/assets/awards/new/BIRAC.jpg";
import img8 from "@/assets/awards/new/Modi with Bandicoot to MERGE.jpg";
import img9 from "@/assets/awards/Rectangle (3).png";
import img11 from "@/assets/awards/new/Pride of Kerala.jpg";
import img12 from "@/assets/awards/new/Level Next Award.jpg";
import img13 from "@/assets/awards/new/FICCI Award 2019.jpg";
import img14 from "@/assets/awards/new/Asia Inspiration Award.jpg";
import img15 from "@/assets/awards/new/Anjani Mashelkar Inclusive Innovation Award.jpg";

import Image from "next/image";
import { CustomNextArrow, CustomPrevArrow } from "../CustomArrows";

const awards = [
  {
    img: img2,
    title: "Ranked in Top 3 AI Startup by MeitY",
    subtitle: "For innovation in environmental robotics",
  },
  {
    img: img1,
    title: "Forbes 30 Under 30",
    subtitle: "Recognizing our visionary leadership",
  },
  {
    img: img3,
    title: "SWACHHATA STARTUP CHALLENGE",
    subtitle: "For innovation in environmental robotics.",
  },
  {
    img: img4,
    title: "Awarded for Driving Change in Urban Sanitation",
    subtitle: "Honored by Former Vice President Shri Venkaiah Naidu with the Young Changemaker Award 2020 for our contribution to safe sanitation through Bandicoot",
  },
  {
    img: img5,
    title: "INFOSYS AAROHAN SOCIAL INNOVATION AWARD",
    subtitle: "For the Revolutionary Product Bandicoot",
  },
  {
    img: img6,
    title: "AMRUT Tech Challenge Award 2020",
    subtitle:
      "Recognized by the Ministry of Housing and Urban Affairs for Bandicoot, a breakthrough solution to end manual sewer cleaning.",
  },
  {
    img: img7,
    title: "BIRAC Social Impact Award 2024",
    subtitle:
      "Presented by the Ministry of Science & Technology for the impactful innovations Bandicoot and Mobility+, eliminating manual scavenging and uplifting sanitation workers.",
  },
  {
    img: img8,
    title: "Honored with the National Startup Award 2020",
    subtitle:
      "Awarded in the ‘Campus-Initiated Startups’ category by the Ministry of Commerce and Industry, for Bandicoot — the world’s first robot designed to eliminate human entry into sewers.",
  },
  // {
  //   img: img9,
  //   title: "Young Changemaker Award 2020",
  //   subtitle: "For Promising Innovative Solution",
  // },
  {
    img: img11,
    title: "From Kerala, for the world",
    subtitle: "We’re proud to be honored with the ‘Pride of Kerala’ award — the state’s highest startup recognition — by the Kerala Startup Mission at Huddle Global 2022. Presented by CM Shri Pinarayi Vijayan.",
  },
  {
    img: img12,
    title: "The Level Next Award",
    subtitle:
      "Innovation is just the beginning — scaling impact is the mission. Grateful to receive the Level Next Award, honoring Genrobotics as one of India’s top scale-up champions.",
  },
  {
    img: img13,
    title: "FICCI Best Corporate Initiative Award",
    subtitle:
      "Our mission to end manual scavenging and modernize sanitation earned national recognition, with the FICCI Best Corporate Initiative Award 2019 at the India Sanitation Coalition.",
  },
  {
    img: img14,
    title: "Asia Inspiration Award",
    subtitle:
      "Grateful to IYC for honoring our work in transforming sanitation and replacing manual scavenging with dignity and technology.",
  },
  {
    img: img15,
    title: "Innovation with purpose gets honored",
    subtitle:
      "Thank you, Dr. R.A. Mashelkar and NSIC, for awarding us the Anjani Mashelkar Inclusive Innovation Award 2019 — for Bandicoot and the movement to end manual scavenging.",
  },
];

function Awards() {
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);

  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(window.innerWidth < 1024 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 3,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => {
      setActiveSliderIndex(current);
    },
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="recognitions_sec">
      <div className="container-fluid">
        <div className="lg:px-[90] ">
          <div className="rec_wrapper">
            <h1 className="title">Awards & Recognitions</h1>
            <p className="subtitle">
              Discover the tangible difference Genrobotics' solutions
            </p>
            <br />
            <Slider {...settings}>
              {awards.map((item, idx4) => {
                return (
                  <div className="slider_wrapper_sub" key={idx4}>
                    <div
                      className={
                        idx4 == activeSliderIndex
                          ? "card slider_card slick-center"
                          : "card slider_card"
                      }
                    >
                      <div className="image_wrapper">
                        <Image
                          src={item?.img}
                          width={0}
                          height={0}
                          alt={item?.title}
                        />
                      </div>
                      <h3>{item?.title}</h3>
                      <p>{item?.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;
