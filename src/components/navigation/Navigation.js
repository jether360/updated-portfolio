"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Pic from "../assets/logo-1.png";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const cvUrl =
    "https://drive.google.com/file/d/104l0waHLQhoCGBichE2-hY-7mOOg9cBo/view?usp=sharing";

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const handleLinkClick = () => setIsDrawerOpen(false);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-5 lg:px-10 py-2 lg:py-3">
          {/* Logo + Hamburger */}
          <div className="flex items-center">
            <button
              className="text-2xl mr-3 lg:hidden text-gray-800 focus:outline-none"
              onClick={toggleDrawer}
            >
              &#9776;
            </button>
            <Link href="/" className="flex items-center space-x-2">
              <Image src={Pic} alt="Logo" width={120} height={40} priority />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/projects", label: "Projects" },
              { href: "/skills", label: "Skills" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-700 font-medium text-[17px] hover:text-blue-600 transition-all duration-200 group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-[3px] w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-4 py-[6px] rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 text-sm"
            >
              Download CV
            </a> */}
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleDrawer}
            />

            {/* Drawer Panel */}
            <motion.div
              className="fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white text-gray-800 shadow-xl z-50 p-5 flex flex-col space-y-5"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
            >
              <div className="flex justify-between items-center">
                <Image src={Pic} alt="Logo" width={100} height={40} />
                <button
                  onClick={toggleDrawer}
                  className="text-2xl text-gray-600 hover:text-red-500 transition"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col space-y-4 mt-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/projects", label: "Projects" },
                  { href: "/skills", label: "Skills" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="text-[17px] font-medium text-gray-700 hover:text-blue-500 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center font-semibold px-4 py-[6px] rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                >
                  Download CV
                </a> */}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
