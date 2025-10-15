"use client";

import Image from "next/image";
import firstPic from "../../components/assets/123.PNG";
import secondPic from "../../components/assets/1234.PNG";
import thirdPic from "../../components/assets/12345.PNG";
import fourthPic from "../../components/assets/123456.png";
import fifthPic from "../../components/assets/1234567.png";
import { useEffect, useState } from "react";

const Projects = () => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  const projects = [
    {
      title: "Real Estate API",
      image: firstPic,
      description:
        "A backend system for real estate brokers built with Django Rest Framework and Swagger documentation.",
    },
    {
      title: "Adukasyon Website",
      image: secondPic,
      description:
        "A responsive educational website built with Next.js and Tailwind CSS.",
    },
    {
      title: "Community Builder Alliance",
      image: thirdPic,
      description:
        "A web platform built using Laravel and custom front-end HTML/CSS.",
    },
    {
      title: "Pcbee Job Order Module",
      image: fourthPic,
      description:
        "A Next.js-based app for a computer servicing company. I developed the Job Order Module to manage and track service tasks efficiently.",
    },
    {
      title: "Road Rescue App (Admin Panel)",
      image: fifthPic,
      description:
        "An admin panel built with React Typescript and .Net for the Road Rescue application, designed to oversee and manage roadside assistance operations. The app is currently in development.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-20 px-6 lg:px-20">
      {/* Intro Section */}
      <div
        className={`text-center mb-14 transition-all duration-700 ${
          rendered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A collection of the applications and systems I’ve built — combining
          design, functionality, and clean architecture.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-700 ease-in-out ${
          rendered ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white/60 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full text-white p-6 transition-all duration-500 group-hover:bg-black/50 backdrop-blur-sm">
              <h2 className="text-xl font-semibold tracking-wide">
                {project.title}
              </h2>
              <p className="text-sm mt-2 text-gray-100 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer signature */}
      <div className="text-center mt-20 text-gray-500 text-sm">
        © {new Date().getFullYear()} Jether Balabagno — Built with 💙 using
        Next.js & Tailwind CSS
      </div>
    </div>
  );
};

export default Projects;
