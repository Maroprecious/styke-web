"use client";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { poppins } from "../../public/fonts";
export const PlacementExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("top");
  const [active, setActive] = useState(0);
  const handleActive = (id: number) => {
    setActive(id);
  };

  return (
    <>
      <div className="flex justify-between px-4 py-8">
        <img
          src="/assets/svg/logo.svg"
          style={{
            width: "8rem",
            objectFit: "cover",
            objectPosition: "center",
            height: "4rem",
            marginTop: '-1rem'
          }}
        />
        <div onClick={onOpen}>
          <MdMenu size={24}/>
        </div>
      </div>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
          <div className="flex flex-col items-start justify-start py-2 gap-[1rem]">
          {["Home", "Services", "About Us"].map((elem, index) => (
          <div key={index} onClick={() => handleActive(index)} className="flex flex-col justify-start items-center">
            <p
              className={
                active === index
                  ? `${poppins.className} text-blue text-[17px] font-normal`
                  : `${poppins.className} text-black text-[17px] font-normal`
              }
            >
              {elem}
            </p>
          </div>
        ))}
        </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
