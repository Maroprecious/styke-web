"use client";

import { useState } from "react";
import Carousel from "react-simply-carousel";
import { poppins } from "../../public/fonts";
import { Services } from "@/list";
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Image from "next/image";
import { Button } from "./button";
import { Testimonial } from "./testimonial";
export const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const List = [
    {
      img: "/assets/png/img1.png",
    },
    {
      img: "/assets/png/img2.png",
    },
    {
      img: "/assets/png/image3.png",
    },
  ];
  return (
    <div className="w-full ">
      <h1
        className={`${poppins.className} pt-8 text-[70px] text-center leading-[-6rem] mx-auto text-black font-bold`}
      >
        Simplify Your Life
      </h1>
      <h1
        className={`${poppins.className} text-[65px] pb-2 text-center mt-[-1.7rem] mx-auto text-black font-bold`}
      >
        Your <span className="gradient-text">All-in-One</span> Solution!
      </h1>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "none",
          },
        }}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        itemsToShow={2}
        speed={200}
        autoplay={true}
        centerMode
      >
        {List.map((item, index) => (
          <div
            style={{
              width: 900,
              height: 500,
              border: "15px solid white",
              textAlign: "center",
              lineHeight: "200px",
              boxSizing: "border-box",
            }}
            key={index}
          >
            <img src={item.img} style={{ width: "100%" }} />
          </div>
        ))}
      </Carousel>
      <div className="bg-line pb-6 mt-6 w-full bg-cover bg-top h-full">
        <div className="flex flex-col justify-center items-center">
          <h4
            className={`${poppins.className} pt-24 text-center text-[35px] text-lightblue font-semibold`}
          >
            What We Do
          </h4>
          <div className="border-b-[3px] rounded-[.4rem] w-[100px] border-b-red" />
          <div className="flex flex-col w-[85%] max-w-[1200px] gap-[16rem] pt-20 mx-auto justify-center items-center">
            {Services.map((ele, id) => (
              <div
                key={id}
                className={`${
                  id === 1
                    ? "flex flex-row-reverse justify-center items-center gap-12"
                    : "flex justify-center items-center gap-12"
                }`}
              >
                <Image alt="" src={ele.img} width={500} height={514} />
                <div>
                  <p className="text-black text-[40px] font-bold leading-[2.7rem]">
                    {ele.name}
                  </p>
                  <p className="text-black text-[20px] font-light mt-4">
                    {ele.text}
                  </p>
                  <div className="w-[40%] mt-12">
                    <Button color="#FF3D00" title={ele.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white w-full h-full pb-12">
        <div className="flex flex-col justify-center items-center ">
          <h4
            className={`${poppins.className} pt-24 text-center text-[35px] text-lightblue font-semibold`}
          >
            Who Are We
          </h4>
          <div className="border-b-[3px] rounded-[.4rem] w-[100px] border-b-red" />
        </div>
        <div
          className={"flex justify-center items-center gap-12 w-[85%] mx-auto mt-16"}
        >
          <Image alt="" src="/assets/svg/about.svg" width={500} height={514} />
          <div>
            <p className="text-black text-[40px] font-bold leading-[2.7rem]">
              About Styke
            </p>
            <p className="text-black text-[20px] font-light mt-4">
              Welcome to Styke, where possibilities converge and opportunities
              unfold. We are more than just a platform; we are architects of
              connections, curators of adventures, and facilitators of
              transformative experiences.
            </p>
            <p className="text-black text-[20px] font-light mt-4">
              At Styke, we envision a world where individuals seamlessly connect
              with domestic job opportunities, find like-minded travel
              companions, and discover incredible deals through distress sales –
              all in one unified space. Our platform is the bridge that spans
              professional growth, personal exploration, and budget-friendly
              shopping.
            </p>
          </div>
        </div>
      </div>
      <Testimonial />
    </div>
  );
};
