"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Pic from "../assets/logo-1.png";

const Navigation = () => {
  const cvUrl =
    "https://drive.google.com/file/d/1ancDQbrlktHIqRldfJXqyJwFzudDWO_f/view?usp=sharing";

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLinkClick = () => {
    setIsDrawerOpen(false); // Close the drawer when a link is clicked
  };

  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <header className="text-white flex justify-between items-center container mx-auto px-10">
          {" "}
          {/* Added shadow-md class */}
          <div className="flex items-center">
            <button
              className="text-xl mr-4 lg:hidden"
              onClick={toggleDrawer}
              style={{ color: "black" }}
            >
              &#9776;
            </button>
            <a href="/" rel="noopener noreferrer">
              <Image src={Pic} alt="Logo" width={150} />
            </a>
          </div>
          <nav className="hidden lg:flex space-x-10">
            <Link
              href="/"
              prefetch={true}
              style={{ color: "#424242", fontSize: 20, fontWeight: 500 }}
            >
              Home
            </Link>
            <Link
              href="/projects"
              prefetch={true}
              style={{ color: "#424242", fontSize: 20, fontWeight: 500 }}
            >
              Projects
            </Link>
            <Link
              href="/skills"
              prefetch={true}
              style={{ color: "#424242", fontSize: 20, fontWeight: 500 }}
            >
              Skills
            </Link>
            <a
              href={cvUrl}
              download
              className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600"
              target="_blank"
            >
              Download CV
            </a>
          </nav>
        </header>
      </div>
      {isDrawerOpen && (
        <div className="lg:hidden bg-gray-800 text-white p-4 absolute top-1 left-0 right-0">
          <nav className="flex flex-col space-y-2">
            <Link href="/" prefetch={true} onClick={handleLinkClick}>
              Home
            </Link>
            <Link href="/projects" prefetch={true} onClick={handleLinkClick}>
              Projects
            </Link>
            <Link href="/skills" prefetch={true} onClick={handleLinkClick}>
              Skills
            </Link>
            <a
              href={cvUrl}
              download
              className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600"
              target="_blank"
              onClick={handleLinkClick}
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
