"use client";

import { motion } from "framer-motion";
import React from "react";

const SkillsList = () => {
  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "React Native",
    "Node.js",
    "Tailwind CSS",
    "Prisma",
    "Python",
  ];

  const githubUsername = "jether360";

  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100 lg:px-10"
    >
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-sky-300">
              Technical Capability
            </p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Tools I use to ship dependable software.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            My work spans front-end interfaces, back-end APIs, database-backed
            workflows, mobile development, and test automation.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <motion.div
              whileHover={{ y: -6 }}
              key={skill}
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-center font-semibold text-white shadow-lg shadow-black/20 transition hover:border-sky-300/60 hover:bg-white/[0.10]"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-300">
                GitHub Activity
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Contribution snapshot
              </h2>
            </div>
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
            >
              View GitHub
            </a>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-8">
            <img
              src={`https://ghchart.rshah.org/38bdf8/${githubUsername}`}
              alt="GitHub Contributions Graph"
              className="w-full rounded-2xl border border-white/10 bg-[#0d1117] p-4 shadow-xl"
            />

            <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com?user=${githubUsername}&theme=transparent&hide_border=true&ring=38BDF8&fire=38BDF8&currStreakLabel=38BDF8`}
                alt="GitHub Streak Stats"
                className="w-full max-w-[420px] rounded-xl shadow-lg"
              />
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark&hide_border=true`}
                alt="Top Languages"
                className="w-full max-w-[420px] rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default SkillsList;
