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
    <main className="min-h-screen bg-slate-50 px-6 py-20 lg:px-10">
      <div
        className={`mx-auto mb-14 max-w-7xl transition-all duration-700 ${
          rendered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
          Selected Work
        </p>
        <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
          Practical applications built for real workflows.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          A collection of applications and systems I have worked on, combining
          maintainable architecture, responsive interfaces, and business-focused
          features.
        </p>
      </div>

      <div
        className={`mx-auto grid max-w-7xl grid-cols-1 gap-8 transition-all duration-700 ease-in-out md:grid-cols-2 lg:grid-cols-3 ${
          rendered ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-lg shadow-slate-200/70 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative h-64 w-full overflow-hidden bg-slate-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            <div className="p-6">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Project {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-5 text-xl font-bold tracking-tight text-slate-950">
                {project.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Jether Balabagno. Built with Next.js and
        Tailwind CSS.
      </div>
    </main>
  );
};

export default Projects;
