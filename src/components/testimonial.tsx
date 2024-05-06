"use client";

import { useState } from "react";
import { poppins } from "../../public/fonts";
import { review } from "@/list";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

export const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="pb-16">
      <h4
        className={`${poppins.className} pl-[7.5%] lg:pt-24 pt-4 text-justify lg:text-[35px] text-[25px] text-lightblue font-semibold`}
      >
        Testimonial
      </h4>
      <p className="text-black pl-[7.5%] lg:mb-8 md:mb-4 mt-4 lg:mt-8 md:text-[30px] text-[25px] lg:text-[40px] font-bold leading-[2.7rem]">
        What Our Clients Says
        <br /> About Us
      </p>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="container-class"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="lg:ml-8 ml-2 mr-2 relative"
      >
        {review.map((elem) => (
          <div className="flex flex-col">
            <div className=" z-[200] ml-8 rounded-[50%]">
              <div
                className="bg-cover rounded-[50%] bg-center bg-no-repeat lg:w-[106px] lg:h-[111px] w-[90px] h-[95px] object-cover object-center"
                style={{ backgroundImage: `url(${elem.img})` }}
              />
            </div>
            <div className="bg-[#4285F4] mt-[-3.5rem] relative px-8 rounded-[2rem] h-[265px] lg:h-[310px]">
              <p className="pt-20 text-white lg:text-[14px] text-[11px]">{elem.text}</p>
              <div className="pt-4">
                <p className=" lg:text-[14px] text-[11px] text-white font-bold">{elem.name}</p>
                <p className="text-white  lg:text-[14px] text-[11px]">{elem.job}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
