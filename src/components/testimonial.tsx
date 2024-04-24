"use client";

import { useState } from "react";
import { poppins } from "../../public/fonts";
import Carousel from "react-simply-carousel";
import { review } from "@/list";
import Image from "next/image";

export const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="pb-16">
      <h4
        className={`${poppins.className} pl-[7.5%] pt-24 text-justify text-[35px] text-lightblue font-semibold`}
      >
        Testimonial
      </h4>
      <p className="text-black pl-[7.5%] mb-8 mt-8 text-[40px] font-bold leading-[2.7rem]">
        What Our Clients Says
        <br /> About Us
      </p>
      {/* <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "flex-start",
            userSelect: "none",
            paddingLeft: "5%",
            marginTop: "2rem",
          },
        }}
        preventScrollOnSwipe
        activeSlideIndex={activeSlide}
        autoplay={true}
        onRequestChange={setActiveSlide}
        dotsNav={{
          show: true,

          itemBtnProps: {
            style: {
              marginTop: "20px",
              height: 5,
              width: 40,
              borderRadius: "10%",
              border: "3px solid #D9D9D9",
              background: "#D9D9D9",
              marginLeft: "3px",
            },
          },
          activeItemBtnProps: {
            style: {
              marginTop: "20px",
              height: 5,
              width: 40,
              borderRadius: "10%",

              background: "#FF3D00",
              marginLeft: "4px",
            },
          },
        }}
        itemsToShow={3}
        speed={400}
      >
        <div className="flex mt-[40px]">
        {review.map((item, index) => (
          <div >
              <img
                alt=""
                src={item.img as any}
                style={{
                  width: "100px",
                  borderRadius: "50%",
                  height: "100px",
                  objectFit: "cover",
                  objectPosition: "top",
                  position: 'absolute',
                  top: '-10%',
                  zIndex: 2000
                }}
              />
            <div
              className="bg-[#4285F4] relative w-[400px] h-[260px] rounded-[.7rem]"
              key={index}
            >
              <p> {item.text}</p>
            </div>
          </div>
        ))}
        </div>
      </Carousel> */}
    </div>
  );
};
