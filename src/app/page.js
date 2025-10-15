'use client'

import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import Pic from '../components/assets/pic.PNG';

export default function Home() {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100">
      <main
        className={`flex flex-col items-center justify-center text-center p-10 transition-all duration-700 ease-in-out transform ${
          rendered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
        }`}
      >
        {/* Card container */}
        <div className="relative backdrop-blur-xl bg-white/40 border border-white/30 shadow-2xl rounded-3xl p-10 max-w-lg w-full hover:shadow-blue-200 transition-all duration-300">
          {/* Profile Image */}
          <div className="relative w-36 h-36 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 blur-md opacity-50 animate-pulse" />
            <Image
              src={Pic}
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full shadow-lg border-4 border-white relative z-10"
            />
          </div>

          {/* Name */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
            Hello, I’m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Jether B. Balabagno
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-gray-600 mt-4 text-base md:text-lg">
            Passionate about crafting creative and efficient digital solutions.
          </p>

          {/* Role */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-6">
            Software Developer
          </h2>

          {/* Social Icons */}
          <div className="flex justify-center mt-8 space-x-6">
            <a
              href="https://www.linkedin.com/in/jether-balabagno-421b42204/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <FaLinkedin className="text-4xl text-blue-600 border-2 border-transparent rounded-full p-2 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500 group-hover:shadow-blue-200" />
            </a>
            <a
              href="https://github.com/jether360"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <FaGithub className="text-4xl text-gray-800 border-2 border-transparent rounded-full p-2 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-gray-600 group-hover:shadow-gray-300" />
            </a>
          </div>

          {/* Animated Glow Underline */}
          <div className="mt-8">
            <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Footer / signature */}
        <p className="mt-10 text-gray-500 text-sm">
          © {new Date().getFullYear()} Jether Balabagno — Crafted with 💙
        </p>
      </main>
    </div>
  );
}
