"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import Pic from "../components/assets/pic.PNG";

export default function Home() {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  const highlights = [
    "Full-stack web apps",
    "API development",
    "Automation testing",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50">
      <section
        className={`relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-20 transition-all duration-700 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 ${
          rendered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.20),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.16),_transparent_30%)]" />

        <div>
          <p className="mb-5 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
            Software Developer based in Davao City, Philippines
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">
            Building reliable digital products with clean, practical execution.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I am Jether Balabagno, a software developer focused on Next.js,
            React, TypeScript, Prisma, Python, and automation testing. I help
            teams turn business workflows into polished, maintainable software.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/projects"
              className="rounded-full bg-slate-950 px-7 py-3 text-center text-sm font-bold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              View Projects
            </a>
            <a
              href="/cv"
              className="rounded-full border border-slate-300 bg-white px-7 py-3 text-center text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-950"
            >
              Open CV
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200">
          <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
            <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-3xl border border-white/20 bg-slate-800 shadow-2xl">
              <Image
                src={Pic}
                alt="Jether Balabagno"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
                Available for roles
              </p>
              <h2 className="mt-3 text-3xl font-bold">Jether B. Balabagno</h2>
              <p className="mt-3 text-slate-300">
                Software Developer / Junior Tech Lead
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://www.linkedin.com/in/jether-balabagno-421b42204/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white hover:text-slate-950"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/jether360"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white hover:text-slate-950"
                aria-label="GitHub profile"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
