"use client";

import {
  FaJs,
  FaReact,
  FaMobile,
  FaPython,
} from "react-icons/fa";
import { SiTypescript, SiCypress,SiNextdotjs } from "react-icons/si";
import { useEffect, useState } from "react";

const SkillsList = () => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  const developmentSkills = [
    { icon: <FaJs className="mr-2 text-blue-500" />, name: "JavaScript", rating: 9 },
    { icon: <SiTypescript className="mr-2 text-blue-500" />, name: "TypeScript", rating: 8 },
    { icon: <FaReact className="mr-2 text-blue-500" />, name: "React Js", rating: 9 },
    { icon: <SiNextdotjs className="mr-2 text-blue-500" />, name: "Next Js", rating: 7 },
    { icon: <FaMobile className="mr-2 text-blue-500" />, name: "React Native", rating: 9 },
  ];

  const automationSkills = [
    { icon: <FaPython className="mr-2 text-blue-500" />, name: "Selenium Python", rating: 6 },
    { icon: <SiCypress className="mr-2 text-blue-500" />, name: "Cypress", rating: 7 },
  ];

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div
        className={`flex min-h-screen flex-col items-center justify-start lg:p-10 ${
          rendered ? "opacity-100 scale-100" : "opacity-0 scale-90"
        } transition-all duration-500 ease-in-out`}
      >
        <h1 className="text-3xl font-extrabold text-gray-700 mb-6">My Skills</h1>

        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-400">Development Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {developmentSkills.map((skill, index) => (
              <div
                className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
                key={index}
              >
                <div className="flex items-center mb-3">
                  {skill.icon}
                  <span className="text-gray-800 font-medium text-lg">{skill.name}</span>
                </div>
                <div className="text-yellow-500 font-bold">Rating: {skill.rating}/10</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-green-600 mb-4 border-b-2 border-green-400">Automation Testing Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {automationSkills.map((skill, index) => (
              <div
                className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
                key={index}
              >
                <div className="flex items-center mb-3">
                  {skill.icon}
                  <span className="text-gray-800 font-medium text-lg">{skill.name}</span>
                </div>
                <div className="text-yellow-500 font-bold">Rating: {skill.rating}/10</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
