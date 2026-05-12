"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Pic from "../assets/logo-1.png";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const handleLinkClick = () => setIsDrawerOpen(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/cv", label: "CV" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 lg:px-8">
          <div className="flex items-center">
            <button
              className="mr-3 rounded-lg border border-slate-200 px-2.5 py-1.5 text-lg text-slate-800 transition hover:bg-slate-100 lg:hidden"
              onClick={toggleDrawer}
              aria-label="Open navigation menu"
            >
              &#9776;
            </button>
            <Link href="/" className="flex items-center space-x-2">
              <Image src={Pic} alt="Logo" width={92} height={31} priority />
            </Link>
          </div>

          <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-1.5 text-[13px] font-semibold text-slate-700 transition hover:bg-slate-900 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleDrawer}
            />

            <motion.div
              className="fixed left-0 top-0 z-50 flex h-full w-3/4 flex-col space-y-5 bg-white p-5 text-slate-800 shadow-2xl sm:w-1/2"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
            >
              <div className="flex items-center justify-between">
                <Image src={Pic} alt="Logo" width={84} height={28} />
                <button
                  onClick={toggleDrawer}
                  className="rounded-full border border-slate-200 px-2.5 py-1 text-xl text-slate-600 transition hover:bg-slate-100"
                  aria-label="Close navigation menu"
                >
                  ✕
                </button>
              </div>

              <nav className="mt-3 flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="rounded-xl px-3.5 py-2.5 text-[15px] font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-950"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
