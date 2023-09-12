'use client'

import { FaJs, FaReact, FaMobile, FaPython, FaFire, FaDatabase, FaServer } from "react-icons/fa";
import { useEffect, useState } from "react"; // Import useEffect and useState

const SkillsList = () => {
  const [rendered, setRendered] = useState(false); // State to track if the component has rendered

  // useEffect to set rendered to true after the component has mounted
  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <div className={`flex max-h-screen mt-20 flex-col items-center justify-between lg:p-10 ${
      rendered ? "opacity-100 scale-100" : "opacity-0 scale-90" // Apply opacity and scale based on the rendered state
    } transition-all duration-500 ease-in-out`}>
      <h1 className="text-2xl font-bold mb-4">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
        <div className="flex items-center">
          <FaJs className="mr-2 text-blue-500" />
          <span>JavaScript</span>
        </div>
        <div className="flex items-center">
          <FaReact className="mr-2 text-blue-500" />
          <span>React Js</span>
        </div>
        <div className="flex items-center">
          <FaMobile className="mr-2 text-blue-500" />
          <span>React Native</span>
        </div>
        <div className="flex items-center">
          <FaPython className="mr-2 text-blue-500" />
          <span>Selenium Python</span>
        </div>
        <div className="flex items-center">
          <FaFire className="mr-2 text-blue-500" />
          <span>Firebase</span>
        </div>
        <div className="flex items-center">
          <FaDatabase className="mr-2 text-blue-500" />
          <span>Django Rest Framework</span>
        </div>
        <div className="flex items-center">
          <FaServer className="mr-2 text-blue-500" />
          <span>Next Js</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsList;