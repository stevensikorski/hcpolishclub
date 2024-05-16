"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { messages } from "@/library/messages";

export default function Home() {
  const [randomMessage, setRandomMessage] = useState({ english: "", polish: "" });

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setRandomMessage(messages[randomIndex]);
  };

  useEffect(() => {
    getRandomMessage();
  }, []);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} className="flex flex-col items-center min-h-screen">
      {/* Polish Cultural Club */}
      <div className="flex justify-center items-center text-center mt-6">
        <Image src="/CoatOfArms.svg" alt="Coat of Arms" height="48" width="48" className="rounded-md"></Image>
        <div className="h-10 py-1 ml-2 my-auto">
          <p className="h-1/2 text-sm text-primary tracking-tighter text-nowrap flex items-center">Polish Cultural Club</p>
          <p className="h-1/2 text-sm text-primary tracking-tighter text-nowrap flex items-center font-semibold">Hunter College</p>
        </div>
      </div>

      {/* Maintenance */}
      <div className="my-auto -translate-y-9">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-primary font-bold text-3xl mb-4">Website Maintenance Page</h2>
          <p className="text-secondary italic">{randomMessage.english}</p>
          <p className="text-secondary italic">{randomMessage.polish}</p>
        </div>
      </div>
    </motion.main>
  );
}
