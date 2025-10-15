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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800 text-gray-100"
    >
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        My Tech Skills
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-20">
        {skills.map((skill) => (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 1 }}
            key={skill}
            className="bg-gray-800/70 hover:bg-gray-700/70 text-white font-semibold py-3 px-6 rounded-2xl shadow-md border border-gray-700 transition-all duration-300 text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {/* GitHub Contributions Section */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-100">
        GitHub Contributions
      </h2>

      <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-8">
        {/* ✅ Reliable graph source */}
        <img
          src={`https://ghchart.rshah.org/2ea043/${githubUsername}`}
          alt="GitHub Contributions Graph"
          className="w-full max-w-4xl rounded-xl shadow-xl bg-[#0d1117] p-4 border border-gray-700"
        />

        {/* Stats cards (optional) */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com?user=${githubUsername}&theme=transparent&hide_border=true&ring=7B61FF&fire=7B61FF&currStreakLabel=7B61FF`}
            alt="GitHub Streak Stats"
            className="w-[420px] shadow-lg rounded-lg"
          />
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark&hide_border=true`}
            alt="Top Languages"
            className="w-[420px] shadow-xl rounded-lg"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsList;
