"use client";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { MdMenu, MdClose } from "react-icons/md";

import { NavigationButton } from "./NavigationButtonComponent";
import { MobileNavigationButton } from "./MobileNavigationButtonComponent";
import { navigationData, navigationMobileData } from "@/lib/data";

export const HeaderComponent = () => {
  const path = usePathname().substring(1) || "home";
  const [mobileNavigation, setMobileNavigation] = useState(false);

  const toggleMobileNavigation = () => {
    const mobileState = !mobileNavigation;
    setMobileNavigation(mobileState);
    if (mobileState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMobileNavigation = () => {
    setMobileNavigation(false);
    document.body.style.overflow = "";
  };

  return (
    <header className="fixed top-0 h-16 w-full bg-white border-b-2 shadow-lg z-50">
      <section className="header flex items-center h-full">
        {/* Polish Cultural Club */}
        <a href={navigationData.home.url} className="flex mr-3 group">
          <Image src="/CoatOfArmsTransparent.svg" alt="Image" height="40" width="40" priority className="rounded-md p-0.5 bg-czerwony"></Image>
          <div className="h-10 py-1 ml-3 flex flex-col justify-center">
            <h1 className="logo-text group-hover:text-czerwony transition duration-200">Polish Cultural Club</h1>
            <h2 className="logo-text font-semibold group-hover:text-czerwony transition duration-200">Hunter College</h2>
          </div>
        </a>
        {/* Navigation */}
        <nav className="h-full flex flex-grow items-center justify-end">
          {/* Desktop Navigation */}
          <ul className="desktop:grid grid-flow-col hidden">
            {Object.entries(navigationData).map(([key, item]) => (
              <NavigationButton key={key} params={{ text: item.text, url: item.url, list: item.list, visible: item.visible, items: item.items, path: path }} />
            ))}
          </ul>
          {/* Mobile Button */}
          <button className="h-16 w-10 flex justify-center items-center z-50 desktop:hidden" onClick={toggleMobileNavigation}>
            <MdMenu className={clsx("mobile-button", { flex: mobileNavigation === false, hidden: mobileNavigation === true })}></MdMenu>
            <MdClose className={clsx("mobile-button", { flex: mobileNavigation === true, hidden: mobileNavigation === false })}></MdClose>
          </button>
        </nav>
        {/* Mobile Navigation */}
        <nav className={clsx("fixed inset-0 z-40", { "pointer-events-auto": mobileNavigation, "pointer-events-none": !mobileNavigation })}>
          <motion.div animate={{ x: mobileNavigation ? 0 : "100%" }} initial={{ x: "100%" }} transition={{ duration: 0.2 }} className="fixed top-0 left-0 h-full w-full">
            <div className="h-[200vh] w-screen px-6 absolute inset-0 bg-slate-50 mt-16 overflow-y-scroll">
              {/* Quick Links */}
              <ul className="header grid">
                {Object.keys(navigationMobileData).map((key) => {
                  return <MobileNavigationButton key={key} params={{ text: navigationMobileData[key].text, url: navigationMobileData[key].url, list: navigationMobileData[key].list, visible: navigationMobileData[key].visible, items: navigationMobileData[key].items, path: path, closeMobileNavigation: closeMobileNavigation }}></MobileNavigationButton>;
                })}
              </ul>
            </div>
          </motion.div>
        </nav>
      </section>
    </header>
  );
};

export default HeaderComponent;
