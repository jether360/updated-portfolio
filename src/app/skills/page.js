"use client";

import {
  FaJs,
  FaReact,
  FaMobile,
  FaPython,
  FaFire,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import { useEffect, useState } from "react"; // Import useEffect and useState

const SkillsList = () => {
  const [rendered, setRendered] = useState(false); // State to track if the component has rendered

  // useEffect to set rendered to true after the component has mounted
  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        className={`flex min-h-screen  flex-col items-center justify-start lg:p-10 ${
          rendered ? "opacity-100 scale-100" : "opacity-0 scale-90" // Apply opacity and scale based on the rendered state
        } transition-all duration-500 ease-in-out`}
        //style={{ backgroundColor: "white" }}
      >
        <h1 className="text-2xl font-bold mb-4">Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="flex items-center">
            <FaJs className="mr-2 text-blue-500" />
            <span className="text-gray-500">JavaScript</span>
          </div>
          <div className="flex items-center">
            <FaReact className="mr-2 text-blue-500" />
            <span className="text-gray-500">React Js</span>
          </div>
          <div className="flex items-center">
            <FaMobile className="mr-2 text-blue-500" />
            <span className="text-gray-500">React Native</span>
          </div>
          <div className="flex items-center">
            <FaPython className="mr-2 text-blue-500" />
            <span className="text-gray-500">Selenium Python</span>
          </div>
          <div className="flex items-center">
            <FaFire className="mr-2 text-blue-500" />
            <span className="text-gray-500">Firebase</span>
          </div>
          <div className="flex items-center">
            <FaDatabase className="mr-2 text-blue-500" />
            <span className="text-gray-500">Django Rest Framework</span>
          </div>
          <div className="flex items-center">
            <FaServer className="mr-2 text-blue-500" />
            <span className="text-gray-500">Next Js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
