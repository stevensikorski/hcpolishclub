"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function BannerComponent() {
  const scrollPage = () => {
    window.scrollTo({
      top: window.innerHeight / 2 - parseFloat(getComputedStyle(document.documentElement).fontSize) * 4,
      behavior: "smooth",
    });
  };

  return (
    <section className={`full h-banner w-full`}>
      <div className={`relative h-banner w-full bg-czerwony flex flex-col justify-center text-center items-center`}>
        <Image src="/Hunter.jpeg" alt="Hunter" layout="fill" objectFit="cover" objectPosition="bottom" priority className="absolute inset-0 z-0 grayscale opacity-25"></Image>
        <Image src="/CoatOfArmsTransparent.svg" alt="Coat of Arms" height="24" width="24" className="relative size-20"></Image>
        <motion.button onClick={scrollPage} className="absolute bottom-0 mb-4 z-20 hidden desktop:block" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
          <MdOutlineKeyboardArrowDown className="relative size-8 text-white"></MdOutlineKeyboardArrowDown>
        </motion.button>
      </div>
    </section>
  );
}
