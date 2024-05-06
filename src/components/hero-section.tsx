"use client";

import { useState } from "react";
import Carousel from "react-simply-carousel";
import { poppins } from "../../public/fonts";
import { Services } from "@/list";
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Image from "next/image";
import { Button } from "./button";
import { Testimonial } from "./testimonial";
import { Footer } from "./footer";
import { useMediaQuery } from "@/hooks/usemediaquery";
export const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const matches = useMediaQuery("(min-width: 820px)");
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
        className={`${poppins.className} pt-8 text-[35px] lg:text-[70px] text-center leading-[-6rem] mx-auto text-black font-bold`}
      >
        Simplify Your Life
      </h1>
      <h1
        className={`${poppins.className} text-[33px] lg:text-[65px] pb-2 text-center mt-[-.6rem] lg:mt-[-1.7rem] mx-auto text-black font-bold`}
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
        delay={1000}
        itemsToShow={2}
        speed={10000}
        autoplay={false}
        centerMode
        itemsToScroll={2}
      >
        {List.map((item, index) => (
          <div
            style={{
              height: "auto",
              textAlign: "center",
              lineHeight: "200px",
              boxSizing: "border-box",
            }}
            className="lg:w-[900px] w-[300px] md:w-[350px] lg:border-[15px] md:border-[7px] border-[5px] border-white"
            key={index}
          >
            <img
              src={item.img}
              style={{ width: "900px" }}
              className="h-[200px] lg:h-[500px] lg:object-cover object-contain"
            />
          </div>
        ))}
      </Carousel>
      <div className="bg-line pb-6 mt-6 w-full bg-cover lg:bg-top bg-center h-full">
        <div className="flex flex-col justify-center items-center">
          <h4
            className={`${poppins.className} lg:pt-24 pt-6 text-center text-[25px] lg:text-[35px] text-lightblue font-semibold`}
          >
            What We Do
          </h4>
          <div className="border-b-[3px] rounded-[.4rem] w-[100px] border-b-red" />
          <div className="flex flex-col lg:w-[85%] w-[90%] max-w-[1200px]lg:gap-[16rem] gap-[4rem] lg:pt-20 pt-12 mx-auto justify-center items-center">
            {Services.map((ele, id) => (
              <div
                key={id}
                className={`${
                  id === 1
                    ? "flex flex-col md:flex md:flex-col lg:flex-row-reverse justify-center items-center gap-10"
                    : "flex flex-col md:flex md:flex-col lg:flex-row justify-center items-center gap-10"
                }`}
              >
                <div
                  className="bg-cover bg-no-repeat bg-center md:w-[100%] w-full h-[300px] lg:w-[47%] lg:h-[504px] rounded-[1rem]"
                  style={{ backgroundImage: `url(${ele.img})` }}
                />

                <div className="lg:w-[50%] w-[100%]">
                  <p className="text-black lg:text-[40px] md:text-[30px] text-[25px] font-bold leading-[2rem] lg:leading-[2.7rem]">
                    {ele.name}
                  </p>
                  <p className="text-black lg:text-[20px] text-[17px] font-light mt-4">
                    {ele.text}
                  </p>
                  <div className="lg:w-[40%] w-[60%] mt-12">
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
            className={`${poppins.className} lg:pt-24 pt-8 text-center lg:text-[35px] text-[25px] text-lightblue font-semibold`}
          >
            Who Are We
          </h4>
          <div className="border-b-[3px] rounded-[.4rem] w-[100px] border-b-red" />
        </div>
        <div
          className={
            "flex md:flex-col flex-col lg:flex-row justify-center items-center gap-12 lg:w-[85%] w-[90%]  mx-auto mt-16"
          }
        >
          <div
            className="bg-cover bg-no-repeat bg-center w-full lg:w-[47%] lg:h-[504px] h-[300px] rounded-[1rem]"
            style={{ backgroundImage: `url('/assets/svg/about.svg')` }}
          />
          {/* <Image alt="" src="" width={500} height={514} /> */}
          <div className="lg:w-[51%] w-full">
            <p className="text-black lg:text-[40px] md:text-[30px] text-[25px] font-bold leading-[2.7rem]">
              About Styke
            </p>
            <p className="text-black lg:text-[20px] text-[17px] font-light mt-4">
              Welcome to Styke, where possibilities converge and opportunities
              unfold. We are more than just a platform; we are architects of
              connections, curators of adventures, and facilitators of
              transformative experiences.
            </p>
            <p className="text-black lg:text-[20px] text-[17px] font-light mt-4">
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
      <Footer />
    </div>
  );
};
