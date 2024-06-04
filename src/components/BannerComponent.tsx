"use client";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TextProperties } from "@/lib/data";

export const BannerComponent = ({ params }: { params: TextProperties }) => {
  const scrollPage = () => {
    window.scrollTo({
      top: window.innerHeight / 2 - parseFloat(getComputedStyle(document.documentElement).fontSize) * 4,
      behavior: "smooth",
    });
  };

  return (
    <section className="full h-banner w-full">
      <div className="relative h-banner w-full bg-czerwony flex flex-col justify-center text-center items-center">
        <Image src="/Hunter.jpeg" alt="Image" fill priority style={{ objectFit: "cover", objectPosition: "bottom" }} className="absolute inset-0 grayscale opacity-25 blur"></Image>
        <div className="flex">
          <Image src="/CoatOfArmsTransparent.svg" alt="Image" height="16" width="16" className="relative size-14"></Image>
          <h1 className={clsx("flex items-center ml-4 text-4xl font-semibold text-white relative", { hidden: params.text === "" })}>{params.text}</h1>
        </div>
        <motion.button onClick={scrollPage} className="absolute bottom-0 mb-4 z-20 hidden desktop:block" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
          <MdOutlineKeyboardArrowDown className="relative size-8 text-white"></MdOutlineKeyboardArrowDown>
        </motion.button>
      </div>
    </section>
  );
};

export default BannerComponent;
