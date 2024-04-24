'use client'

import { useState } from "react";
import { poppins } from "../../public/fonts";
import { Button } from "./button";

export const Header = () => {
  const [active, setActive] = useState(0);
  const handleActive = (id: number) => {
    setActive(id);
  };
  return (
    <div className="bg-white px-24 py-8 flex justify-between items-center">
      <img
        src="/assets/svg/logo.svg"
        style={{
          width: "10rem",
          objectFit: "cover",
          objectPosition: "center",
          height: "4rem",
        }}
      />
      <div className="flex items-center justify-start gap-[3rem]">
        {["Home", "Services", "About Us"].map((elem, index) => (
          <div key={index} onClick={() => handleActive(index)} className="flex flex-col justify-center items-center">
            <p
              className={
                active === index
                  ? `${poppins.className} text-blue text-[17px] font-normal`
                  : `${poppins.className} text-black text-[17px] font-normal`
              }
            >
              {elem}
            </p>
            {
                active === index && <div className="border-b-[3px] rounded-[.4rem] w-[27px] border-b-red" />
            }
          </div>
        ))}
      </div>
      <Button title="Download App" />
    </div>
  );
};
